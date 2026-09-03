import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior-ivory.jpg";

const title = "About Naverah Assets | RERA-Authorised Channel Partner";
const description =
  "Naverah Assets is a RERA-authorised Bengaluru real estate channel partner led by directors with 10+ years of experience, bridging developers and investors.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-36 lg:px-10 lg:pt-44">
      <p className="eyebrow">About</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
        A small firm, on purpose
      </h1>

      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Naverah Assets is a RERA-authorised channel partner working across Bengaluru's premium
            residential market. Our directors have spent more than a decade each on the developer
            and buyer side, and the firm exists to make that knowledge available to a handful of
            clients at a time.
          </p>
          <p>
            We carry a short list of projects rather than an inventory feed. That lets us tell you
            which tower gets the western sun, which layouts lease fastest to families, and where the
            maintenance charge is going to move after handover.
          </p>
          <p>
            We're paid by the developer, so our advisory costs you nothing — and our incentive is a
            client who comes back for the second purchase.
          </p>
        </div>
        <img
          src={interior}
          alt="Ivory and champagne gold residence interior"
          width={1400}
          height={1000}
          loading="lazy"
          className="h-full w-full rounded-lg object-cover shadow-lift"
        />
      </div>

      <div className="mt-20 grid gap-8 border-t border-border/60 pt-14 sm:grid-cols-3">
        {[
          {
            t: "Advisory",
            d: "Shortlisting, negotiation and resale strategy for end-users and investors.",
          },
          {
            t: "Diligence",
            d: "RERA, title, approval and payment-schedule verification before you book.",
          },
          {
            t: "After handover",
            d: "Snagging, interiors coordination, tenancy and annual performance review.",
          },
        ].map((s) => (
          <div key={s.t}>
            <h2 className="font-display text-2xl text-brand">{s.t}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
