import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Search,
  MapPin,
  Sparkles,
  ShieldCheck,
  Compass,
  FileText,
  Phone,
  CheckCircle2,
  Building2,
  Calendar,
} from "lucide-react";
import hero from "@/assets/hero-lakeside.jpg";
import interior from "@/assets/interior-ivory.jpg";
import clubhouse from "@/assets/project-clubhouse.jpg";
import { projects, propertyTypes, statuses, type PropertyType } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { EnquiryModal } from "@/components/site/EnquiryModal";

const title = "Naverah Assets | Luxury Real Estate & Residences in Bengaluru";
const description =
  "Authorised partner for premium Bengaluru residences. Discover curated 2, 3 and 4 BHK apartments, luxury villas, and row houses with verified RERA documentation, master plans, and site visits.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const stats = [
  { value: "₹1,850 Cr+", label: "Transacted Value" },
  { value: "1,400+", label: "Handovers Completed" },
  { value: "100%", label: "RERA Compliant" },
  { value: "14+ Yrs", label: "Bengaluru Expertise" },
];

function SearchBar() {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [budget, setBudget] = useState("");

  const selectClass =
    "w-full appearance-none bg-white px-4 py-3.5 sm:py-4 text-xs font-medium uppercase tracking-wider text-neutral-800 outline-none transition cursor-pointer";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate({ to: "/projects" });
      }}
      className="mt-6 sm:mt-10 grid max-w-4xl gap-px overflow-hidden rounded-xl border border-white/20 bg-neutral-300/80 shadow-2xl sm:grid-cols-4"
    >
      <label className="bg-white">
        <span className="sr-only">Property Type</span>
        <select className={selectClass} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Property Type · All</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="bg-white">
        <span className="sr-only">Status</span>
        <select className={selectClass} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status · All</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="bg-white">
        <span className="sr-only">Budget</span>
        <select className={selectClass} value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">Price Range</option>
          <option value="1-2">₹1.00 Cr – ₹2.00 Cr</option>
          <option value="2-3">₹2.00 Cr – ₹3.50 Cr</option>
          <option value="3+">₹3.50 Cr & Above</option>
        </select>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-gradient-brand px-6 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-foreground transition hover:opacity-95"
      >
        <Search className="size-4" />
        <span>Search</span>
      </button>
    </form>
  );
}

