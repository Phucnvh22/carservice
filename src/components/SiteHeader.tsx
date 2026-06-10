"use client"

import Link from "next/link"
import { site } from "@/lib/site"
import { useState, useRef, useEffect } from "react"

const serviceNav = [
  { href: "/san-bay-hue", label: "Đưa đón sân bay" },
  { href: "/city-tour-hue", label: "City tour Huế" },
  { href: "/thue-xe-tu-lai-hue", label: "Thuê xe tự lái" },
]

const nav = [
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/lien-he", label: "Liên hệ" },
]

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll)
    
    // Initial check
    handleScroll()
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "border-b border-porsche-grey-20 bg-porsche-white shadow-sm" 
          : "border-b border-porsche-grey-20/50 bg-porsche-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-3 py-4">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-porsche-focusBlue"
          >
            <span className="text-xl font-extrabold uppercase tracking-widest text-porsche-black transition-transform duration-300 group-hover:scale-105">
              {site.brandName}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 mr-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-porsche-grey-80 transition-colors hover:text-porsche-red relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-porsche-red after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="relative md:hidden" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-porsche-grey-20 bg-porsche-white text-porsche-black transition-all duration-200 hover:bg-porsche-grey-5 hover:border-porsche-grey-40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-porsche-grey-20 focus:ring-offset-2"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 top-14 w-[min(92vw,360px)] origin-top-right rounded-2xl border border-porsche-grey-20 bg-porsche-white p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-porsche-grey-80 transition-colors hover:bg-porsche-grey-5 hover:text-porsche-red"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-porsche-grey-20/50">
          <nav className="-mx-4 flex items-center justify-center gap-6 overflow-x-auto px-4 py-3 scrollbar-hide">
            {serviceNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 text-xs font-bold uppercase tracking-wider text-porsche-grey-40 transition-colors hover:text-porsche-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-porsche-focusBlue"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
