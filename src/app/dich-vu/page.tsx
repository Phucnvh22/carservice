import type { Metadata } from "next"
import Link from "next/link"
import { services } from "@/lib/content"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Dịch vụ đặt xe Huế",
  description:
    "Tổng quan dịch vụ đặt xe tại Huế: đưa đón sân bay Phú Bài, city tour, thuê xe tự lái. Chọn dịch vụ phù hợp và xem chi tiết.",
  alternates: { canonical: absUrl("/dich-vu") },
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Dịch vụ
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Chọn mục bạn cần. Mỗi dịch vụ là một màn hình riêng, nội dung tập trung,
            dễ theo dõi.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bang-gia"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px"
          >
            Xem bảng giá
          </Link>
          <Link
            href="/lien-he"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-brand-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
          >
            Nhận tư vấn
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
          >
            <div className="text-base font-semibold text-slate-900 group-hover:text-brand-700">
              {s.title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              {s.desc}
            </div>
            <div className="mt-4 text-sm font-semibold text-accent-700">
              Mở chi tiết →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
