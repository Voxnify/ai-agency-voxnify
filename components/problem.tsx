"use client"

import { useEffect, useRef, useState } from "react"

interface ProblemProps {
  content: {
    headline: string
    description: string
    solution: string
  }
}

export function Problem({ content }: ProblemProps) {
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
    <section ref={ref} className="py-24 md:py-32 px-6 border-t border-border/30">
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight text-balance">
          {content.headline}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">{content.description}</p>
        <p className="mt-8 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          {content.solution}
        </p>
      </div>
    </section>
  )
}
