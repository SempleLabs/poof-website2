interface PageHeroProps {
  title: React.ReactNode
  subtitle?: string
  children?: React.ReactNode
}

/** Page opener: type on paper. No particles, no parallax; the one animation on the site is the homepage vanish. */
export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl sm:text-6xl text-ink mb-5 leading-[1.05] tracking-[-0.035em] text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
