import type { Metadata } from "next"
import Link from "next/link"
import { absUrl } from "@/lib/urls"
import { CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Bảng Giá Thuê Xe Huế - Đưa Đón Sân Bài, City Tour, Tự Lái",
  description: "Bảng giá thuê xe tại Huế cập nhật mới nhất. Cho thuê xe tự lái 4-7 chỗ, xe đưa đón sân bay Phú Bài, xe tham quan City Tour giá rẻ.",
  alternates: { canonical: absUrl("/bang-gia") },
  openGraph: {
    title: "Bảng Giá Thuê Xe Huế - Đưa Đón Sân Bài, City Tour, Tự Lái",
    description: "Bảng giá thuê xe tại Huế cập nhật mới nhất. Cho thuê xe tự lái 4-7 chỗ, xe đưa đón sân bay Phú Bài, xe tham quan City Tour giá rẻ.",
    url: absUrl("/bang-gia"),
  }
}

const pricingData = [
  {
    title: "Đưa đón sân bay Phú Bài",
    desc: "Giá trọn gói, không phát sinh chi phí",
    price: "Từ 150k",
    features: [
      "Xe 4 chỗ: 150.000đ",
      "Xe 7 chỗ: 200.000đ",
      "Đón đúng giờ, tài xế chờ sẵn",
      "Hỗ trợ mang vác hành lý",
    ],
    link: "/san-bay-hue",
  },
  {
    title: "City Tour Huế",
    desc: "Tham quan Đại Nội, Lăng tẩm, Chùa Thiên Mụ",
    price: "Từ 500k",
    features: [
      "Xe 4 chỗ: 500.000đ/nửa ngày",
      "Xe 7 chỗ: 600.000đ/nửa ngày",
      "Tài xế bản địa, am hiểu đường xá",
      "Linh hoạt thay đổi lịch trình",
    ],
    link: "/city-tour-hue",
  },
  {
    title: "Thuê xe tự lái",
    desc: "Đa dạng các dòng xe đời mới",
    price: "Từ 700k",
    features: [
      "Vinfast VF5, VF6, Elantra: 700k-900k",
      "Sorento, Carnival, VF9: 1.3tr-1.8tr",
      "Thủ tục chỉ cần CCCD",
      "Giao xe tận nơi miễn phí (nội thành)",
    ],
    link: "/thue-xe-tu-lai-hue",
  },
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-20">
      <ScrollReveal direction="up" delay={0}>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
            Bảng giá dịch vụ
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mức giá tham khảo cho các dịch vụ thuê xe tại Huế. Vui lòng liên hệ trực tiếp để có báo giá chính xác nhất theo lịch trình của bạn.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingData.map((plan, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 150}>
            <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-porsche-red group">
              {idx === 2 && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="rounded-full bg-porsche-red px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{plan.desc}</p>
              </div>
              
              <div className="mb-6 flex items-baseline text-slate-900">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm font-semibold ml-1 text-slate-500">/chuyến</span>
              </div>

              <ul className="mb-8 flex-1 space-y-4 text-sm text-slate-600">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-porsche-red shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.link}
                className={`mt-auto inline-flex h-12 w-full items-center justify-center rounded-2xl font-bold transition-all active:translate-y-px ${
                  idx === 2 
                    ? "bg-porsche-red text-white shadow-lg shadow-porsche-red/20 hover:bg-porsche-hover-red" 
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                Xem chi tiết
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="up" delay={300}>
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Bạn cần báo giá cho một lịch trình riêng (đi tỉnh, cưới hỏi, công tác dài ngày)?
          </p>
          <Link
            href="/lien-he"
            className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 text-base font-bold text-slate-900 transition-all hover:border-porsche-red hover:text-porsche-red active:translate-y-px"
          >
            Nhận báo giá riêng
          </Link>
        </div>
      </ScrollReveal>
    </div>
  )
}