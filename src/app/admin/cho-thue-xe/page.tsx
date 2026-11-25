import type { Metadata } from "next"
import { RentalAdminPanel } from "@/components/RentalAdminPanel"
import { absUrl } from "@/lib/urls"

export const metadata: Metadata = {
  title: "Admin Quản Lý Cho Thuê Xe",
  description: "Trang quản lý trạng thái xe, thông tin người thuê và số km chuyến thuê.",
  alternates: { canonical: absUrl("/admin/cho-thue-xe") },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RentalAdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <RentalAdminPanel />
    </div>
  )
}
