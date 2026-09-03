import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MapPin } from "lucide-react";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found | Naverah Assets" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name}, ${project.location} | ${project.configuration}`;
    const description = `${project.summary} ${project.configuration}, ${project.sizeRange}, from ${project.priceFrom}. Possession ${project.possession}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-44 text-center">
      <h1 className="font-display text-5xl">Project not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        This project may have sold out and been archived.
      </p>
      <Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-sm text-brand">
        <ArrowLeft className="size-4" /> Back to projects
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const quickFacts = [
    { label: "Configuration", value: project.configuration },
    { label: "Sizes", value: project.sizeRange },
    { label: "Price from", value: project.priceFrom },
    { label: "Possession", value: project.possession },
  ];

  const allFacts = [
    ...quickFacts,
    { label: "Developer", value: project.developer },
    { label: "Property type", value: project.propertyType },
    { label: "Total units", value: project.units },
    { label: "Land area", value: project.landArea },
    { label: "Status", value: project.status },
  ];

  return (
    <article>
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} in ${project.location}`}
          width={1400}
          height={1000}
          className="absolute size-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 veil" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" /> Projects
          </Link>
          <p className="eyebrow mt-8">{project.developer}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.04] sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-brand" />
            {project.location}, {project.city}
          </p>
          <p className="mt-2 max-w-xl text-base text-brand">{project.tagline}</p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 lg:px-10">
          {quickFacts.map((f) => (
            <div key={f.label}>
              <p className="text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground">
                {f.label}
              </p>
              <p className="mt-2 font-display text-2xl">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.4fr_1fr] lg:px-10">
        <div>
          <p className="eyebrow">Overview</p>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
            {project.description.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <h2 className="mt-14 font-display text-3xl">Why {project.name}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                {h}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-3xl">Configurations & pricing</h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-border/70">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="bg-surface text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
                <tr>
                  <th className="px-5 py-4 font-normal">Type</th>
                  <th className="px-5 py-4 font-normal">Size</th>
                  <th className="px-5 py-4 font-normal">Price</th>
                </tr>
              </thead>
              <tbody>
                {project.unitMix.map((u) => (
                  <tr key={u.type} className="border-t border-border/60">
                    <td className="px-5 py-4">{u.type}</td>
                    <td className="px-5 py-4 text-muted-foreground">{u.size}</td>
                    <td className="px-5 py-4 text-brand">{u.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-14 font-display text-3xl">Connectivity</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.connectivity.map((c) => (
              <div
                key={c.place}
                className="flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-surface px-5 py-4 text-sm"
              >
                <span className="text-muted-foreground">{c.place}</span>
                <span className="text-brand">{c.distance}</span>
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-display text-3xl">Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`${project.name} view ${i + 1}`}
                width={1400}
                height={1000}
                loading="lazy"
                className={`w-full rounded-lg object-cover shadow-lift ${
                  i === 0 ? "h-80 sm:col-span-2" : "h-56"
                }`}
              />
            ))}
          </div>

          <p className="mt-12 text-xs leading-relaxed text-muted-foreground">
            RERA: {project.rera}. Images are indicative. Prices exclude GST, registration and other
            statutory charges.
          </p>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg border border-border/70 bg-surface p-7">
            <p className="eyebrow">Project details</p>
            <dl className="mt-5 space-y-4 text-sm">
              {allFacts.map((f) => (
                <div
                  key={f.label}
                  className="flex justify-between gap-6 border-b border-border/50 pb-3 last:border-0"
                >
                  <dt className="text-muted-foreground">{f.label}</dt>
                  <dd className="text-right">{f.value}</dd>
                </div>
              ))}
            </dl>

            <p className="eyebrow mt-8">Amenities</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.amenities.map((a) => (
                <span
                  key={a}
                  className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              search={{ project: project.slug }}
              className="mt-8 flex items-center justify-center gap-3 rounded-md bg-gradient-brand px-6 py-3.5 text-xs uppercase tracking-[0.22em] text-brand-foreground shadow-brand"
            >
              Request brochure
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+919000000000"
              className="mt-3 flex items-center justify-center rounded-md border border-border px-6 py-3.5 text-xs uppercase tracking-[0.22em] transition-colors hover:border-brand hover:text-brand"
            >
              Book a site visit
            </a>
          </div>
        </aside>
      </section>

      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="font-display text-3xl">Other projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-lg border border-border/60 bg-background"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="eyebrow">{p.location}</p>
                  <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {p.configuration} · from {p.priceFrom}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
