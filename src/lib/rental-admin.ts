export type FleetCarTone = "brand" | "accent" | "slate"

export type FleetCar = {
  id: string
  name: string
  plateNumber: string
  seats: string
  price: string
  meta: string
  tone: FleetCarTone
  imageSrc?: string
}

export type RentalStatus = "available" | "rented"

export type RentalTripStatus = "active" | "completed"

export type RentalTrip = {
  id: string
  vehicleId: string
  vehicleName: string
  plateNumber: string
  renterName: string
  renterPhone: string
  renterIdentity: string
  rentedAt: string
  expectedReturnAt: string
  tripKm: string
  note: string
  status: RentalTripStatus
  completedAt: string
  createdAt: string
  updatedAt: string
}

export type ManagedVehicle = FleetCar & {
  status: RentalStatus
  activeTripId: string | null
  updatedAt: string
}

export type RentalAdminState = {
  vehicles: ManagedVehicle[]
  trips: RentalTrip[]
  updatedAt: string
}

export const RENTAL_ADMIN_STORAGE_KEY = "car-service-rental-admin-v1"

export const rentalFleetCatalog: FleetCar[] = [
  {
    id: "vinfast-vf6",
    name: "Vinfast VF6",
    plateNumber: "75A-168.66",
    seats: "5 chỗ",
    price: "Từ 900k/ngày",
    meta: "Sạc điện miễn phí",
    tone: "accent",
    imageSrc: "/images/vinfast-vf6-trang.png",
  },
  {
    id: "vinfast-vf5",
    name: "Vinfast VF5",
    plateNumber: "75A-155.05",
    seats: "5 chỗ",
    price: "Từ 750k/ngày",
    meta: "Sạc điện miễn phí",
    tone: "brand",
    imageSrc: "/images/gia-xe-vf5.jpg",
  },
  {
    id: "hyundai-elantra",
    name: "Hyundai Elantra",
    plateNumber: "75A-122.22",
    seats: "5 chỗ",
    price: "Từ 800k/ngày",
    meta: "Cân bằng tiện nghi",
    tone: "brand",
    imageSrc: "/images/huyndai-elantra-2022_0002_elantra-2022.png",
  },
  {
    id: "vinfast-vf9",
    name: "Vinfast VF9",
    plateNumber: "75A-199.99",
    seats: "7 chỗ",
    price: "Từ 1tr8/ngày",
    meta: "Gầm cao, rộng rãi",
    tone: "brand",
    imageSrc: "/images/Vf9.png",
  },
  {
    id: "kia-sorento",
    name: "Kia Sorento",
    plateNumber: "75A-133.33",
    seats: "7 chỗ",
    price: "Từ 1tr3/ngày",
    meta: "Rộng rãi cho gia đình",
    tone: "slate",
    imageSrc: "/images/sorento.jpg",
  },
  {
    id: "kia-carnival",
    name: "Kia Carnival",
    plateNumber: "75A-188.88",
    seats: "7 chỗ",
    price: "Từ 1tr8/ngày",
    meta: "Đi đường dài ổn định",
    tone: "slate",
    imageSrc: "/images/carnival.png",
  },
]

export const createInitialRentalAdminState = (): RentalAdminState => ({
  vehicles: rentalFleetCatalog.map((car) => ({
    ...car,
    status: "available",
    activeTripId: null,
    updatedAt: "",
  })),
  trips: [],
  updatedAt: "",
})
