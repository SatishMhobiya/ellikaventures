import { useState } from "react";
import { Layers, Download, Maximize2, Compass, LayoutGrid, Square, X } from "lucide-react";
import type { MasterPlanData, UnitPlanItem } from "@/data/projects";

interface ProjectFloorPlansProps {
  masterPlan: MasterPlanData;
  unitPlans: UnitPlanItem[];
  projectName: string;
  onDownloadFloorPlan: (unitTitle?: string) => void;
}

export function ProjectFloorPlans({
  masterPlan,
  unitPlans,
  projectName,
  onDownloadFloorPlan,
}: ProjectFloorPlansProps) {
  const [activeTab, setActiveTab] = useState<"master" | "unit">("master");
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [viewHighResImage, setViewHighResImage] = useState<string | null>(null);

  const currentUnit = unitPlans[selectedUnitIndex] || unitPlans[0];

  return (
    <div className="rounded-xl border border-border/80 bg-surface p-5 sm:p-8 lg:p-10 shadow-lift">
      {/* Header & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand">
            <Layers className="size-4" />
            <span>Architectural Layouts</span>
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Master Plan & Unit Layouts
          </h3>
        </div>

        {/* Clean Toggle Pills */}
        {/* <div className="inline-flex rounded-lg border border-border/80 bg-background p-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("master")}
            className={`flex items-center gap-2 rounded-md px-3.5 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all ${
              activeTab === "master"
                ? "bg-foreground text-background shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutGrid className="size-3.5" />
            <span>Master Plan</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("unit")}
            className={`flex items-center gap-2 rounded-md px-3.5 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all ${
              activeTab === "unit"
                ? "bg-foreground text-background shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Square className="size-3.5" />
            <span>Unit Floor Plans ({unitPlans.length})</span>
          </button>
        </div> */}
      </div>

      {/* MASTER PLAN VIEW */}
      {/* {activeTab === "master" && ( */}
        <div className="mt-6 sm:mt-8 space-y-6 animate-fade-in">
          <div className="relative overflow-hidden rounded-xl border border-border/70 bg-black/5">
            <img
              src={masterPlan.image}
              alt={`${projectName} Master Plan Layout`}
              width={1400}
              height={900}
              className="w-full object-cover shadow-inner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={() => setViewHighResImage(masterPlan.image)}
              className="absolute right-3.5 top-3.5 flex items-center gap-1.5 rounded-md bg-surface/90 px-3 py-1.5 text-xs text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-surface"
            >
              <Maximize2 className="size-3.5 text-brand" />
              <span>Enlarge Plan</span>
            </button>

            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 text-white">
              <div className="flex items-center gap-2">
                <Compass className="size-4 text-brand" />
                <span className="text-xs uppercase tracking-widest text-brand font-semibold">
                  Master Site Blueprint
                </span>
              </div>
              <button
                type="button"
                onClick={() => onDownloadFloorPlan("Master Layout Plan")}
                className="flex items-center gap-1.5 rounded bg-brand px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-foreground shadow-sm hover:opacity-95"
              >
                {/* <Download className="size-3.5" /> */}
                <span>Request</span>
              </button>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Land Parcel</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-foreground">{masterPlan.totalAcreage}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Green Cover</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-brand">{masterPlan.openSpaceRatio}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Towers</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-foreground">{masterPlan.towersCount}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Efficiency</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-brand">{masterPlan.carpetEfficiency}</p>
            </div>
          </div> */}
        </div>
      {/* )} */}

      {/* UNIT PLANS VIEW */}
      {/* {activeTab === "unit" && ( */}

         <div className="mt-6 sm:mt-8 space-y-6 animate-fade-in">
          <div className="relative overflow-hidden rounded-xl border border-border/70 bg-black/5">
            <img
              src={masterPlan.image}
              alt={`${projectName} Master Plan Layout`}
              width={1400}
              height={900}
              className="w-full object-cover shadow-inner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={() => setViewHighResImage(masterPlan.image)}
              className="absolute right-3.5 top-3.5 flex items-center gap-1.5 rounded-md bg-surface/90 px-3 py-1.5 text-xs text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-surface"
            >
              <Maximize2 className="size-3.5 text-brand" />
              <span>Enlarge Plan</span>
            </button>

            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 text-white">
              <div className="flex items-center gap-2">
                <Compass className="size-4 text-brand" />
                <span className="text-xs uppercase tracking-widest text-brand font-semibold">
                  Unit Floor Plan
                </span>
              </div>
              <button
                type="button"
                onClick={() => onDownloadFloorPlan("Master Layout Plan")}
                className="flex items-center gap-1.5 rounded bg-brand px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-foreground shadow-sm hover:opacity-95"
              >
                <Download className="size-3.5" />
                <span>Request</span>
              </button>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Land Parcel</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-foreground">{masterPlan.totalAcreage}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Green Cover</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-brand">{masterPlan.openSpaceRatio}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Towers</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-foreground">{masterPlan.towersCount}</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background p-3.5">
              <p className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">Efficiency</p>
              <p className="mt-1 font-display text-lg sm:text-xl text-brand">{masterPlan.carpetEfficiency}</p>
            </div>
          </div> */}
        </div>
      {/* )} */}

      {/* Enlarge Modal */}
      {viewHighResImage && (
        <div
          onClick={() => setViewHighResImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-lg bg-background p-2"
          >
            <button
              type="button"
              onClick={() => setViewHighResImage(null)}
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
            <img
              src={viewHighResImage}
              alt="Floor Plan Enlarge"
              className="max-h-[82vh] w-auto object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
