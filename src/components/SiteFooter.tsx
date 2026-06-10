import Link from "next/link"
import { site } from "@/lib/site"

const links = [
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/san-bay-hue", label: "Đưa đón sân bay" },
  { href: "/city-tour-hue", label: "City tour Huế" },
  { href: "/thue-xe-tu-lai-hue", label: "Thuê xe tự lái" },
  { href: "/lien-he", label: "Liên hệ" },
]

export const SiteFooter = () => {
  return (
    <footer className="border-t border-porsche-black bg-porsche-black text-porsche-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-12">
        <div className="space-y-4 md:col-span-5 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center bg-porsche-white text-lg font-bold text-porsche-black">
              H
            </span>
            <span className="text-xl font-extrabold uppercase tracking-widest text-porsche-white">
              {site.brandName}
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-porsche-grey-40">
            Đặt xe Huế nhanh chóng: đưa đón sân bay Phú Bài, city tour, thuê xe tự
            lái. Hỗ trợ 24/7.
          </p>
          <div className="space-y-2 pt-2">
            <a
              href={`tel:${site.phone}`}
              className="group flex w-fit items-center gap-2 text-lg font-bold transition-colors hover:text-porsche-red"
            >
              <span className="text-porsche-grey-40 group-hover:text-porsche-red transition-colors">Hotline:</span> {site.phone}
            </a>
            <a
              href={site.zaloUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-2 text-base font-medium text-porsche-grey-20 transition-colors hover:text-porsche-red"
            >
              <span className="text-porsche-grey-40 group-hover:text-porsche-red transition-colors">Zalo:</span> Chat ngay
            </a>
          </div>
        </div>

        <div className="space-y-4 md:col-span-3 lg:col-span-4 lg:justify-self-center">
          <h3 className="text-xs font-bold uppercase tracking-widest text-porsche-grey-40">Dịch vụ</h3>
          <ul className="space-y-3 text-sm font-medium text-porsche-grey-20">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-porsche-white relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-porsche-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 md:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-porsche-grey-40">Khu vực</h3>
          <ul className="space-y-3 text-sm font-medium text-porsche-grey-20">
            <li>TP Huế • Sân bay Phú Bài • Lăng Cô • Bạch Mã</li>
            <li>Huế ↔ Đà Nẵng • Hội An • Quảng Trị</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-porsche-grey-90 bg-porsche-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-xs text-porsche-grey-40">
            © {new Date().getFullYear()} {site.brandName}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs font-medium text-porsche-grey-40">
            <Link href="/dieu-khoan" className="hover:text-porsche-white transition-colors">Điều khoản</Link>
            <Link href="/bao-mat" className="hover:text-porsche-white transition-colors">Bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
