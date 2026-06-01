import type { Metadata } from "next"
import Link from "next/link"
import { pricing } from "@/lib/content"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Bảng giá tham khảo",
  description:
    "Bảng giá tham khảo cho các dịch vụ đặt xe tại Huế. Giá có thể thay đổi theo quãng đường, thời gian và dòng xe.",
  alternates: { canonical: absUrl("/bang-gia") },
}

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Bảng giá tham khảo
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Giá phụ thuộc quãng đường, thời gian, dòng xe. Nhắn Zalo hoặc gọi để nhận
          báo giá chính xác theo lịch trình của bạn.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {pricing.map((p) => (
          <div
            key={p.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
          >
            <div className="text-sm font-semibold text-slate-900">{p.title}</div>
            <div className="mt-2 text-3xl font-bold tracking-tight tabular-nums text-slate-900">
              {p.price}
            </div>
            <div className="mt-2 text-sm text-slate-600">{p.meta}</div>
            <Link
              href={p.href}
              className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700 active:translate-y-px"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50 to-accent-50 p-6">
        <div className="text-sm font-semibold text-slate-900">
          Mẹo để báo giá nhanh
        </div>
        <div className="mt-2 text-sm text-slate-700">
          Gửi: dịch vụ, điểm đón/đến, thời gian đi, số khách + hành lý (nếu có).
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/lien-he"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-brand-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
          >
            Liên hệ / Báo giá
          </Link>
          <Link
            href="/dich-vu"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px"
          >
            Xem dịch vụ
          </Link>
        </div>
      </div>
    </div>
  )
}
