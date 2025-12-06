"use client"

import { useEffect, useRef, useState } from "react"

interface SocialProofProps {
  content: {
    headline: string
    description: string
    industries: string[]
  }
}

export function SocialProof({ content }: SocialProofProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-secondary/50 border-y border-border/30">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
          {content.headline}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">{content.description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {content.industries.map((industry, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-background border border-border/50 text-sm font-medium text-muted-foreground"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
