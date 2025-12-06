"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Clock, TrendingDown, Users, AlertTriangle } from "lucide-react"

interface AgitationProps {
  content: {
    headline: string
    subheadline: string
    problems: Array<{
      icon: string
      title: string
      description: string
    }>
  }
}

const iconMap: Record<string, React.ReactNode> = {
  clock: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
  trending: <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6" />,
  users: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
  alert: <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6" />,
}

export function Agitation({ content }: AgitationProps) {
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
    <section
      id="agitation"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border/30"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            {content.headline}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.subheadline}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {content.problems.map((problem, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 rounded-2xl bg-background border border-border/50 hover:border-red-500/30 transition-all duration-500 group hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {iconMap[problem.icon]}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{problem.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
