"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

interface HeroProps {
  content: {
    headline: string
    subheadline: string
    cta: string
  }
}

export function Hero({ content }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/50 mb-6 sm:mb-8 transition-all duration-500 delay-100 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">AI-Powered Automation</span>
        </div>

        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {content.headline}
        </h1>
        <p
          className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {content.subheadline}
        </p>

        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-full text-base px-6 sm:px-8 h-11 sm:h-12 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {content.cta}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full border-border/50 hover:bg-secondary h-11 sm:h-12 px-6 sm:px-8 bg-transparent transition-all duration-300 hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>

        <div
          className={`mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/30 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">Trusted by innovative teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-50">
            {["Acme Corp", "Quantum", "Nova Labs", "Vertex"].map((company, index) => (
              <span
                key={company}
                className={`text-xs sm:text-sm font-medium text-muted-foreground transition-all duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${600 + index * 100}ms` : "0ms" }}
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
