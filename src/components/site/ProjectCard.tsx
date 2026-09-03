import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Ruler, Building2 } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block rise"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <article className="overflow-hidden rounded-lg border border-border/60 bg-surface shadow-lift transition-colors hover:border-brand/50">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} — ${project.configuration} in ${project.location}`}
            width={1400}
            height={1000}
            loading="lazy"
            className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute veil opacity-70" />
          <span className="absolute left-5 top-5 rounded-sm border border-brand/50 bg-background/70 px-3 py-1 text-[0.625rem] uppercase tracking-[0.22em] text-brand backdrop-blur">
            {project.status}
          </span>
          <span className="absolute bottom-5 left-5 text-sm tracking-wide text-brand">
            Price starts from {project.priceFrom}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl leading-tight">{project.name}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-3.5 text-brand" />
                {project.location}, {project.city}
              </p>
            </div>
            <ArrowUpRight className="mt-1 size-5 shrink-0 text-brand transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border/60 pt-5 text-xs">
            <div>
              <dt className="flex items-center gap-1.5 text-muted-foreground">
                <Ruler className="size-3.5 text-brand" /> Sizes
              </dt>
              <dd className="mt-1.5">{project.sizeRange}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-muted-foreground">
                <Building2 className="size-3.5 text-brand" /> Config
              </dt>
              <dd className="mt-1.5">{project.configuration}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Possession</dt>
              <dd className="mt-1.5">{project.possession}</dd>
            </div>
          </dl>
        </div>
      </article>
    </Link>
  );
}
