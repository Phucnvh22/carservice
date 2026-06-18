import type { Metadata } from "next"
import Link from "next/link"
import { BookingForm } from "@/components/BookingForm"
import { ScrollReveal } from "@/components/ScrollReveal"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Thuê Xe City Tour Huế Trọn Gói Giá Rẻ - Khám Phá Cố Đô",
  description: "Dịch vụ thuê xe City Tour Huế nửa ngày & 1 ngày. Tham quan Đại Nội, Lăng Tẩm, Chùa Thiên Mụ. Tài xế bản địa thân thiện, xe 4-16 chỗ đời mới.",
  alternates: { canonical: absUrl("/city-tour-hue") },
  openGraph: {
    title: "Thuê Xe City Tour Huế Trọn Gói Giá Rẻ - Khám Phá Cố Đô",
    description: "Dịch vụ thuê xe City Tour Huế nửa ngày & 1 ngày. Tham quan Đại Nội, Lăng Tẩm, Chùa Thiên Mụ. Tài xế bản địa thân thiện, xe 4-16 chỗ đời mới.",
    url: absUrl("/city-tour-hue"),
    images: [
      {
        url: "https://queenbus.com.vn/wp-content/uploads/2025/07/Dai-Noi-Hue-khi-hoang-hon-buong-xuong-1.jpg",
        width: 1200,
        height: 630,
        alt: "City tour Huế",
      },
    ],
  }
}

export default function CityTourHuePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-5">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              City tour • Huế
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
              City tour Huế
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://queenbus.com.vn/wp-content/uploads/2025/07/Dai-Noi-Hue-khi-hoang-hon-buong-xuong-1.jpg" 
                alt="City tour Huế" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p className="max-w-prose text-slate-600">
              Lịch trình linh hoạt theo sở thích: di sản, check-in, ẩm thực. Bên
              mình tư vấn tuyến hợp lý theo thời gian của bạn.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Gợi ý lịch trình 1 ngày
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-700">
                <div>• Đại Nội (Kinh thành Huế)</div>
                <div>• Chùa Thiên Mụ</div>
                <div>• Lăng Khải Định hoặc Lăng Minh Mạng</div>
                <div>• Làng hương Thuỷ Xuân / đồi Vọng Cảnh</div>
                <div>• Ăn trưa & đặc sản Huế (theo gợi ý)</div>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Vé tham quan theo quy định từng điểm (nếu có).
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350}>
            <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Phù hợp cho</div>
              <ul className="list-disc space-y-2 pl-5">
                <li>Nhóm gia đình, bạn bè muốn đi gọn trong ngày.</li>
                <li>Khách công tác có thời gian rảnh buổi chiều.</li>
                <li>Khách muốn tối ưu lộ trình thay vì tự di chuyển nhiều chặng.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lien-he"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:translate-y-px sm:w-auto"
              >
                Nhận lịch trình & báo giá
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50 active:translate-y-px sm:w-auto"
              >
                Về trang chủ
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="left" delay={200}>
          <div className="md:sticky md:top-24">
            <BookingForm defaultService="City tour Huế" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
