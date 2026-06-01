import { site } from "@/lib/site"

export const MobileCtaBar = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 transition-all">
      <a
        href={site.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg shadow-[#0068FF]/30 transition-transform hover:scale-110 active:scale-95"
        aria-label="Nhắn Zalo"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 11.5c0-4.694-4.253-8.5-9.5-8.5S2.5 6.806 2.5 11.5c0 4.694 4.253 8.5 9.5 8.5 1.134 0 2.223-.166 3.238-.472.935.534 2.213 1.258 3.518 1.636.326.095.666-.237.525-.563-.356-.82-.871-1.99-1.285-3.033C20.082 16.035 21.5 13.914 21.5 11.5z"
            fill="currentColor"
          />
          <text
            x="12"
            y="14.5"
            fontSize="7.5"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            fill="#0068FF"
            textAnchor="middle"
          >
            Zalo
          </text>
        </svg>
      </a>
      
      <a
        href={`tel:${site.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-porsche-red text-white shadow-lg shadow-porsche-red/30 transition-transform hover:scale-110 active:scale-95"
        aria-label="Gọi đặt xe"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      </a>
    </div>
  )
}
