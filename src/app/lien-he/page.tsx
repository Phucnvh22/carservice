import type { Metadata } from "next"
import { absUrl } from "@/lib/urls"
import { BookingForm } from "@/components/BookingForm"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Liên Hệ Thuê Xe Huế - Đặt Xe Nhanh Chóng 24/7",
  description: "Liên hệ Hue Car Service để đặt xe đưa đón sân bay, thuê xe tự lái, city tour tại Huế. Hỗ trợ 24/7, xe đời mới, giá tốt nhất.",
  alternates: { canonical: absUrl("/lien-he") },
  openGraph: {
    title: "Liên Hệ Thuê Xe Huế - Đặt Xe Nhanh Chóng 24/7",
    description: "Liên hệ Hue Car Service để đặt xe đưa đón sân bay, thuê xe tự lái, city tour tại Huế. Hỗ trợ 24/7, xe đời mới, giá tốt nhất.",
    url: absUrl("/lien-he"),
  }
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        
        {/* Cột trái: Thông tin liên hệ */}
        <div className="space-y-10">
          <ScrollReveal direction="up" delay={0}>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                Liên hệ với chúng tôi
              </h1>
              <p className="text-lg text-slate-600">
                Hãy để lại thông tin hoặc liên hệ trực tiếp, chúng tôi sẽ tư vấn cho bạn dòng xe và lịch trình phù hợp nhất tại Huế.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal direction="up" delay={150}>
              <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 text-porsche-red">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Điện thoại / Zalo</h3>
                  <p className="mt-1 text-lg font-semibold text-slate-700">0788 661 197</p>
                  <p className="text-sm text-slate-500">Hỗ trợ 24/7</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 text-porsche-red">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Địa chỉ giao nhận xe</h3>
                  <p className="mt-1 font-medium text-slate-700">Thành phố Huế</p>
                  <p className="text-sm text-slate-500">Hỗ trợ giao xe tận nơi nội thành, sân bay Phú Bài</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 text-porsche-red">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Giờ làm việc</h3>
                  <p className="mt-1 font-medium text-slate-700">Tất cả các ngày trong tuần</p>
                  <p className="text-sm text-slate-500">Kể cả Lễ, Tết</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Cột phải: Form đặt xe */}
        <ScrollReveal direction="left" delay={200}>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl md:sticky md:top-24">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Gửi yêu cầu trực tuyến</h2>
              <p className="text-sm text-slate-500 mt-1">Chúng tôi sẽ gọi lại cho bạn trong vòng 5 phút</p>
            </div>
            <BookingForm defaultService="Tư vấn chung" />
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}