function Index() {
  const [selectedFilter, setSelectedFilter] = useState<"All" | PropertyType>("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectForModal, setActiveProjectForModal] = useState("Naverah Collection");

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((p) => p.propertyType === selectedFilter);

  const openEnquiry = (projectName?: string) => {
    setActiveProjectForModal(projectName || "Naverah Collection");
    setModalOpen(true);
  };

  return (
    <div className="bg-background">
      {/* 1. HERO SECTION (Clean balanced backdrop like naverahassets.com) */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Lakeside luxury residential towers in Bengaluru"
          width={1920}
          height={1200}
          className="absolute size-full object-cover"
        />
        {/* Clean, uniform dark backdrop overlay matching naverahassets.com */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-95" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-16 sm:py-24 lg:px-10 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-black/50 px-3.5 py-1.5 backdrop-blur-md">
            <span className="size-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.22em] text-brand">
              RERA-Authorised Channel Partner · Bengaluru
            </span>
          </div>

          <h1 className="mt-4 sm:mt-5 max-w-4xl font-display text-3xl font-normal leading-[1.12] text-white sm:text-6xl lg:text-7xl sm:leading-[1.08]">
            Find your perfect property with <span className="text-brand">Naverah Assets</span>
          </h1>

          <SearchBar />

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-zinc-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-brand" /> Zero Brokerage on Builder Units
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" /> Title & RERA Verified Only
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="size-4 text-brand" /> Instant Site Visit Scheduling
            </span>
          </div>
        </div>
      </section>

      {/* 2. STATS RIBBON */}
      <section className="border-y border-border/80 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 lg:px-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES WITH TYPOLOGY FILTER */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Curated Collection</p>
            <h2 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Signature Residences
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Hand-checked floor plates, carpet efficiencies upwards of 75%, and prime connectivity
              to Bengaluru tech corridors.
            </p>
          </div>

          {/* Typology Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Apartments", "Villas", "Row Houses"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`rounded-md px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all ${
                  selectedFilter === tab
                    ? "bg-foreground text-background shadow-sm"
                    : "border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((p, idx) => (
            <ProjectCard key={p.slug} project={p} index={idx} />
          ))}
        </div>
      </section>

      {/* 4. ARCHITECTURAL CRAFT & SIGNATURE AMENITIES (ASSETZ BENCHMARK) */}
      <section className="border-t border-border/80 bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Human-Centric Design</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Amenities crafted for living, not just brochures
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Drawing inspiration from Bengaluru's leading architectural developers, every
                residence in our portfolio balances deep living balconies, thermal regulation, and
                expansive green cover.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    t: "60,000+ sq.ft Grand Clubhouses",
                    d: "Double-height lounges, banquet facilities, temperature-controlled lap pools, and private screening rooms.",
                  },
                  {
                    t: "75%+ Usable Carpet Efficiency",
                    d: "Zero wasteful corridor square footage, dedicated service entrances, and cross ventilation in all bedrooms.",
                  },
                  {
                    t: "Vehicle-Free Pedestrian Podiums",
                    d: "All vehicular circulation and parking kept below ground, ensuring child-safe parks and silence on the surface.",
                  },
                ].map((feat) => (
                  <div
                    key={feat.t}
                    className="rounded-lg border border-border/60 bg-background p-4"
                  >
                    <h4 className="font-display text-lg text-foreground">{feat.t}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feat.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => openEnquiry("Curated Portfolio")}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-brand-foreground shadow-brand hover:opacity-95"
                >
                  <FileText className="size-4" />
                  <span>Download Master Portfolio PDF</span>
                </button>
              </div>
            </div>

            {/* Visual Photo Showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={clubhouse}
                  alt="Modern Clubhouse"
                  width={600}
                  height={700}
                  className="h-64 w-full rounded-xl object-cover shadow-lift"
                />
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
                  alt="Infinity Pool"
                  width={600}
                  height={500}
                  className="h-44 w-full rounded-xl object-cover shadow-lift"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={interior}
                  alt="Luxury Ivory Interior"
                  width={600}
                  height={500}
                  className="h-44 w-full rounded-xl object-cover shadow-lift"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="Private Balcony & Courtyard"
                  width={600}
                  height={700}
                  className="h-64 w-full rounded-xl object-cover shadow-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC BENGALURU LOCATIONS & MAP TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Strategic Corridors</p>
            <h2 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Prime Growth Locations
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Connected directly to airport expressways, upcoming metro lines, and premier IT parks.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand hover:underline"
          >
            <span>View Interactive Locations</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              hub: "Airport Corridor",
              location: "Yelahanka & Bellary Road",
              projects: "Naverah One Tower",
              distance: "18 mins to BLR Airport · Blue Line Metro",
            },
            {
              hub: "Lake District",
              location: "Kudlu & Off Hosur Road",
              projects: "Mizumi Reserve",
              distance: "15 mins to Electronic City · 20 mins to HSR",
            },
            {
              hub: "Villa Enclave",
              location: "Sarjapur Road",
              projects: "The Ivory Villas",
              distance: "8 mins to Greenwood High · 12 mins to Wipro",
            },
            {
              hub: "Aerospace Belt",
              location: "Devanahalli",
              projects: "Serene Row Houses",
              distance: "10 mins to Boeing SEZ · 18 mins to Airport",
            },
          ].map((loc) => (
            <div
              key={loc.hub}
              className="rounded-xl border border-border/70 bg-surface p-6 shadow-sm transition-all hover:border-brand/60 hover:shadow-lift"
            >
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-brand">
                {loc.hub}
              </span>
              <h3 className="mt-1 font-display text-2xl text-foreground">{loc.location}</h3>
              <p className="mt-2 text-xs font-medium text-brand">{loc.projects}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{loc.distance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRANSPARENT BUYING PROCESS (VALUEPERSQFT BENCHMARK) */}
      <section className="border-t border-border/80 bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Naverah Advantage</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Transparent advisory from shortlist to key handover
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Unlike typical listing portals, we act as your dedicated personal advisor — giving you
              true carpet area efficiencies, maintenance realities, and direct developer pricing.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Curated Shortlist",
                desc: "Maximum 3 projects tailored to your commute, holding horizon, and Vaastu preferences. Every trade-off documented upfront.",
              },
              {
                step: "02",
                title: "Accompanied Site Tour & Legal Diligence",
                desc: "Private chauffeured site visits, title deed checks, sanctioned plan inspections, and payment milestone verification.",
              },
              {
                step: "03",
                title: "Booking, Loan & Snagging",
                desc: "Zero buyer commissions on builder allocations, home loan syndication with premier banks, pre-handover snagging, and leasing support.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="rounded-xl border border-border/70 bg-background p-7 shadow-sm transition hover:border-brand/60"
              >
                <span className="font-display text-4xl text-brand">{st.step}</span>
                <h3 className="mt-4 font-display text-2xl text-foreground">{st.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SITE VISIT VIP CONSULTATION BANNER */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
        <div className="rounded-2xl border border-brand/50 bg-gradient-to-b from-surface to-background p-10 shadow-2xl sm:p-16">
          <span className="eyebrow">Private Site Visits</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Experience the properties in person
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Schedule a private chauffeured visit to any project. We walk the layout, review master
            specifications, and provide detailed cost sheets without high-pressure sales tactics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openEnquiry("Private Site Visit")}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-foreground shadow-brand hover:opacity-95"
            >
              <Calendar className="size-4" />
              <span>Book a Private Visit</span>
            </button>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-8 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-brand hover:text-brand"
            >
              <Phone className="size-4" />
              <span>Call Senior Advisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName={activeProjectForModal}
        defaultAction="visit"
      />
    </div>
  );
}
