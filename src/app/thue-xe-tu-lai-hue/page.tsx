import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BookingForm } from "@/components/BookingForm"
import { absUrl } from "@/lib/urls"

type CarModel = {
  name: string
  price: string
  meta: string
  tone: "brand" | "accent" | "slate"
  imageSrc?: string
}

const cars: CarModel[] = [
  { name: "Vinfast VF6", price: "Từ 900k/ngày", meta: "5 chỗ • Sạc điện miễn phí", tone: "accent", imageSrc: "https://vinfast-cars.vn/wp-content/uploads/2024/10/vinfast-vf6-trang.png" },
  { name: "Vinfast VF5", price: "Từ 750k/ngày", meta: "5 chỗ • Sạc điện miễn phí", tone: "brand", imageSrc: "https://katavina.com/uploaded/tin-tuc/gia-xe-vf5/gia-xe-vf5.jpg" },
  { name: "Hyundai Elantra", price: "Từ 800k/ngày", meta: "5 chỗ • Cân bằng tiện nghi", tone: "brand", imageSrc: "https://hyundai-mientrung.com/wp-content/uploads/2023/11/huyndai-elantra-2022_003.png" },
  { name: "Vinfast VF9", price: "Từ 1tr8/ngày", meta: "7 chỗ • Gầm cao • Thoải mái", tone: "brand", imageSrc: "https://vinfastcamau.vn/data/product/VF9/vf9-trang.png" },
  { name: "Kia Sorento", price: "Từ 1tr3/ngày", meta: "7 chỗ • Rộng rãi cho gia đình", tone: "slate", imageSrc: "https://kiabinhtrieu3s.com/wp-content/uploads/2022/06/kia-sorento-mau-trang-glacial-white-pearl.png" },
  { name: "Kia Canival", price: "Từ 1tr8/ngày", meta: "7 chỗ • Đi đường dài ổn định", tone: "slate", imageSrc: "https://www.kianhatrang.com/storage/pagedata/101177/img/upload/hinhanh/Carnival/mausac/2.jpeg" },
]

const CarArt = ({ tone, title }: { tone: CarModel["tone"]; title: string }) => {
  const tint =
    tone === "brand"
      ? { a: "#6366f1", b: "#a5b4fc" }
      : tone === "accent"
        ? { a: "#06b6d4", b: "#a5f3fc" }
        : { a: "#475569", b: "#cbd5e1" }

  return (
    <svg
      viewBox="0 0 720 360"
      role="img"
      aria-label={title}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={tint.b} stopOpacity="0.85" />
          <stop offset="1" stopColor={tint.a} stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="720" height="360" fill="url(#bg)" rx="32" />
      <path
        d="M40 310c120-70 230-100 360-100s240 30 320 100"
        fill="#0b1220"
        opacity="0.18"
      />
      <path
        d="M154 228c18-30 44-52 74-60l92-24c28-7 58-7 86 0l84 22c34 9 64 35 82 70l22 44c8 16-4 34-22 34H170c-20 0-33-20-24-38l32-48Z"
        fill="#ffffff"
        opacity="0.92"
      />
      <path
        d="M250 168l56-14c18-5 38-5 56 0l52 13c8 2 14 10 14 18v34H234v-34c0-8 6-16 16-17Z"
        fill="#0b1220"
        opacity="0.12"
      />
      <path
        d="M178 266h364c14 0 26 12 26 26v10c0 10-8 18-18 18h-36c-6 0-11-3-15-8l-10-16H232l-10 16c-4 5-9 8-15 8h-39c-10 0-18-8-18-18v-10c0-14 12-26 28-26Z"
        fill="#0b1220"
        opacity="0.18"
      />
      <circle cx="236" cy="304" r="26" fill="#0b1220" opacity="0.75" />
      <circle cx="486" cy="304" r="26" fill="#0b1220" opacity="0.75" />
      <circle cx="236" cy="304" r="14" fill="#ffffff" opacity="0.9" />
      <circle cx="486" cy="304" r="14" fill="#ffffff" opacity="0.9" />
      <path d="M120 70h520" stroke="url(#shine)" strokeWidth="18" strokeLinecap="round" />
    </svg>
  )
}

const CarCard = ({ car }: { car: CarModel }) => {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
        <div className="absolute inset-0">
          {car.imageSrc ? (
            <Image
              src={car.imageSrc}
              alt={`Xe ${car.name}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <CarArt tone={car.tone} title={`Xe ${car.name}`} />
          )}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="text-base font-semibold tracking-tight text-slate-900">
            {car.name}
          </div>
          <div className="rounded-full border border-brand-200 bg-gradient-to-r from-brand-50 to-accent-50 px-3 py-1 text-xs font-semibold text-slate-900">
            {car.price}
          </div>
        </div>
        <div className="text-sm leading-relaxed text-slate-600">{car.meta}</div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/lien-he"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-2xl bg-brand-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
          >
            Đặt xe
          </Link>
          <Link
            href="/bang-gia"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px"
          >
            Xem giá
          </Link>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Thuê xe tự lái Huế - Nhận xe nhanh, thủ tục gọn",
  description:
    "Thuê xe tự lái tại Huế theo ngày/tuần: xe sạch đẹp, nhận xe nhanh. Hỗ trợ tư vấn dòng xe phù hợp lịch trình và số người.",
  alternates: { canonical: absUrl("/thue-xe-tu-lai-hue") },
}

export default function SelfDriveHuePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Self-drive • Huế
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Thuê xe tự lái Huế
          </h1>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/1.png" 
              alt="Thuê xe tự lái Huế" 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <p className="max-w-prose text-slate-600">
            Dành cho bạn muốn chủ động lịch trình: đi Lăng Cô, Bạch Mã, Quảng Trị,
            Đà Nẵng, Hội An... Nhận xe nhanh, xe sạch đẹp.
          </p>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Điều kiện cơ bản
            </div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <div>• CCCD/Passport + bằng lái hợp lệ</div>
              <div>• Đặt cọc theo chính sách từng dòng xe</div>
              <div>• Nhận/trả xe theo thoả thuận (có hỗ trợ giao xe)</div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Bạn nhắn lịch trình + số người để bên mình tư vấn dòng xe phù hợp.
            </div>
          </div>

          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">Gợi ý chọn xe</div>
            <ul className="list-disc space-y-2 pl-5">
              <li>1–2 người: xe 4 chỗ gọn, tiết kiệm.</li>
              <li>3–5 người: xe 5–7 chỗ thoải mái hơn.</li>
              <li>Đi đường dài: ưu tiên xe mới, ít hao nhiên liệu.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50 to-accent-50 p-5 shadow-sm">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-2xl font-bold tracking-tight text-slate-900">
                  Dòng xe tự lái phổ biến
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Card gồm ảnh xe, tên xe và giá tham khảo theo ngày.
                </div>
              </div>
              <Link
                href="/lien-he"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-brand-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
              >
                Nhận tư vấn chọn xe
              </Link>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {cars.map((car) => (
                <CarCard key={car.name} car={car} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/lien-he"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px sm:w-auto"
            >
              Nhận báo giá tự lái
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px sm:w-auto"
            >
              Về trang chủ
            </Link>
          </div>
        </div>

        <div className="md:sticky md:top-24">
          <BookingForm defaultService="Thuê xe tự lái" />
        </div>
      </div>
    </div>
  )
}
