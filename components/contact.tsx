"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, ArrowRight } from "lucide-react";

interface ContactProps {
  content: {
    headline: string;
    subheadline: string;
    email: string;
    phone1: string;
    phone2: string;
    cta: string;
  };
}

export function Contact({ content }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              {content.headline}
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              {content.subheadline}
            </p>

            <div className="mt-8 sm:mt-10 space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Email us at
                  </p>
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {content.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Call us at
                  </p>
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {content.phone1}
                  </p>
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {content.phone2}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple transition-transform duration-300 group-hover:scale-110">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Or</p>
                  <button className="font-medium text-accent-blue hover:underline text-sm sm:text-base">
                    Schedule a free demo call
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`p-5 sm:p-6 md:p-8 rounded-2xl bg-background border border-border/50 transition-all duration-700 hover:shadow-lg ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-secondary/50 border-border/50 h-10 sm:h-11"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="bg-secondary/50 border-border/50 h-10 sm:h-11"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                >
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Company name"
                  className="bg-secondary/50 border-border/50 h-10 sm:h-11"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="bg-secondary/50 border-border/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full group h-11 sm:h-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
