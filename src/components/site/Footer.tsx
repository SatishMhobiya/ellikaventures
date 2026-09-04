import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl">Naverah</span>
            <span className="eyebrow">Assets</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            RERA-authorised real estate channel partner in Bengaluru. We carry a short portfolio and
            know every floor plan in it first-hand.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            RERA: PRM/KA/RERA/1251/446/AG/240118/003219
          </p>
        </div>

        <div>
          <p className="eyebrow">Projects</p>
          <ul className="mt-4 space-y-3 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="text-muted-foreground transition-colors hover:text-brand"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Office</p>
          <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
            <p>
              4th Floor, Prestige Towers
              <br />
              Residency Road, Bengaluru 560025
            </p>
            <p>
              <a className="transition-colors hover:text-brand" href="tel:+919000000000">
                +91 90000 00000
              </a>
              <br />
              <a
                className="transition-colors hover:text-brand"
                href="mailto:hello@naverahassets.com"
              >
                hello@naverahassets.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-border/50 px-6 py-6 text-center text-xs tracking-wide text-muted-foreground lg:px-10">
        © {new Date().getFullYear()} Naverah Assets. All rights reserved.
      </div>
    </footer>
  );
}
