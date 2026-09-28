import { ArrowUpRight, Globe2, Users, WandSparkles } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Curated globally",
    text: "We search for places that deserve more than a quick stop.",
  },
  {
    icon: Users,
    title: "Made for people",
    text: "Every journey starts with how you want to feel, not a fixed itinerary.",
  },
  {
    icon: WandSparkles,
    title: "Built around moments",
    text: "The details between destinations are what make a trip memorable.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-[#f7f6f2] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-125 overflow-hidden rounded-4xl sm:h-150">
            <img
  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85"
  alt="Mountain landscape representing the spirit of travel"
  className="h-full w-full object-cover"
  loading="lazy"
/>

              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Since 2024
                  </p>
                  <p className="mt-2 font-display text-3xl">
                    Travel with intention.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:-right-5">
              <p className="font-display text-3xl text-[#17201c]">
                100%
              </p>
              <p className="mt-1 text-xs text-slate-400">
                made for curious travelers
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
              About Wanderly
            </p>

            <h2 className="mt-5 font-display text-5xl leading-none tracking-[-0.03em] text-[#17201c] sm:text-6xl">
              Travel should feel
              <br />
              <span className="italic text-emerald-600">like yours.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Wanderly is a fictional travel studio built around one simple
              idea: the best journeys aren't identical. We bring together
              handpicked destinations, thoughtful experiences and flexible
              travel ideas so you can create an escape that feels personal.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex gap-4 border-t border-slate-200 pt-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-colors duration-300 group-hover:bg-[#17201c] group-hover:text-emerald-300">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#17201c]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-lg text-sm leading-6 text-slate-500">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#17201c] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Start planning
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;