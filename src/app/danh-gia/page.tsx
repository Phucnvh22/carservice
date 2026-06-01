import type { Metadata } from "next"
import Link from "next/link"
import { testimonials } from "@/lib/content"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Đánh giá khách hàng",
  description:
    "Một vài đánh giá từ khách hàng về dịch vụ đặt xe Huế: đưa đón sân bay, city tour và thuê xe tự lái.",
  alternates: { canonical: absUrl("/danh-gia") },
}

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Đánh giá
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Trải nghiệm thực tế từ khách hàng. Bạn cần lịch trình hoặc báo giá,
            nhắn Zalo để chốt nhanh.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/lien-he"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-brand-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
          >
            Liên hệ ngay
          </Link>
          <Link
            href="/dich-vu"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px"
          >
            Xem dịch vụ
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((r) => (
          <div
            key={r.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold text-slate-900">{r.name}</div>
              <div className="rounded-full border border-brand-200 bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
                Đã đặt xe
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50 to-accent-50 p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-2xl font-bold tracking-tight text-slate-900">
              Bạn cần hỗ trợ nhanh?
            </div>
            <div className="mt-2 text-slate-600">
              Gửi thông tin chuyến đi để nhận báo giá chính xác.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/lien-he"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
            >
              Liên hệ / Báo giá
            </Link>
            <Link
              href="/bang-gia"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
