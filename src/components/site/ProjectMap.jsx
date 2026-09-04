import { useState } from "react";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";

export function ProjectMap({ mapData, projectName, location }) {
  const [mapInteractive, setMapInteractive] = useState(false);

  return (
    <div className="rounded-xl border border-border/80 bg-surface p-6 shadow-lift sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand">
            <Compass className="size-4" />
            <span>Strategic Location & Connectivity</span>
          </div>
          <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">{location}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {mapData.address}
          </p>
          {mapData.landmark && (
            <p className="mt-1 flex items-center gap-1.5 text-xs text-brand">
              <MapPin className="size-3.5" />
              <span>Landmark: {mapData.landmark}</span>
            </p>
          )}
        </div>

        <a
          href={mapData.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-brand/70 bg-brand/5 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-brand hover:text-brand-foreground"
        >
          <Navigation className="size-3.5 text-brand" />
          <span>Get Directions</span>
          <ExternalLink className="size-3 opacity-60" />
        </a>
      </div>

      {/* Map Embed with Custom Dark Champagne Frame & Mobile Scroll Protection */}
      <div
        className="relative mt-8 overflow-hidden rounded-lg border border-border/80 shadow-inner"
        onMouseLeave={() => setMapInteractive(false)}
      >
        <div className="aspect-[16/9] w-full min-h-[340px] md:min-h-[440px]">
          <iframe
            src={mapData.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${projectName} Location Map`}
            className={`size-full grayscale-[25%] contrast-[1.05] transition-opacity ${
              mapInteractive ? "pointer-events-auto" : "pointer-events-none md:pointer-events-auto"
            }`}
          />
        </div>

        {/* Mobile touch scroll overlay */}
        {!mapInteractive && (
          <div
            onClick={() => setMapInteractive(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/5 md:hidden cursor-pointer"
          >
            <span className="rounded-full bg-surface/95 px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground shadow-md backdrop-blur-sm border border-border">
              Tap to interact with map
            </span>
          </div>
        )}

        {/* Floating Location Badge */}
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-md border border-brand/40 bg-surface/95 px-3 py-2 sm:px-4 sm:py-2.5 shadow-lift backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand animate-pulse" />
            <span className="font-display text-xs sm:text-sm font-semibold text-foreground">
              {projectName}
            </span>
          </div>
          <p className="text-[0.625rem] sm:text-[0.6875rem] text-muted-foreground">
            {location}, Bengaluru
          </p>
        </div>
      </div>
    </div>
  );
}
