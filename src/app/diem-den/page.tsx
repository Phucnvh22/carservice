import type { Metadata } from "next"
import Link from "next/link"
import { destinations } from "@/lib/content"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Điểm đến & gợi ý lịch trình",
  description:
    "Gợi ý điểm đến phổ biến tại Huế và lân cận, trình bày dạng nội dung chữ để tối ưu tốc độ tải và đơn giản giao diện.",
  alternates: { canonical: absUrl("/diem-den") },
}

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Điểm đến
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Trang này không dùng hình ảnh. Nội dung tập trung vào gợi ý lịch trình và
            tuyến xe phù hợp để bạn quyết định nhanh.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/dich-vu"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px"
          >
            Xem dịch vụ
          </Link>
          <Link
            href="/lien-he"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-brand-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
          >
            Nhận tư vấn
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {destinations.map((d) => (
          <Link
            key={d.title}
            href={d.href}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-base font-semibold text-slate-900 group-hover:text-brand-700">
                {d.title}
              </div>
              <div className="rounded-full border border-accent-200 bg-accent-50 px-2 py-0.5 text-xs font-semibold text-accent-700">
                Gợi ý
              </div>
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              {d.desc}
            </div>
            <div className="mt-4 text-sm font-semibold text-accent-700">
              Mở tuyến liên quan →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
