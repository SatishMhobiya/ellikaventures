import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Ruler, Building2, ShieldCheck } from "lucide-react";
export function ProjectCard({ project, index = 0 }) {
    return (<article className="group flex flex-col overflow-hidden rounded-xl border border-border/70 bg-surface shadow-lift transition-all duration-500 hover:border-brand/70 hover:shadow-2xl" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="relative overflow-hidden">
        <Link to="/projects/$slug" params={{ slug: project.slug }} className="block">
          <img src={project.image} alt={`${project.name} — ${project.configuration} in ${project.location}`} width={1200} height={800} loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-80"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"/>
        </Link>

        {/* Top Badges */}
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded bg-background/90 px-3 py-1 text-[0.625rem] uppercase tracking-[0.2em] text-brand backdrop-blur-md">
            {project.status}
          </span>
          <span className="rounded bg-black/60 px-2.5 py-1 text-[0.625rem] uppercase tracking-wider text-white backdrop-blur-md">
            {project.propertyType}
          </span>
        </div>

        {/* Bottom Image Overlay Strip */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-brand">
              Starting Price
            </span>
            <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {project.priceFrom}
            </p>
          </div>
          <span className="rounded border border-brand/40 bg-surface/90 px-2.5 py-1 text-[0.6875rem] text-foreground backdrop-blur-sm">
            {project.units}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">{project.developer}</p>
              <Link to="/projects/$slug" params={{ slug: project.slug }}>
                <h3 className="mt-1 font-display text-3xl leading-tight text-foreground transition-colors group-hover:text-brand">
                  {project.name}
                </h3>
              </Link>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-brand"/>
                <span>
                  {project.location}, {project.city}
                </span>
              </p>
            </div>

            <Link to="/projects/$slug" params={{ slug: project.slug }} className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-brand transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground" aria-label={`View ${project.name}`}>
              <ArrowUpRight className="size-4"/>
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {project.summary}
          </p>

          {/* Quick Specifications Grid */}
          <dl className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 rounded-lg border border-border/60 bg-background/60 p-3 sm:p-3.5 text-[0.6875rem] sm:text-xs">
            <div>
              <dt className="flex items-center gap-1 text-[0.5625rem] sm:text-[0.625rem] uppercase tracking-wider text-muted-foreground">
                <Ruler className="size-3 text-brand shrink-0"/> Sizes
              </dt>
              <dd className="mt-1 font-medium text-foreground truncate">{project.sizeRange}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1 text-[0.5625rem] sm:text-[0.625rem] uppercase tracking-wider text-muted-foreground">
                <Building2 className="size-3 text-brand shrink-0"/> Layout
              </dt>
              <dd className="mt-1 font-medium text-foreground truncate">{project.configuration}</dd>
            </div>
            <div>
              <dt className="text-[0.5625rem] sm:text-[0.625rem] uppercase tracking-wider text-muted-foreground truncate">
                Possession
              </dt>
              <dd className="mt-1 font-medium text-foreground truncate">{project.possession}</dd>
            </div>
          </dl>
        </div>

        {/* Footer CTAs */}
        <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
          <div className="flex items-center gap-1.5 text-[0.6875rem] text-muted-foreground">
            <ShieldCheck className="size-3.5 text-brand"/>
            <span className="truncate max-w-[170px] sm:max-w-none">
              RERA: {project.rera.slice(0, 18)}...
            </span>
          </div>
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand hover:underline">
            <span>Explore Plans</span>
            <ArrowUpRight className="size-3.5"/>
          </Link>
        </div>
      </div>
    </article>);
}
