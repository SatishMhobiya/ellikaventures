import { useState, useEffect } from "react";
import { X, CheckCircle, Phone, Mail, Calendar, User, FileText } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  defaultAction?: "brochure" | "floorplan" | "visit" | "pricing";
  unitTitle?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  projectName,
  defaultAction = "brochure",
  unitTitle,
}: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    notes: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Allow user to view success, then close
    }, 2000);
  };

  const getHeading = () => {
    switch (defaultAction) {
      case "floorplan":
        return unitTitle
          ? `Floor Plan Specifications · ${unitTitle}`
          : `Download Floor Plans · ${projectName}`;
      // case "visit":
      //   return `Schedule a Private Site Visit · ${projectName}`;
      case "pricing":
        return `Request Detailed Cost Sheet · ${projectName}`;
      default:
        return `Request Official Brochure · ${projectName}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto rounded-xl border border-brand/40 bg-surface p-6 shadow-2xl sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <CheckCircle className="size-8" />
            </div>
            <h3 className="mt-5 font-display text-2xl text-foreground">Request Received</h3>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 inline-flex rounded-md bg-gradient-brand px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-brand-foreground"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.25em] text-brand">
              <FileText className="size-3.5" />
              <span>RERA Verified Inquiry</span>
            </div>
            <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
              {getHeading()}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Direct developer-authorized pricing, unit availability, and complete architectural
              specifications delivered directly to your inbox and phone.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Full Name *
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Phone Number *
                  </label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Email Address *
                  </label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3.5 top-3.5 size-4 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-brand py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-brand-foreground shadow-brand transition hover:opacity-95"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
