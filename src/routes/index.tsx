import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import hero from "@/assets/project-villas.jpg";
import interior from "@/assets/interior-ivory.jpg";
import { projects, propertyTypes, statuses } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

const title = "Naverah Assets | Luxury Apartments & Villas in Bengaluru";
const description =
  "RERA-authorised channel partner for premium Bengaluru real estate. Explore handpicked 2, 3 and 4 BHK apartments, villas and row houses with prices, possession dates and site visits.";

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

const numbers = [
  { value: "1,400+", label: "Happy families" },
  { value: "₹1,850 Cr", label: "Property sold" },
  { value: "42", label: "Listed projects" },
  { value: "14 yrs", label: "Combined experience" },
];

function SearchBar() {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const selectClass =
    "w-full appearance-none bg-transparent px-4 py-4 text-sm text-foreground outline-none";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate({ to: "/projects" });
      }}
      className="mt-12 grid max-w-3xl gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 backdrop-blur sm:grid-cols-[1fr_1fr_auto]"
    >
      <label className="bg-background/85">
        <span className="sr-only">Property type</span>
        <select className={selectClass} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Property type — any</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="bg-background/85">
        <span className="sr-only">Status</span>
        <select className={selectClass} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status — any</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-gradient-brand px-8 py-4 text-xs uppercase tracking-[0.22em] text-brand-foreground"
      >
        <Search className="size-4" /> Search
      </button>
    </form>
  );
}

function Index() {
  return (
    <>
      <section className="relative flex min-h-[96vh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Lakeside luxury apartment towers at golden hour in Bengaluru"
          width={1920}
          height={1200}
          className="absolute size-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 veil" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
          <p className="eyebrow rise">RERA authorised · Bengaluru</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.04] sm:text-7xl lg:text-8xl rise">
            Find the address
            <br />
            worth <span className="text-gradient-brand">holding</span>
          </h1>
          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground rise"
            style={{ animationDelay: "120ms" }}
          >
            A short, hand-checked portfolio of premium apartments, villas and row houses — with the
            numbers, the possession dates and the honest downside of each.
          </p>
          <div className="rise" style={{ animationDelay: "200ms" }}>
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
          {numbers.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-brand">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-lg shadow-lift">
            <img
              src={interior}
              alt="Ivory and champagne gold apartment interior"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">About Naverah</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Your trusted RERA-authorised channel partner
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Led by directors with more than a decade in Bengaluru real estate, Naverah Assets sits
              between developers and buyers — carrying only projects we have walked, measured and
              would put our own money into.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You get the floor-plate detail, the service-charge reality and the resale history
              before you see a brochure.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-brand"
            >
              More about us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Top properties</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
                Where your next home or investment begins
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-brand"
            >
              View all projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">Why Naverah</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
          One advisor, from shortlist to registration
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Shortlist",
              d: "Three projects maximum, matched to budget, commute and holding horizon — each with its trade-off written down.",
            },
            {
              n: "02",
              t: "Site & diligence",
              d: "Accompanied site visits, RERA and title verification, and a payment-schedule read-through before you commit.",
            },
            {
              n: "03",
              t: "Close & after",
              d: "Booking, home loan coordination, registration, snagging and handover — then leasing whenever you're ready.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-lg border border-border/60 bg-surface p-7">
              <p className="font-display text-3xl text-brand">{s.n}</p>
              <h3 className="mt-4 text-xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <p className="eyebrow">Site visits</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            Tell us your budget and commute. We'll do the rest.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We respond within one working day with a shortlist and a site-visit slot — no call
            centre, no spam.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-md bg-gradient-brand px-8 py-4 text-xs uppercase tracking-[0.22em] text-brand-foreground shadow-brand"
          >
            Get started
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
