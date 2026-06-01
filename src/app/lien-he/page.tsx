import type { Metadata } from "next"
import Link from "next/link"
import { BookingForm } from "@/components/BookingForm"
import { site } from "@/lib/site"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Liên hệ đặt xe Huế - Hotline & Zalo",
  description:
    "Liên hệ đặt xe tại Huế: đưa đón sân bay Phú Bài, city tour, thuê xe tự lái. Gọi hotline hoặc nhắn Zalo để nhận báo giá nhanh.",
  alternates: { canonical: absUrl("/lien-he") },
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Liên hệ đặt xe Huế
          </h1>
          <p className="max-w-prose text-slate-600">
            Bạn gửi thông tin (dịch vụ, điểm đón/đến, thời gian) để bên mình báo
            giá chính xác và gọi xác nhận.
          </p>

          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <a
              className="rounded-2xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px"
              href={`tel:${site.phone}`}
            >
              Gọi hotline: {site.phone}
            </a>
            <a
              className="rounded-2xl border border-brand-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px"
              href={site.zaloUrl}
              target="_blank"
              rel="noreferrer"
            >
              Nhắn Zalo để chốt giá
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">Gợi ý nội dung cần gửi</div>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Dịch vụ: sân bay / tour / tự lái</li>
              <li>Điểm đón + điểm đến</li>
              <li>Thời gian đi</li>
              <li>Số khách + hành lý</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px sm:w-auto"
            >
              Về trang chủ
            </Link>
            <Link
              href="/san-bay-hue"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px sm:w-auto"
            >
              Dịch vụ sân bay
            </Link>
          </div>
        </div>

        <div className="md:sticky md:top-24">
          <BookingForm />
        </div>
      </div>
    </div>
  )
}
