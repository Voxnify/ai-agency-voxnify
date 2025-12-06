import Link from "next/link"

interface FooterProps {
  content: {
    copyright: string
    links: Array<{
      label: string
      href: string
    }>
  }
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
            <span className="text-xs font-bold text-white">F</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">{content.copyright}</p>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          {content.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
