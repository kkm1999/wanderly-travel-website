import { useEffect } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  X,
} from "lucide-react";

function DestinationModal({ destination, onClose }) {
  // Close with Escape
  useEffect(() => {
    if (!destination) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [destination, onClose]);

  if (!destination) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="destination-title"
    >
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-4xl bg-[#f7f6f2] shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close destination details"
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-black/80"
        >
          <X size={19} />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-80 overflow-hidden lg:h-155">
            <img
              src={destination.image}
              alt={`${destination.name}, ${destination.country}`}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 text-white sm:left-9">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <MapPin size={13} />
                {destination.country}
              </div>

              <h2
                id="destination-title"
                className="font-display text-5xl tracking-tight sm:text-6xl"
              >
                {destination.name}
              </h2>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                Your next escape
              </p>

              <h3 className="mt-4 max-w-md font-display text-4xl leading-tight text-[#17201c] sm:text-5xl">
                Make this the trip you remember.
              </h3>

              <p className="mt-6 text-base leading-7 text-slate-500">
                {destination.description}
              </p>

              {/* Trip Info */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <CalendarDays size={18} className="text-emerald-700" />

                  <p className="mt-4 text-xs text-slate-400">Duration</p>

                  <p className="mt-1 text-sm font-semibold text-[#17201c]">
                    {destination.duration}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <MapPin size={18} className="text-emerald-700" />

                  <p className="mt-4 text-xs text-slate-400">Destination</p>

                  <p className="mt-1 text-sm font-semibold text-[#17201c]">
                    {destination.country}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-[#17201c]">
                  What's waiting for you
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Handpicked stays",
                    "Local experiences",
                    "Flexible plans",
                    "Travel support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 border-t border-slate-200 pt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs text-slate-400">Starting from</p>

                  <p className="mt-1 text-2xl font-bold text-[#17201c]">
                    {destination.price}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    per person · sample package
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#17201c] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  Plan this escape
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationModal;