import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  FileText,
  Phone,
  ShieldCheck,
  Share2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectFloorPlans } from "@/components/site/ProjectFloorPlans";
import { ProjectAmenities } from "@/components/site/ProjectAmenities";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { ProjectMap } from "@/components/site/ProjectMap";
import { EnquiryModal } from "@/components/site/EnquiryModal";

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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<"brochure" | "floorplan" | "visit" | "pricing">("brochure");
  const [selectedUnitTitle, setSelectedUnitTitle] = useState<string | undefined>(undefined);

  const openModal = (action: "brochure" | "floorplan" | "visit" | "pricing", unitTitle?: string) => {
    setModalAction(action);
    setSelectedUnitTitle(unitTitle);
    setModalOpen(true);
  };

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

  const subNavLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Plans & Layouts", href: "#plans" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location & Map", href: "#location" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <article className="min-h-screen bg-background pb-20 max-w-full">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} in ${project.location}`}
          width={1920}
          height={1100}
          className="absolute size-full object-cover"
        />
        {/* Clean, uniform dark backdrop overlay matching naverahassets.com */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-95" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pb-16 lg:px-10 lg:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-brand"
            >
              <ArrowLeft className="size-4" /> All Projects
            </Link>

            <div className="flex items-center gap-2">
              <span className="rounded-full border border-brand/50 bg-black/60 px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-wider text-brand backdrop-blur-md">
                RERA Sanctioned
              </span>
              <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[0.6875rem] uppercase tracking-wider text-white backdrop-blur-md">
                {project.status}
              </span>
            </div>
          </div>

          <p className="eyebrow mt-6">{project.developer}</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl sm:text-6xl lg:text-7xl leading-[1.12] sm:leading-[1.04] text-white drop-shadow-md">
            {project.name}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-white/85 drop-shadow-sm">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-brand" />
              {project.location}, {project.city}
            </span>
            <span className="text-brand">·</span>
            <span className="font-medium text-white">{project.configuration}</span>
            <span className="text-brand">·</span>
            <span className="font-semibold text-brand">From {project.priceFrom}</span>
          </div>

          <p className="mt-3 max-w-2xl text-base text-amber-200/90">{project.tagline}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => openModal("brochure")}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-brand px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-brand-foreground shadow-brand hover:opacity-95"
            >
              <FileText className="size-4" />
              <span>Download Brochure</span>
            </button>
            <button
              onClick={() => openModal("visit")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brand/60 bg-surface/90 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-all hover:bg-brand hover:text-brand-foreground"
            >
              <Calendar className="size-4 text-brand" />
              <span>Book Site Visit</span>
            </button>
          </div>
        </div>
      </section>

      {/* STICKY SUB-NAV BAR (z-30 so mobile menu covers it) */}
      <nav className="sticky top-20 z-30 border-y border-border/80 bg-background/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 lg:px-10">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1 pr-8">
            {subNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-xs text-muted-foreground">Pricing from:</span>
            <span className="font-display text-lg font-semibold text-brand">{project.priceFrom}</span>
            <button
              onClick={() => openModal("pricing")}
              className="rounded bg-brand px-3.5 py-1.5 text-[0.6875rem] uppercase tracking-wider text-brand-foreground"
            >
              Get Cost Sheet
            </button>
          </div>
        </div>
      </nav>

      {/* QUICK STATS STRIP (min-w-0 and responsive typography to prevent overflow) */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 py-8 sm:py-10 sm:grid-cols-4 lg:px-10">
          {quickFacts.map((f) => (
            <div key={f.label} className="min-w-0">
              <p className="text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground truncate">
                {f.label}
              </p>
              <p className="mt-1.5 font-display text-base sm:text-2xl text-foreground break-words">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTENT BODY */}
      <div className="mx-auto grid max-w-7xl min-w-0 w-full gap-10 lg:gap-14 px-4 sm:px-6 py-12 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:px-10">
        {/* LEFT COLUMN: Deep Project Showcase */}
        <div className="min-w-0 max-w-full space-y-14 sm:space-y-20">
          {/* 1. OVERVIEW & HIGHLIGHTS */}
          <section id="overview" className="scroll-mt-36">
            <p className="eyebrow">Architectural Concept</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              About {project.name}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {project.description.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border/80 bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand">
                <Sparkles className="size-4" />
                <span>Why Choose {project.name}</span>
              </div>
              <h3 className="mt-2 font-display text-2xl text-foreground">Project Highlights</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. MASTER PLAN & UNIT FLOOR PLANS */}
          <section id="plans" className="scroll-mt-36">
            <ProjectFloorPlans
              masterPlan={project.masterPlan}
              unitPlans={project.unitPlans}
              projectName={project.name}
              onDownloadFloorPlan={(unitTitle) => openModal("floorplan", unitTitle)}
            />
          </section>

          {/* 3. AMENITIES WITH IMAGES */}
          <section id="amenities" className="scroll-mt-36">
            <ProjectAmenities
              visualAmenities={project.visualAmenities}
              allAmenities={project.amenities}
              projectName={project.name}
              onEnquire={() => openModal("brochure")}
            />
          </section>

          {/* 4. GALLERY WITH LIGHTBOX */}
          <section id="gallery" className="scroll-mt-36">
            <ProjectGallery
              items={project.galleryItems}
              projectName={project.name}
            />
          </section>

          {/* 5. LOCATION WITH INTERACTIVE MAP */}
          <section id="location" className="scroll-mt-36">
            <ProjectMap
              mapData={project.mapData}
              projectName={project.name}
              location={project.location}
              categories={project.categorizedConnectivity}
            />
          </section>

          {/* 6. CONFIGURATIONS & PRICING TABLE */}
          <section id="pricing" className="scroll-mt-36">
            <div className="rounded-xl border border-border/80 bg-surface p-4 sm:p-8 min-w-0 max-w-full overflow-hidden">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">Verified Inventory</p>
                  <h3 className="mt-2 font-display text-3xl text-foreground">
                    Configurations & Pricing
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Direct pricing without intermediary markups. Subject to unit floor rise & facing.
                  </p>
                </div>
                <button
                  onClick={() => openModal("pricing")}
                  className="rounded-md bg-gradient-brand px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-brand-foreground shadow-brand"
                >
                  Request Cost Sheet
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between text-[0.6875rem] text-muted-foreground sm:hidden">
                <span>← Swipe table to view details & floor plans →</span>
              </div>

              <div className="mt-2 sm:mt-6 overflow-x-auto rounded-lg border border-border/70">
                <table className="w-full min-w-[28rem] text-left text-sm">
                  <thead className="bg-background text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-normal">Typology</th>
                      <th className="px-5 py-4 font-normal">Super Area</th>
                      <th className="px-5 py-4 font-normal">Price Guide</th>
                      <th className="px-5 py-4 font-normal text-right">Floor Plan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {project.unitMix.map((u) => (
                      <tr key={u.type} className="hover:bg-background/40">
                        <td className="px-5 py-4 font-medium text-foreground">{u.type}</td>
                        <td className="px-5 py-4 text-muted-foreground">{u.size}</td>
                        <td className="px-5 py-4 font-display text-base text-brand">{u.price}</td>
                        <td className="px-5 py-4 text-right">
                          <button
                            onClick={() => openModal("floorplan", u.type)}
                            className="text-xs uppercase tracking-wider text-brand hover:underline"
                          >
                            View Layout
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <p>RERA Registration Number: {project.rera}</p>
                <div className="flex items-center gap-1.5 text-brand">
                  <ShieldCheck className="size-4" />
                  <span>100% RERA Verified Channel Partner</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: STICKY ENQUIRY & SPECIFICATIONS SIDEBAR */}
        <aside className="lg:sticky lg:top-36 lg:self-start space-y-6">
          <div className="rounded-xl border border-brand/40 bg-surface p-7 shadow-lift">
            <div className="flex items-center justify-between">
              <span className="text-[0.6875rem] uppercase tracking-[0.22em] text-brand">
                Official Channel Partner
              </span>
              <span className="rounded bg-brand/10 px-2 py-0.5 text-[0.625rem] font-semibold text-brand">
                RERA Verified
              </span>
            </div>

            <h3 className="mt-3 font-display text-2xl text-foreground">
              Interested in {project.name}?
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Get direct developer inventory, negotiated launch benefits, and floor-plate availability.
            </p>

            <dl className="mt-6 space-y-3 border-y border-border/60 py-4 text-xs">
              {allFacts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{f.label}</dt>
                  <dd className="font-medium text-right text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => openModal("brochure")}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-brand py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-brand-foreground shadow-brand hover:opacity-95"
              >
                <FileText className="size-4" />
                <span>Download Brochure</span>
              </button>

              <button
                onClick={() => openModal("visit")}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-brand/60 bg-background py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-all hover:bg-brand hover:text-brand-foreground"
              >
                <Calendar className="size-4 text-brand" />
                <span>Schedule Site Visit</span>
              </button>

              <a
                href="tel:+919876543210"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-border py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <Phone className="size-3.5" />
                <span>Call Project Desk</span>
              </a>
            </div>

            <div className="mt-6 rounded-lg bg-background p-4 text-[0.6875rem] text-muted-foreground">
              <p className="font-semibold text-foreground">Naverah Client Guarantee:</p>
              <p className="mt-1">
                Zero brokerage on new developer bookings. Complete title diligence & loan assistance.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* OTHER SIMILAR PROJECTS SECTION */}
      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Explore Alternatives</p>
              <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                Other Featured Properties
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand hover:underline"
            >
              <span>View All Properties</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-xl border border-border/60 bg-background transition-all hover:border-brand/60 hover:shadow-lift"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded bg-surface/90 px-2 py-0.5 text-[0.6875rem] uppercase tracking-wider text-brand backdrop-blur-sm">
                    {p.propertyType}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground group-hover:text-brand">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{p.location}</p>
                  <p className="mt-3 font-display text-base font-semibold text-brand">
                    From {p.priceFrom}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE STICKY FLOATING BOTTOM BAR WITH SAFE AREA INSET */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-surface/95 px-4 pt-3 pb-[max(0.875rem,env(safe-area-inset-bottom))] shadow-2xl backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Starting From</p>
            <p className="font-display text-lg font-bold text-brand">{project.priceFrom}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => openModal("brochure")}
              className="rounded-md border border-brand/60 px-3 py-2 text-[0.6875rem] uppercase tracking-wider text-foreground"
            >
              Brochure
            </button>
            <button
              onClick={() => openModal("visit")}
              className="rounded-md bg-gradient-brand px-4 py-2 text-[0.6875rem] uppercase tracking-wider text-brand-foreground shadow-brand"
            >
              Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* LEAD CAPTURE / DOWNLOAD MODAL */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName={project.name}
        defaultAction={modalAction}
        unitTitle={selectedUnitTitle}
      />
    </article>
  );
}
