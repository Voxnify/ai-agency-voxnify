"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, Award } from "lucide-react"

interface AboutProps {
  content: {
    headline: string
    description: string
    stats: Array<{ value: string; label: string }>
    values: Array<{ icon: string; title: string; description: string }>
  }
}

const iconMap: Record<string, React.ReactNode> = {
  target: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
  eye: <Eye className="h-5 w-5 sm:h-6 sm:w-6" />,
  award: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
}

export function About({ content }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              {content.headline}
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              {content.description}
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {content.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms" }}
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {content.values.map((value, index) => (
              <div
                key={index}
                className={`p-4 sm:p-6 rounded-2xl bg-secondary/50 border border-border/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100 + 300}ms` : "0ms" }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0">
                    {iconMap[value.icon]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{value.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
