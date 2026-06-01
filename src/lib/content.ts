export type CardLink = {
  title: string
  desc: string
  href: string
}

export const services: CardLink[] = [
  {
    title: "Đưa đón sân bay Phú Bài",
    desc: "Đón đúng giờ, theo dõi chuyến bay, hỗ trợ hành lý.",
    href: "/san-bay-hue",
  },
  {
    title: "City tour Huế",
    desc: "Lịch trình linh hoạt: Đại Nội, chùa Thiên Mụ, lăng tẩm...",
    href: "/city-tour-hue",
  },
  {
    title: "Thuê xe tự lái",
    desc: "Nhận xe nhanh, giấy tờ đơn giản, xe sạch đẹp.",
    href: "/thue-xe-tu-lai-hue",
  },
]

export const quickNav: { label: string; href: string; desc: string }[] = [
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    desc: "Xem các dịch vụ nổi bật và chọn tuyến phù hợp.",
  },
  {
    label: "Bảng giá",
    href: "/bang-gia",
    desc: "Tham khảo mức giá phổ biến, minh bạch, dễ hiểu.",
  },
  {
    label: "Điểm đến",
    href: "/diem-den",
    desc: "Gợi ý địa điểm & lịch trình (không dùng hình ảnh).",
  },
  {
    label: "Đánh giá",
    href: "/danh-gia",
    desc: "Ý kiến khách hàng và trải nghiệm thực tế.",
  },
]

export const pricing: {
  title: string
  price: string
  meta: string
  href: string
}[] = [
  {
    title: "Sân bay Phú Bài ↔ TP Huế",
    price: "Từ 150k",
    meta: "4 chỗ / một chiều • Đón tận nơi",
    href: "/san-bay-hue",
  },
  {
    title: "City tour Huế 1 ngày",
    price: "Từ 900k",
    meta: "Lịch trình linh hoạt • Xe + tài xế",
    href: "/city-tour-hue",
  },
  {
    title: "Thuê xe tự lái theo ngày",
    price: "Từ 650k",
    meta: "Nhận xe nhanh • Xe sạch đẹp",
    href: "/thue-xe-tu-lai-hue",
  },
]

export const destinations: CardLink[] = [
  {
    title: "Sân bay Phú Bài (Huế)",
    desc: "Đón đúng giờ • Theo dõi chuyến bay • Hỗ trợ hành lý",
    href: "/san-bay-hue",
  },
  {
    title: "Đại Nội (Kinh thành Huế)",
    desc: "Di sản văn hoá • Tham quan theo khung giờ linh hoạt",
    href: "/city-tour-hue",
  },
  {
    title: "Chùa Thiên Mụ",
    desc: "Biểu tượng bên sông Hương • Phù hợp lịch trình nửa ngày",
    href: "/city-tour-hue",
  },
  {
    title: "Lăng tẩm (Khải Định / Minh Mạng / Tự Đức)",
    desc: "Không gian cổ kính • Gợi ý tuyến tối ưu di chuyển",
    href: "/city-tour-hue",
  },
  {
    title: "Lăng Cô • Bạch Mã",
    desc: "Đi biển/đồi núi trong ngày • Phù hợp nhóm gia đình",
    href: "/lien-he",
  },
]

export const testimonials: { name: string; text: string }[] = [
  {
    name: "Minh",
    text: "Đón sân bay đúng giờ, xe sạch, tài xế nhiệt tình. Giá báo trước nên yên tâm.",
  },
  {
    name: "Hà",
    text: "City tour đi Đại Nội - Thiên Mụ - lăng tẩm rất hợp lý, lịch trình linh hoạt.",
  },
  {
    name: "Tuấn",
    text: "Thuê xe tự lái thủ tục nhanh, nhận xe gọn. Xe chạy êm, tiết kiệm nhiên liệu.",
  },
]

export const faqs: { q: string; a: string }[] = [
  {
    q: "Có đón muộn do delay chuyến bay không?",
    a: "Có. Bên mình theo dõi giờ hạ cánh thực tế và hỗ trợ đón muộn theo thoả thuận (không để bạn chờ lâu).",
  },
  {
    q: "Giá đã bao gồm phí cầu đường/bãi đỗ chưa?",
    a: "Tuỳ tuyến. Khi bạn gửi điểm đón/đến và thời gian, bên mình báo giá rõ ràng, hạn chế phát sinh.",
  },
  {
    q: "Tự lái cần giấy tờ gì?",
    a: "CCCD/Passport + bằng lái hợp lệ. Một số dòng xe có thể cần đặt cọc theo chính sách.",
  },
]
