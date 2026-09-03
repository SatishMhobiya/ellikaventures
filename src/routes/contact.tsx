import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { projects } from "@/data/projects";

const title = "Contact Naverah Assets | Book a Site Visit";
const description =
  "Request a brochure or book an accompanied site visit for Naverah Assets projects in Bengaluru. We reply within one working day.";

type Search = { project?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): Search =>
    typeof search["project"] === "string" ? { project: search["project"] } : {},
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
  component: Contact,
});

const inputClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand";

function Contact() {
  const { project } = Route.useSearch();
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-36 lg:px-10 lg:pt-44">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">
            Let's find your address
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Share your budget, preferred locality and timeline. We come back within one working day
            with a shortlist and site-visit slots.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="eyebrow">Office</dt>
              <dd className="mt-2 text-muted-foreground">
                4th Floor, Prestige Towers, Residency Road, Bengaluru 560025
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-2">
                <a href="tel:+919000000000" className="text-muted-foreground hover:text-brand">
                  +91 90000 00000
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2">
                <a
                  href="mailto:hello@naverahassets.com"
                  className="text-muted-foreground hover:text-brand"
                >
                  hello@naverahassets.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">RERA</dt>
              <dd className="mt-2 text-muted-foreground">PRM/KA/RERA/1251/446/AG/240118/003219</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-border/70 bg-surface p-8 lg:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <Check className="size-10 text-brand" />
              <h2 className="mt-5 font-display text-3xl">Thank you</h2>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Your enquiry is with our advisory team. We'll call you within one working day.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 text-xs uppercase tracking-[0.2em] text-brand"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Full name
                  <input required name="name" className={inputClass} placeholder="Your name" />
                </label>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                  <input required name="phone" className={inputClass} placeholder="+91 …" />
                </label>
              </div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </label>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Project of interest
                  <select name="project" className={inputClass} defaultValue={project ?? ""}>
                    <option value="">No preference yet</option>
                    {projects.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} — {p.location}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Budget
                  <select name="budget" className={inputClass} defaultValue="">
                    <option value="">Select a range</option>
                    <option>Under ₹1.5 Cr</option>
                    <option>₹1.5 Cr – ₹2.5 Cr</option>
                    <option>₹2.5 Cr – ₹4 Cr</option>
                    <option>Above ₹4 Cr</option>
                  </select>
                </label>
              </div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Message
                <textarea
                  name="message"
                  rows={4}
                  className={inputClass}
                  placeholder="Preferred locality, commute, timeline…"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-brand px-6 py-4 text-xs uppercase tracking-[0.22em] text-brand-foreground shadow-brand"
              >
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
