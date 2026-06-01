import Link from "next/link"
import { BookingForm } from "@/components/BookingForm"
import { site } from "@/lib/site"
import { faqs, quickNav } from "@/lib/content"

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-porsche-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--porsche-grey-5),transparent_50%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-32 relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-none border border-porsche-grey-20 bg-porsche-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-porsche-grey-80 shadow-sm">
              Đặt xe nhanh • Hỗ trợ 24/7 • Giá minh bạch
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tighter text-porsche-black text-balance md:text-6xl lg:text-[4rem]">
              Đặt xe từ sân bay Huế, <span className="text-porsche-red">City tour</span> & thuê xe tự lái
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-porsche-grey-80 md:text-xl">
              Dịch vụ xe Huế cho khách du lịch và công tác: đưa đón sân bay Phú
              Bài, tour trong ngày, thuê xe tự lái/xe có tài xế. Nhắn Zalo hoặc gọi{" "}
              <a
                className="font-bold text-porsche-black transition-colors hover:text-porsche-red relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-porsche-red"
                href={`tel:${site.phone}`}
              >
                {site.phone}
              </a>{" "}
              để chốt xe nhanh.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#dat-xe"
                className="group inline-flex h-14 w-full items-center justify-center rounded-none bg-porsche-red px-8 text-sm font-bold uppercase tracking-widest text-porsche-white transition-all hover:bg-porsche-hoverRed active:scale-[0.98] sm:w-auto shadow-lg shadow-porsche-red/20"
              >
                Đặt xe ngay
              </a>
              <Link
                href="/san-bay-hue"
                className="inline-flex h-14 w-full items-center justify-center rounded-none border-2 border-porsche-black bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-porsche-black transition-all hover:bg-porsche-black hover:text-porsche-white active:scale-[0.98] sm:w-auto"
              >
                Xem dịch vụ sân bay
              </Link>
            </div>

            <div className="grid gap-6 rounded-none border border-porsche-grey-20 bg-porsche-white p-6 shadow-xl shadow-porsche-black/5 md:grid-cols-3">
              <div>
                <div className="font-bold uppercase tracking-wider text-xs text-porsche-black mb-1">Đón đúng giờ</div>
                <div className="text-sm leading-snug text-porsche-grey-40">
                  Nhắc lịch, theo dõi chuyến bay
                </div>
              </div>
              <div className="relative md:before:absolute md:before:left-0 md:before:top-1 md:before:bottom-1 md:before:w-px md:before:bg-porsche-grey-20 md:pl-6">
                <div className="font-bold uppercase tracking-wider text-xs text-porsche-black mb-1">
                  Xe sạch, an toàn
                </div>
                <div className="text-sm leading-snug text-porsche-grey-40">
                  Kiểm tra xe trước chuyến
                </div>
              </div>
              <div className="relative md:before:absolute md:before:left-0 md:before:top-1 md:before:bottom-1 md:before:w-px md:before:bg-porsche-grey-20 md:pl-6">
                <div className="font-bold uppercase tracking-wider text-xs text-porsche-black mb-1">Báo giá rõ</div>
                <div className="text-sm leading-snug text-porsche-grey-40">
                  Chốt giá trước khi đi
                </div>
              </div>
            </div>
          </div>

          <div id="dat-xe" className="scroll-mt-32 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-porsche-grey-5 to-porsche-white opacity-50 blur-2xl" />
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="border-t border-porsche-grey-20 bg-porsche-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tighter text-porsche-black md:text-5xl text-balance">
                Khám phá nhanh
              </h2>
              <p className="mt-4 text-lg text-porsche-grey-80">
                Mỗi mục điều hướng dẫn tới một màn hình riêng, nội dung rõ ràng và chi tiết.
              </p>
            </div>
            <Link
              href="/lien-he"
              className="hidden rounded-none border-2 border-porsche-black bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-porsche-black transition-all hover:bg-porsche-black hover:text-porsche-white active:scale-95 md:inline-flex"
            >
              Nhận tư vấn
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {quickNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-none border border-porsche-grey-20 bg-porsche-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-porsche-black hover:shadow-2xl hover:shadow-porsche-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-porsche-focusBlue"
              >
                <div>
                  <div className="text-xl font-bold tracking-tight text-porsche-black group-hover:text-porsche-red transition-colors">
                    {item.label}
                  </div>
                  <div className="mt-3 text-base leading-relaxed text-porsche-grey-80">
                    {item.desc}
                  </div>
                </div>
                <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-porsche-black">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-porsche-black after:transition-all after:duration-300 group-hover:after:w-full">Mở màn hình</span>
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porsche-grey-5 border-t border-porsche-grey-20">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tighter text-porsche-black md:text-5xl">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-lg text-porsche-grey-80 max-w-2xl mx-auto">
              Giải đáp nhanh những thắc mắc của bạn khi sử dụng dịch vụ.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-none border border-porsche-grey-20 bg-porsche-white p-6 transition-all duration-300 open:border-porsche-black open:shadow-lg hover:border-porsche-grey-40"
              >
                <summary className="cursor-pointer list-none text-base font-bold text-porsche-black outline-none">
                  <div className="flex items-center justify-between gap-4">
                    <span className="pr-4">{f.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border border-porsche-grey-20 bg-porsche-grey-5 text-lg font-light text-porsche-black transition-transform duration-300 group-open:rotate-45 group-open:border-porsche-black group-open:bg-porsche-black group-open:text-porsche-white">
                      +
                    </span>
                  </div>
                </summary>
                <div className="mt-4 pr-12 text-base leading-relaxed text-porsche-grey-80 animate-in fade-in slide-in-from-top-2 duration-300">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-porsche-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--porsche-grey-90),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative z-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter text-porsche-white md:text-5xl text-balance">
                Sẵn sàng đặt xe?
              </h2>
              <p className="mt-4 text-lg text-porsche-grey-40 max-w-md">
                Gửi thông tin chuyến đi hoặc gọi hotline để chốt xe nhanh. Đội ngũ chúng tôi hỗ trợ 24/7.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex h-14 w-full items-center justify-center rounded-none bg-porsche-red px-8 text-sm font-bold uppercase tracking-widest text-porsche-white transition-all hover:bg-porsche-hoverRed active:scale-[0.98] sm:w-auto shadow-lg shadow-porsche-red/20"
              >
                Gọi {site.phone}
              </a>
              <Link
                href="/lien-he"
                className="inline-flex h-14 w-full items-center justify-center rounded-none border-2 border-porsche-white bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-porsche-white transition-all hover:bg-porsche-white hover:text-porsche-black active:scale-[0.98] sm:w-auto"
              >
                Liên hệ / Báo giá
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
