import { useMemo, useState } from "react";
import {
  ArrowRight,
  Mountain,
  Palmtree,
  Sparkles,
  Trees,
} from "lucide-react";
import { destinations } from "../data/destinations";
import DestinationModal from "./DestinationModal";

const moods = [
  {
    id: "sunny",
    label: "Slow & Sunny",
    icon: Palmtree,
    description: "Beach days, warm sunsets & no rush.",
  },
  {
    id: "wild",
    label: "Wild & Free",
    icon: Mountain,
    description: "Mountains, trails & a little adventure.",
  },
  {
    id: "culture",
    label: "Culture & Soul",
    icon: Sparkles,
    description: "Stories, food, art & ancient places.",
  },
  {
    id: "green",
    label: "Quiet & Green",
    icon: Trees,
    description: "Nature, calm mornings & hidden retreats.",
  },
];

function TravelMood() {
  const [activeMood, setActiveMood] = useState("sunny");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const filteredDestinations = useMemo(() => {
    return destinations.filter(
      (destination) => destination.category === activeMood
    );
  }, [activeMood]);

  const activeMoodData = moods.find((mood) => mood.id === activeMood);

  return (
    <section
      id="discover"
      className="bg-[#f7f6f2] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
              Find your escape
            </p>

            <h2 className="font-display max-w-3xl text-5xl leading-none tracking-[-0.03em] text-[#17201c] sm:text-6xl lg:text-7xl">
              Where do you want
              <br />
              <span className="italic text-emerald-600">
                to feel alive?
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-500 lg:justify-self-end lg:pb-1">
            Every journey feels different. Tell us what kind of escape you're
            craving, and we'll show you a few places worth getting lost in.
          </p>
        </div>

        {/* Mood Selector */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {moods.map((mood) => {
            const Icon = mood.icon;
            const isActive = activeMood === mood.id;

            return (
              <button
                key={mood.id}
                type="button"
                onClick={() => setActiveMood(mood.id)}
                aria-pressed={isActive}
                className={`group rounded-2xl border p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-[#17201c] bg-[#17201c] text-white shadow-xl shadow-black/10"
                    : "border-slate-200 bg-white text-[#17201c] hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                      isActive
                        ? "bg-emerald-300 text-[#17201c]"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </span>

                  <ArrowRight
                    size={17}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-emerald-300"
                        : "-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-slate-500"
                    }`}
                  />
                </div>

                <h3 className="mt-6 font-semibold">{mood.label}</h3>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    isActive ? "text-white/55" : "text-slate-500"
                  }`}
                >
                  {mood.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Results Header */}
        <div className="mt-20 flex items-end justify-between border-b border-slate-200 pb-5">
          <div>
            <p className="text-sm text-slate-400">Curated for you</p>

            <h3 className="mt-1 text-xl font-semibold text-[#17201c]">
              {activeMoodData?.label}
            </h3>
          </div>

          <span className="text-sm text-slate-400">
            {filteredDestinations.length}{" "}
            {filteredDestinations.length === 1
              ? "destination"
              : "destinations"}
          </span>
        </div>

        {/* Destination Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredDestinations.map((destination) => (
            <article
              key={destination.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
            >
              {/* Image */}
              <div className="relative h-90 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />

                {/* Duration */}
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#17201c] backdrop-blur">
                  {destination.duration}
                </div>

                {/* Destination Name */}
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                    {destination.country}
                  </p>

                  <h4 className="mt-1 font-display text-4xl tracking-tight sm:text-5xl">
                    {destination.name}
                  </h4>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6">
                <p className="min-h-12 max-w-xl text-sm leading-6 text-slate-500">
                  {destination.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs text-slate-400">
                      Starting from
                    </p>

                    <p className="mt-1 font-semibold text-[#17201c]">
                      {destination.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedDestination(destination)}
                    className="group/button flex items-center gap-2 rounded-full bg-[#17201c] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
                  >
                    Explore

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      </div>
    </section>
  );
}

export default TravelMood;