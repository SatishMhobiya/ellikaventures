import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Dark hero exists on homepage and project detail pages
  const isDarkHeroPage =
    pathname === "/" ||
    (pathname.startsWith("/projects/") && pathname !== "/projects" && pathname !== "/projects/");

  const isTransparent = isDarkHeroPage && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          open
            ? "border-b border-border/80 bg-background"
            : isTransparent
              ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
              : "border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span
              className={`font-display text-2xl tracking-tight transition-colors ${
                open ? "text-foreground" : isTransparent ? "text-white" : "text-foreground"
              }`}
            >
              Naverah
            </span>
            <span className="eyebrow text-brand">Assets</span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={`text-sm tracking-wide transition-colors ${
                  isTransparent
                    ? "text-white/85 hover:text-white data-[status=active]:text-brand"
                    : "text-muted-foreground hover:text-foreground data-[status=active]:text-brand"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`rounded-md border border-brand/80 px-5 py-2 text-xs uppercase tracking-[0.2em] text-brand transition-all hover:bg-brand hover:text-brand-foreground ${
                isTransparent
                  ? "bg-brand/10 backdrop-blur-sm"
                  : "hover:bg-brand hover:text-brand-foreground"
              }`}
            >
              Book a site visit
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`p-2 rounded-md md:hidden ${
              open ? "text-foreground" : isTransparent ? "text-white" : "text-foreground"
            }`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN DRAWER (Full screen z-[100] to eliminate any sticky sub-nav overlap) */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-background px-6 pb-8 pt-5 md:hidden overflow-y-auto animate-fade-in">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-border/60">
              <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
                <span className="font-display text-2xl tracking-tight text-foreground">
                  Naverah
                </span>
                <span className="eyebrow text-brand">Assets</span>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 text-foreground rounded-md"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="mt-4 space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/40 py-4 font-display text-2xl text-foreground transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-border/60 mt-8">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-gradient-brand py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground shadow-brand"
            >
              Book a site visit
            </Link>
            <a
              href="tel:+919876543210"
              className="flex w-full items-center justify-center rounded-md border border-border py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Call +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </>
  );
}
