"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface FloatingElementsProps {
  count?: number
  color?: string
  size?: number
  speed?: number
  className?: string
}

export function FloatingElements({
  count = 10,
  color = "primary",
  size = 10,
  speed = 1,
  className = "",
}: FloatingElementsProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const elements = Array.from({ length: count }).map((_, i) => {
    const randomX = Math.random() * 100
    const randomY = Math.random() * 100
    const randomSize = Math.random() * size + size / 2
    const randomDuration = (Math.random() * 10 + 10) / speed
    const randomDelay = Math.random() * 5
    const randomOpacity = Math.random() * 0.3 + 0.1

    return (
      <motion.div
        key={i}
        className={`absolute rounded-full ${className}`}
        style={{
          left: `${randomX}%`,
          top: `${randomY}%`,
          width: `${randomSize}px`,
          height: `${randomSize}px`,
          backgroundColor: `hsl(var(--${color}) / ${randomOpacity})`,
          filter: `blur(${randomSize / 3}px)`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() > 0.5 ? 15 : -15, 0],
        }}
        transition={{
          duration: randomDuration,
          repeat: Number.POSITIVE_INFINITY,
          delay: randomDelay,
          ease: "easeInOut",
        }}
      />
    )
  })

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{elements}</div>
}
