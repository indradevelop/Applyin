import Link from "next/link"
import { FileText } from "lucide-react"

interface LogoProps {
  variant?: "default" | "white"
  size?: "sm" | "md" | "lg"
}

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-foreground"
  const iconColor = variant === "white" ? "text-white" : "text-primary"

  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-sm opacity-70"></div>
        <div className={`relative bg-background dark:bg-background p-1.5 rounded-full ${iconColor}`}>
          <FileText size={iconSizes[size]} className="stroke-primary" />
        </div>
      </div>
      <span className={`font-bold ${sizeClasses[size]} ${textColor}`}>
        Apply<span className="text-primary">in</span>
      </span>
    </Link>
  )
}
