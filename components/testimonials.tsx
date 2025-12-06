"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

interface TestimonialsProps {
  content: {
    headline: string
    subheadline: string
    testimonials: Array<{
      quote: string
      author: string
      role: string
      company: string
    }>
  }
}

export function Testimonials({ content }: TestimonialsProps) {
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
      id="testimonials"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border/30"
    >
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
          {content.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 rounded-2xl bg-background border border-border/50 hover:border-accent-blue/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-accent-blue/40 mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base text-foreground leading-relaxed text-pretty">{testimonial.quote}</p>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/30">
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
