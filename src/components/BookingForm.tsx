"use client"

import { useMemo, useState } from "react"
import { site } from "@/lib/site"

type BookingPayload = {
  service: string
  name: string
  phone: string
  pickup: string
  dropoff: string
  datetime: string
  passengers: string
  note: string
}

const services = [
  "Đưa đón sân bay Phú Bài",
  "City tour Huế",
  "Thuê xe tự lái",
  "Thuê xe có tài xế",
]

export const BookingForm = ({ defaultService }: { defaultService?: string }) => {
  const initialService = useMemo(() => {
    if (defaultService && services.includes(defaultService)) return defaultService
    return services[0]
  }, [defaultService])

  const [form, setForm] = useState<BookingPayload>({
    service: initialService,
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    datetime: "",
    passengers: "1-2",
    note: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  )

  const canSubmit =
    form.name.trim().length >= 2 &&
    form.phone.trim().length >= 9 &&
    form.pickup.trim().length >= 2 &&
    form.datetime.trim().length >= 5

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setStatus("sending")
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("bad_response")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-none border border-porsche-grey-20 bg-porsche-white p-6 shadow-2xl shadow-porsche-black/5 md:p-8"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-porsche-red to-porsche-red/50" />
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-porsche-black">
            Đặt xe nhanh
          </h2>
          <p className="mt-1 text-sm text-porsche-grey-40">
            Gửi thông tin, bên mình gọi xác nhận ngay.
          </p>
        </div>
        <a
          href={`tel:${site.phone}`}
          className="group flex items-center gap-2 rounded-none border-2 border-porsche-black px-4 py-2 text-sm font-bold text-porsche-black transition-all hover:bg-porsche-black hover:text-porsche-white active:scale-95"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          {site.phone}
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">Dịch vụ</span>
          <select
            value={form.service}
            onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
            className="h-12 rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 text-porsche-black outline-none transition-all focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">Số khách</span>
          <select
            value={form.passengers}
            onChange={(e) => setForm((p) => ({ ...p, passengers: e.target.value }))}
            className="h-12 rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 text-porsche-black outline-none transition-all focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
          >
            <option value="1-2">1–2</option>
            <option value="3-4">3–4</option>
            <option value="5-7">5–7</option>
            <option value="8+">8+</option>
          </select>
        </label>

        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">Họ tên</span>
          <input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="h-12 rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 text-porsche-black outline-none transition-all placeholder:text-porsche-grey-40 focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
            placeholder="Nguyễn Văn A"
            autoComplete="name"
            required
          />
        </label>

        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">Số điện thoại</span>
          <input
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="h-12 rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 text-porsche-black outline-none transition-all placeholder:text-porsche-grey-40 focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
            placeholder="09xx xxx xxx"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </label>

        <label className="grid gap-1.5 text-sm md:col-span-2">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">Điểm đón</span>
          <input
            value={form.pickup}
            onChange={(e) => setForm((p) => ({ ...p, pickup: e.target.value }))}
            className="h-12 rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 text-porsche-black outline-none transition-all placeholder:text-porsche-grey-40 focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
            placeholder="Sân bay Phú Bài / khách sạn / địa chỉ..."
            required
          />
        </label>

        <label className="grid gap-1.5 text-sm md:col-span-2">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">
            Điểm đến (tuỳ chọn)
          </span>
          <input
            value={form.dropoff}
            onChange={(e) => setForm((p) => ({ ...p, dropoff: e.target.value }))}
            className="h-12 rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 text-porsche-black outline-none transition-all placeholder:text-porsche-grey-40 focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
            placeholder="TP Huế / Lăng Cô / Đà Nẵng..."
          />
        </label>

        <label className="grid gap-1.5 text-sm md:col-span-2">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">Thời gian</span>
          <input
            value={form.datetime}
            onChange={(e) => setForm((p) => ({ ...p, datetime: e.target.value }))}
            className="h-12 rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 text-porsche-black outline-none transition-all placeholder:text-porsche-grey-40 focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
            placeholder="Ví dụ: 08:30 12/06/2026"
            required
          />
        </label>

        <label className="grid gap-1.5 text-sm md:col-span-2">
          <span className="font-semibold text-porsche-grey-80 uppercase tracking-wider text-xs">
            Ghi chú (tuỳ chọn)
          </span>
          <textarea
            value={form.note}
            onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
            className="min-h-[120px] resize-y rounded-none border border-porsche-grey-20 bg-porsche-grey-5 px-4 py-3 text-porsche-black outline-none transition-all placeholder:text-porsche-grey-40 focus:border-porsche-black focus:bg-porsche-white focus:ring-1 focus:ring-porsche-black"
            placeholder="Số chuyến bay, trẻ em, hành lý..."
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="submit"
          disabled={!canSubmit || status === "sending" || status === "sent"}
          aria-disabled={!canSubmit || status === "sending" || status === "sent"}
          className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-none bg-porsche-red px-8 text-sm font-bold uppercase tracking-widest text-porsche-white transition-all hover:bg-porsche-hoverRed active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <span className="relative z-10">
            {status === "sending"
              ? "Đang gửi..."
              : status === "sent"
                ? "Đã gửi thành công"
                : "Gửi yêu cầu"}
          </span>
        </button>

        {status === "error" ? (
          <div className="text-sm font-medium text-porsche-red">
            Gửi chưa thành công. Bạn gọi {site.phone} hoặc nhắn Zalo giúp mình nhé.
          </div>
        ) : (
          <div className="text-sm font-medium text-porsche-grey-40">
            Hoặc nhắn Zalo để chốt giá nhanh.
          </div>
        )}
      </div>
    </form>
  )
}
