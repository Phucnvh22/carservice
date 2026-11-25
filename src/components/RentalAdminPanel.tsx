"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import {
  CarFront,
  Clock3,
  Database,
  RefreshCcw,
  Route,
  Save,
  UserRound,
} from "lucide-react"
import {
  createInitialRentalAdminState,
  RENTAL_ADMIN_STORAGE_KEY,
  type RentalAdminState,
  type RentalTrip,
} from "@/lib/rental-admin"

type TripDraft = {
  renterName: string
  renterPhone: string
  renterIdentity: string
  rentedAt: string
  expectedReturnAt: string
  tripKm: string
  note: string
}

const createEmptyDraft = (): TripDraft => ({
  renterName: "",
  renterPhone: "",
  renterIdentity: "",
  rentedAt: "",
  expectedReturnAt: "",
  tripKm: "",
  note: "",
})

const createTripId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }

  return `trip-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

const mapTripToDraft = (trip?: RentalTrip): TripDraft => ({
  renterName: trip?.renterName || "",
  renterPhone: trip?.renterPhone || "",
  renterIdentity: trip?.renterIdentity || "",
  rentedAt: trip?.rentedAt || "",
  expectedReturnAt: trip?.expectedReturnAt || "",
  tripKm: trip?.tripKm || "",
  note: trip?.note || "",
})

const buildDrafts = (state: RentalAdminState) =>
  Object.fromEntries(
    state.vehicles.map((vehicle) => {
      const activeTrip = state.trips.find(
        (trip) => trip.id === vehicle.activeTripId && trip.status === "active",
      )

      return [vehicle.id, mapTripToDraft(activeTrip)]
    }),
  ) as Record<string, TripDraft>

const formatDateTime = (value: string) => {
  if (!value) return "Chưa cập nhật"

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date)
}

const formatRelativeUpdate = (value: string) => {
  if (!value) return "Chưa có thay đổi"
  return `Cập nhật ${formatDateTime(value)}`
}

const loadInitialState = (): RentalAdminState => {
  const initialState = createInitialRentalAdminState()

  if (typeof window === "undefined") return initialState

  try {
    const raw = window.localStorage.getItem(RENTAL_ADMIN_STORAGE_KEY)
    if (!raw) return initialState

    const parsed = JSON.parse(raw) as RentalAdminState
    if (!parsed?.vehicles || !parsed?.trips) return initialState

    return parsed
  } catch {
    return initialState
  }
}

export const RentalAdminPanel = () => {
  const [state, setState] = useState<RentalAdminState>(() =>
    createInitialRentalAdminState(),
  )
  const [drafts, setDrafts] = useState<Record<string, TripDraft>>(() =>
    buildDrafts(createInitialRentalAdminState()),
  )
  const [hydrated, setHydrated] = useState(false)
  const [flashMessage, setFlashMessage] = useState("")

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const loadedState = loadInitialState()
      setState(loadedState)
      setDrafts(buildDrafts(loadedState))
      setHydrated(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(RENTAL_ADMIN_STORAGE_KEY, JSON.stringify(state))
  }, [hydrated, state])

  useEffect(() => {
    if (!flashMessage) return

    const timer = window.setTimeout(() => setFlashMessage(""), 2400)
    return () => window.clearTimeout(timer)
  }, [flashMessage])

  const updateDraft = (
    vehicleId: string,
    field: keyof TripDraft,
    value: string,
  ) => {
    setDrafts((current) => ({
      ...current,
      [vehicleId]: {
        ...(current[vehicleId] || createEmptyDraft()),
        [field]: value,
      },
    }))
  }

  const setNextState = (
    updater: (current: RentalAdminState) => RentalAdminState,
  ) => {
    setState((current) => {
      const next = updater(current)
      return {
        ...next,
        updatedAt: new Date().toISOString(),
      }
    })
  }

  const validateDraft = (vehicleId: string) => {
    const draft = drafts[vehicleId] || createEmptyDraft()

    if (
      draft.renterName.trim().length < 2 ||
      draft.renterPhone.trim().length < 9 ||
      draft.rentedAt.trim().length < 5 ||
      draft.tripKm.trim().length < 1
    ) {
      setFlashMessage("Vui lòng nhập đủ tên, số điện thoại, ngày thuê và số km.")
      return null
    }

    return draft
  }

  const startRental = (vehicleId: string) => {
    const draft = validateDraft(vehicleId)
    if (!draft) return

    const vehicle = state.vehicles.find((item) => item.id === vehicleId)
    if (!vehicle) return

    const now = new Date().toISOString()
    const tripId = createTripId()
    const trip: RentalTrip = {
      id: tripId,
      vehicleId,
      vehicleName: vehicle.name,
      plateNumber: vehicle.plateNumber,
      renterName: draft.renterName.trim(),
      renterPhone: draft.renterPhone.trim(),
      renterIdentity: draft.renterIdentity.trim(),
      rentedAt: draft.rentedAt,
      expectedReturnAt: draft.expectedReturnAt,
      tripKm: draft.tripKm.trim(),
      note: draft.note.trim(),
      status: "active",
      completedAt: "",
      createdAt: now,
      updatedAt: now,
    }

    setNextState((current) => ({
      ...current,
      vehicles: current.vehicles.map((item) =>
        item.id === vehicleId
          ? {
              ...item,
              status: "rented",
              activeTripId: tripId,
              updatedAt: now,
            }
          : item,
      ),
      trips: [trip, ...current.trips],
    }))
    setFlashMessage(`Đã lưu chuyến thuê cho xe ${vehicle.name}.`)
  }

  const saveActiveRental = (vehicleId: string) => {
    const draft = validateDraft(vehicleId)
    if (!draft) return

    const vehicle = state.vehicles.find((item) => item.id === vehicleId)
    if (!vehicle?.activeTripId) return

    const now = new Date().toISOString()
    setNextState((current) => ({
      ...current,
      vehicles: current.vehicles.map((item) =>
        item.id === vehicleId ? { ...item, updatedAt: now } : item,
      ),
      trips: current.trips.map((trip) =>
        trip.id === vehicle.activeTripId
          ? {
              ...trip,
              renterName: draft.renterName.trim(),
              renterPhone: draft.renterPhone.trim(),
              renterIdentity: draft.renterIdentity.trim(),
              rentedAt: draft.rentedAt,
              expectedReturnAt: draft.expectedReturnAt,
              tripKm: draft.tripKm.trim(),
              note: draft.note.trim(),
              updatedAt: now,
            }
          : trip,
      ),
    }))
    setFlashMessage(`Đã cập nhật chuyến thuê của xe ${vehicle.name}.`)
  }

  const completeRental = (vehicleId: string) => {
    const draft = validateDraft(vehicleId)
    if (!draft) return

    const vehicle = state.vehicles.find((item) => item.id === vehicleId)
    if (!vehicle?.activeTripId) return

    const now = new Date().toISOString()
    setNextState((current) => ({
      ...current,
      vehicles: current.vehicles.map((item) =>
        item.id === vehicleId
          ? {
              ...item,
              status: "available",
              activeTripId: null,
              updatedAt: now,
            }
          : item,
      ),
      trips: current.trips.map((trip) =>
        trip.id === vehicle.activeTripId
          ? {
              ...trip,
              renterName: draft.renterName.trim(),
              renterPhone: draft.renterPhone.trim(),
              renterIdentity: draft.renterIdentity.trim(),
              rentedAt: draft.rentedAt,
              expectedReturnAt: draft.expectedReturnAt,
              tripKm: draft.tripKm.trim(),
              note: draft.note.trim(),
              status: "completed",
              completedAt: now,
              updatedAt: now,
            }
          : trip,
      ),
    }))
    setDrafts((current) => ({
      ...current,
      [vehicleId]: createEmptyDraft(),
    }))
    setFlashMessage(`Xe ${vehicle.name} đã được trả và chuyển sang trạng thái rảnh.`)
  }

  const resetData = () => {
    if (!window.confirm("Đặt lại toàn bộ dữ liệu quản lý thuê xe?")) return

    const initialState = createInitialRentalAdminState()
    setState(initialState)
    setDrafts(buildDrafts(initialState))
    setFlashMessage("Đã đặt lại dữ liệu quản lý cho thuê xe.")
  }

  const summary = useMemo(() => {
    const availableCount = state.vehicles.filter(
      (vehicle) => vehicle.status === "available",
    ).length
    const rentedCount = state.vehicles.length - availableCount
    const completedTrips = state.trips.filter(
      (trip) => trip.status === "completed",
    ).length
    const activeKm = state.trips
      .filter((trip) => trip.status === "active")
      .reduce((total, trip) => total + Number(trip.tripKm || 0), 0)

    return {
      availableCount,
      rentedCount,
      completedTrips,
      activeKm,
    }
  }, [state])

  const completedTrips = useMemo(
    () =>
      [...state.trips]
        .filter((trip) => trip.status === "completed")
        .sort((a, b) => (a.completedAt < b.completedAt ? 1 : -1)),
    [state.trips],
  )

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              <Database className="h-4 w-4" />
              Admin cho thuê xe
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Quản lý xe đang rảnh và xe đang cho thuê
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                Trang này lưu trực tiếp trên trình duyệt hiện tại, phù hợp để theo
                dõi nhanh xe đang thuê, người thuê và số km của từng chuyến.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <button
              type="button"
              onClick={resetData}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <RefreshCcw className="h-4 w-4" />
              Đặt lại dữ liệu
            </button>
            <div className="text-xs text-slate-500">
              {hydrated ? formatRelativeUpdate(state.updatedAt) : "Đang tải dữ liệu..."}
            </div>
          </div>
        </div>

        {flashMessage ? (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {flashMessage}
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm text-slate-500">Tổng số xe</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">{state.vehicles.length}</div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="text-sm text-emerald-700">Xe đang rảnh</div>
            <div className="mt-2 text-3xl font-bold text-emerald-700">{summary.availableCount}</div>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <div className="text-sm text-amber-700">Xe đang cho thuê</div>
            <div className="mt-2 text-3xl font-bold text-amber-700">{summary.rentedCount}</div>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
            <div className="text-sm text-sky-700">Km đang theo dõi</div>
            <div className="mt-2 text-3xl font-bold text-sky-700">{summary.activeKm}</div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        {state.vehicles.map((vehicle) => {
          const draft = drafts[vehicle.id] || createEmptyDraft()
          const activeTrip = state.trips.find(
            (trip) => trip.id === vehicle.activeTripId && trip.status === "active",
          )
          const isRented = vehicle.status === "rented"

          return (
            <article
              key={vehicle.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                <div className="relative min-h-[220px] bg-slate-100">
                  {vehicle.imageSrc ? (
                    <Image
                      src={vehicle.imageSrc}
                      alt={vehicle.name}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  ) : null}
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        <CarFront className="h-4 w-4" />
                        {vehicle.plateNumber}
                      </div>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                        {vehicle.name}
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">
                        {vehicle.seats} • {vehicle.meta} • {vehicle.price}
                      </p>
                    </div>

                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                        isRented
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {isRented ? "Đang cho thuê" : "Đang rảnh"}
                    </span>
                  </div>

                  {activeTrip ? (
                    <div className="mt-4 grid gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700 md:grid-cols-2">
                      <div>
                        <div className="flex items-center gap-2 font-semibold text-slate-900">
                          <UserRound className="h-4 w-4" />
                          {activeTrip.renterName}
                        </div>
                        <div className="mt-1">{activeTrip.renterPhone}</div>
                        <div className="mt-1 text-slate-500">
                          {activeTrip.renterIdentity || "Chưa lưu CCCD/GPLX"}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 font-semibold text-slate-900">
                          <Clock3 className="h-4 w-4" />
                          {formatDateTime(activeTrip.rentedAt)}
                        </div>
                        <div className="mt-1">
                          Hẹn trả: {formatDateTime(activeTrip.expectedReturnAt)}
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-slate-600">
                          <Route className="h-4 w-4" />
                          {activeTrip.tripKm} km
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-slate-700">Người thuê</span>
                      <input
                        value={draft.renterName}
                        onChange={(event) =>
                          updateDraft(vehicle.id, "renterName", event.target.value)
                        }
                        placeholder="Nguyễn Văn A"
                        className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-400 focus:bg-white"
                      />
                    </label>

                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-slate-700">Số điện thoại</span>
                      <input
                        value={draft.renterPhone}
                        onChange={(event) =>
                          updateDraft(vehicle.id, "renterPhone", event.target.value)
                        }
                        placeholder="09xx xxx xxx"
                        inputMode="tel"
                        className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-400 focus:bg-white"
                      />
                    </label>

                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-slate-700">CCCD / GPLX</span>
                      <input
                        value={draft.renterIdentity}
                        onChange={(event) =>
                          updateDraft(vehicle.id, "renterIdentity", event.target.value)
                        }
                        placeholder="Số giấy tờ người thuê"
                        className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-400 focus:bg-white"
                      />
                    </label>

                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-slate-700">Số km chuyến thuê</span>
                      <input
                        value={draft.tripKm}
                        onChange={(event) =>
                          updateDraft(vehicle.id, "tripKm", event.target.value)
                        }
                        placeholder="Ví dụ 120"
                        inputMode="numeric"
                        className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-400 focus:bg-white"
                      />
                    </label>

                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-slate-700">Ngày nhận xe</span>
                      <input
                        type="datetime-local"
                        value={draft.rentedAt}
                        onChange={(event) =>
                          updateDraft(vehicle.id, "rentedAt", event.target.value)
                        }
                        className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-400 focus:bg-white"
                      />
                    </label>

                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-slate-700">Ngày dự kiến trả</span>
                      <input
                        type="datetime-local"
                        value={draft.expectedReturnAt}
                        onChange={(event) =>
                          updateDraft(vehicle.id, "expectedReturnAt", event.target.value)
                        }
                        className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-slate-400 focus:bg-white"
                      />
                    </label>

                    <label className="grid gap-1.5 text-sm md:col-span-2">
                      <span className="font-medium text-slate-700">Ghi chú chuyến thuê</span>
                      <textarea
                        value={draft.note}
                        onChange={(event) =>
                          updateDraft(vehicle.id, "note", event.target.value)
                        }
                        placeholder="Tình trạng xe, cọc, yêu cầu thêm..."
                        className="min-h-[96px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-400 focus:bg-white"
                      />
                    </label>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    {isRented ? (
                      <>
                        <button
                          type="button"
                          onClick={() => saveActiveRental(vehicle.id)}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                          <Save className="h-4 w-4" />
                          Lưu thay đổi
                        </button>
                        <button
                          type="button"
                          onClick={() => completeRental(vehicle.id)}
                          className="inline-flex h-11 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                        >
                          Trả xe, chuyển sang rảnh
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => startRental(vehicle.id)}
                        className="inline-flex h-11 items-center justify-center rounded-2xl bg-porsche-red px-5 text-sm font-semibold text-white transition hover:bg-porsche-hoverRed"
                      >
                        Bắt đầu chuyến thuê
                      </button>
                    )}
                  </div>

                  <div className="mt-3 text-xs text-slate-500">
                    {formatRelativeUpdate(vehicle.updatedAt)}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Lịch sử chuyến thuê đã lưu
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Theo dõi lại người thuê và số km của những chuyến đã kết thúc.
            </p>
          </div>
          <div className="text-sm text-slate-500">
            {summary.completedTrips} chuyến đã hoàn tất
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {completedTrips.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
              Chưa có chuyến thuê nào hoàn tất.
            </div>
          ) : (
            completedTrips.map((trip) => (
              <div
                key={trip.id}
                className="grid gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700 md:grid-cols-[1.2fr_1fr_1fr]"
              >
                <div>
                  <div className="font-semibold text-slate-900">
                    {trip.vehicleName} • {trip.plateNumber}
                  </div>
                  <div className="mt-1">{trip.renterName}</div>
                  <div className="mt-1 text-slate-500">{trip.renterPhone}</div>
                </div>

                <div>
                  <div className="font-medium text-slate-900">
                    Nhận xe: {formatDateTime(trip.rentedAt)}
                  </div>
                  <div className="mt-1">
                    Trả xe: {formatDateTime(trip.completedAt)}
                  </div>
                  <div className="mt-1 text-slate-500">
                    Hẹn trả: {formatDateTime(trip.expectedReturnAt)}
                  </div>
                </div>

                <div>
                  <div className="font-medium text-slate-900">{trip.tripKm} km</div>
                  <div className="mt-1 text-slate-500">
                    {trip.renterIdentity || "Không có CCCD/GPLX"}
                  </div>
                  <div className="mt-1">{trip.note || "Không có ghi chú"}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}
