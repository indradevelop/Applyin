"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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
  const [randomValue, setRandomValue] = useState<number>(1)

  useEffect(() => {
    setRandomValue(Math.random())
  }, [])
  

  const elements = Array.from({ length: count }).map((_, i) => {
    const randomX = randomValue * 100
    const randomY = randomValue * 100
    const randomSize = randomValue * size + size / 2
    const randomDuration = (randomValue * 10 + 10) / speed
    const randomDelay = randomValue * 5
    const randomOpacity = randomValue * 0.3 + 0.1

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
          x: [0, randomValue > 0.5 ? 15 : -15, 0],
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
