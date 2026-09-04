import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from "lucide-react";
import type { GalleryItem, GalleryCategory } from "@/data/projects";

interface ProjectGalleryProps {
  items: GalleryItem[];
  projectName: string;
}

const categories: GalleryCategory[] = [
  "All",
  "Architecture",
  "Interiors",
  "Clubhouse",
  "Aerial & Views",
];

export function ProjectGallery({ items, projectName }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <div className="rounded-xl border border-border/80 bg-surface p-6 shadow-lift sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand">
            <Camera className="size-4" />
            <span>Visual Portfolio</span>
          </div>
          <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
            Gallery & Impressions
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Curated architectural photography and interior show-suite vistas for {projectName}.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <div
            key={item.src + idx}
            onClick={() => setLightboxIndex(idx)}
            className={`group relative cursor-pointer overflow-hidden rounded-lg border border-border/70 bg-background ${
              idx === 0 && filteredItems.length > 2
                ? "sm:col-span-2 lg:col-span-2 sm:row-span-2"
                : ""
            }`}
          >
            <div
              className={`relative w-full overflow-hidden ${
                idx === 0 && filteredItems.length > 2 ? "h-80 sm:h-[480px]" : "h-64 sm:h-72"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                width={1200}
                height={800}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Maximize2 className="size-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Mobile Touch Swipe Navigation */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in select-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 z-50 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="size-6" />
          </button>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-8"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}

          {/* Image & Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] max-w-5xl flex-col items-center"
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-4 flex w-full items-center justify-between px-2 text-white">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="font-display text-xl">{filteredItems[lightboxIndex].title}</h4>
              </div>
              <span className="text-xs tracking-widest text-white/70">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
