import { NextResponse } from "next/server"

type BookingPayload = {
  service?: string
  name?: string
  phone?: string
  pickup?: string
  dropoff?: string
  datetime?: string
  passengers?: string
  note?: string
}

const isOk = (v?: string) => typeof v === "string" && v.trim().length > 0

export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as BookingPayload | null
  if (!data) return NextResponse.json({ ok: false }, { status: 400 })

  if (!isOk(data.name) || !isOk(data.phone) || !isOk(data.pickup) || !isOk(data.datetime)) {
    return NextResponse.json(
      { ok: false, error: "missing_required" },
      { status: 400 },
    )
  }

  // Cấu hình Telegram
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const message = `
🚕 <b>CÓ YÊU CẦU ĐẶT XE MỚI</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Khách hàng:</b> ${data.name}
📞 <b>Số điện thoại:</b> ${data.phone}
🏷 <b>Dịch vụ:</b> ${data.service || "Không chọn"}
📍 <b>Điểm đón:</b> ${data.pickup}
🏁 <b>Điểm đến:</b> ${data.dropoff || "Không có"}
⏰ <b>Thời gian:</b> ${data.datetime}
👥 <b>Số khách:</b> ${data.passengers || "Không có"}
📝 <b>Ghi chú:</b> ${data.note || "Không có"}
`

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      })

      if (!response.ok) {
        console.error("Lỗi khi gửi tin nhắn Telegram:", await response.text())
      }
    } catch (error) {
      console.error("Lỗi kết nối Telegram API:", error)
    }
  } else {
    console.warn("Chưa cấu hình TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID trong file .env")
  }

  return NextResponse.json({ ok: true })
}

