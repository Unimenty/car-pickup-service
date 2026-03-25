"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ShineBorderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  borderWidth?: number
  duration?: number
  color?: string | string[]
  children?: React.ReactNode
}

export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
  style,
  ...props
}: ShineBorderProps) {
  return (
    <div
      className={cn(
        "relative min-h-[50px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background text-foreground md:shadow-xl",
        className
      )}
      {...props}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
              Array.isArray(color) ? color.join(",") : color
            },transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[inherit] before:p-[var(--border-width)] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)] before:[WebkitMask:var(--mask-linear-gradient)] motion-safe:before:animate-shine pointer-events-none absolute inset-0 z-0`}
      ></div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  )
}
