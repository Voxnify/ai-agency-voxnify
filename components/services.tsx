"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, Sparkles, Bot, BarChart3, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ServicesProps {
  content: {
    headline: string
    subheadline: string
    cards: Array<{
      title: string
      description: string
      icon: string
    }>
  }
}

const iconMap: Record<string, React.ReactNode> = {
  clone: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
  operations: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
  concierge: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />,
  bot: <Bot className="h-5 w-5 sm:h-6 sm:w-6" />,
  analytics: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />,
  security: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
}

export function Services({ content }: ServicesProps) {
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
    <section id="services" ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {content.headline}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.subheadline}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {content.cards.map((card, index) => (
            <Card
              key={index}
              className={`bg-card border-border/50 hover:border-accent-blue/50 transition-all duration-500 group hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
            >
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-accent-blue/20 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform duration-300">
                  {iconMap[card.icon]}
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
