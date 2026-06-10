import type { Metadata } from "next"
import Link from "next/link"
import { BookingForm } from "@/components/BookingForm"
import { site } from "@/lib/site"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Đưa Đón Sân Bay Phú Bài (Huế) Giá Rẻ - Gọi Có Xe Ngay",
  description:
    "Dịch vụ xe đưa đón sân bay Phú Bài (Huế) 4-7-16 chỗ. Cam kết giá rẻ, xe đời mới, tài xế chuyên nghiệp, đón đúng giờ. Đặt xe ngay!",
  alternates: { canonical: absUrl("/san-bay-hue") },
  openGraph: {
    title: "Đưa Đón Sân Bay Phú Bài (Huế) Giá Rẻ - Gọi Có Xe Ngay",
    description: "Dịch vụ xe đưa đón sân bay Phú Bài (Huế) 4-7-16 chỗ. Cam kết giá rẻ, xe đời mới, tài xế chuyên nghiệp, đón đúng giờ.",
    url: absUrl("/san-bay-hue"),
    images: [
      {
        url: absUrl("/images/sanbay.jpg"),
        width: 1200,
        height: 630,
        alt: "Xe đưa đón sân bay Phú Bài",
      },
    ],
  }
}

export default function AirportHuePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Airport transfer • Phú Bài (HUI)
          </div>
          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50 to-accent-50 p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Ưu điểm tuyến sân bay
            </div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <div>• Theo dõi chuyến bay, hạn chế chờ đợi.</div>
              <div>• Đón/trả đúng điểm, rõ ràng trước khi đi.</div>
              <div>• Xe sạch, an toàn, phù hợp nhóm 1–7+ khách.</div>
            </div>
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Đưa đón sân bay Phú Bài 
          </h1>
          
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/sanbay.jpg" 
              alt="Xe đưa đón sân bay Phú Bài" 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <p className="max-w-prose text-slate-600">
            Đặt xe 1 chiều/2 chiều từ sân bay Phú Bài về TP Huế, Lăng Cô, Bạch Mã,
            Đà Nẵng, Hội An. Bên mình hỗ trợ theo dõi chuyến bay và đón đúng giờ.
          </p>

          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Bảng giá tham khảo (4 chỗ / 1 chiều)
            </div>
            <div className="grid gap-2 text-sm text-slate-700">
              <div className="flex items-center justify-between gap-3">
                <span>Phú Bài ↔ TP Huế</span>
                <span className="font-semibold tabular-nums text-slate-900">Từ 160k</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Phú Bài ↔ Lăng Cô</span>
                <span className="font-semibold tabular-nums text-slate-900">Từ 600k</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Phú Bài ↔ Đà Nẵng</span>
                <span className="font-semibold tabular-nums text-slate-900">Từ 900k</span>
              </div>
            </div>
            <div className="text-xs text-slate-500">
              Giá chỉ mang tính tham khảo, tuỳ điểm đón/đến và thời gian.
            </div>
          </div>

          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">Lưu ý khi đón sân bay</div>
            <ul className="list-disc space-y-2 pl-5">
              <li>Gửi giờ bay và mã chuyến bay để bên mình theo dõi.</li>
              <li>Đón tại cổng ra (ga đến) theo hướng dẫn khi xác nhận.</li>
              <li>
                Bạn có thể gọi{" "}
                <a className="font-semibold text-slate-900 hover:underline" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>{" "}
                để chốt xe nhanh.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/lien-he"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px sm:w-auto"
            >
              Nhận báo giá chính xác
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
          <BookingForm defaultService="Đưa đón sân bay Phú Bài" />
        </div>
      </div>
    </div>
  )
}
