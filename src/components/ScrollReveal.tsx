"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right" | "scale"
  delay?: number
  threshold?: number
  duration?: number
  once?: boolean
}

export const ScrollReveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
  duration = 700,
  once = true,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const dirClass = {
    up: "translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    scale: "scale-90",
  }[direction]

  return (
    <div
      ref={ref}
      className={`${className} transition-all ${isVisible ? "opacity-100 transform translate-y-0 translate-x-0 scale-100" : `opacity-0 ${dirClass}`}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}
