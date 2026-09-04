import { useState } from "react";
import { Sparkles, Check, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Clubhouse & Leisure",
  "Wellness & Sports",
  "Nature & Outdoors",
  "Community & Smart Living",
];

export function ProjectAmenities({
  visualAmenities,
  allAmenities,
  projectName,
  onEnquire,
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAmenities =
    activeCategory === "All"
      ? visualAmenities
      : visualAmenities.filter((a) => a.category === activeCategory);

  return (
    <div className="rounded-xl border border-border/80 bg-surface p-6 shadow-lift sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand">
            <Sparkles className="size-4" />
            <span>Curated Lifestyle Amenities</span>
          </div>
          <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
            Designed for Wellbeing & Luxury
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            From the grand clubhouse and thermal lap pools to biophilic trails, {projectName} is
            master-crafted with 30+ signature lifestyle spaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand text-brand-foreground"
                  : "bg-background/80 text-muted-foreground hover:bg-background hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Amenities Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAmenities.map((amenity) => (
          <div
            key={amenity.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/70 bg-background transition-all hover:border-brand/60 hover:shadow-lg"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={amenity.image}
                alt={amenity.title}
                width={800}
                height={500}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <h4 className="font-display text-lg font-medium text-white">{amenity.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comprehensive Amenities Checklist Grid */}
      <div className="mt-12 rounded-lg border border-border/60 bg-background/50 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-display text-xl text-foreground">
              Complete {projectName} Amenities List
            </h4>
            <p className="text-xs text-muted-foreground">
              Every detail verified under RERA filings and developer master specifications.
            </p>
          </div>
          <button
            type="button"
            onClick={onEnquire}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-brand hover:underline"
          >
            <span>Request Full Amenities Brochure</span>
            <ChevronRight className="size-3.5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {allAmenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-2 rounded-md border border-border/50 bg-surface px-3 py-2.5 text-xs text-foreground/90"
            >
              <Check className="size-3.5 shrink-0 text-brand" />
              <span className="truncate">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
