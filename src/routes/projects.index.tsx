import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, propertyTypes, statuses } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

const title = "Projects | Naverah Assets Bengaluru";
const description =
  "Every Naverah Assets project in Bengaluru — apartments, villas and row houses with configurations, sizes, price from, possession dates and RERA numbers.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [type, setType] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);

  const visible = useMemo(
    () =>
      projects.filter(
        (p) => (!type || p.propertyType === type) && (!status || p.status === status),
      ),
    [type, status],
  );

  const chip = (active: boolean) =>
    `rounded-md border px-5 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
      active
        ? "border-brand bg-brand text-brand-foreground"
        : "border-border text-muted-foreground hover:border-brand hover:text-brand"
    }`;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-36 lg:px-10 lg:pt-44">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
        Projects we would buy ourselves
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Filter by property type and construction stage, then open any project for unit sizes,
        payment structure, amenities and connectivity.
      </p>

      <div className="mt-12 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="w-24 text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground">
            Type
          </span>
          <button className={chip(!type)} onClick={() => setType(undefined)}>
            All
          </button>
          {propertyTypes.map((t) => (
            <button key={t} className={chip(type === t)} onClick={() => setType(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="w-24 text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground">
            Status
          </span>
          <button className={chip(!status)} onClick={() => setStatus(undefined)}>
            All
          </button>
          {statuses.map((s) => (
            <button key={s} className={chip(status === s)} onClick={() => setStatus(s)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {visible.length} project{visible.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {visible.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-16 text-sm text-muted-foreground">
          Nothing matches that combination right now — clear a filter or talk to us and we'll source
          it.
        </p>
      )}
    </div>
  );
}
