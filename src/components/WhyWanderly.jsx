import {
    ArrowUpRight,
    Compass,
    Heart,
    Leaf,
    Sparkles,
  } from "lucide-react";
  
  const principles = [
    {
      number: "01",
      title: "Go deeper",
      description:
        "We look beyond the obvious attractions to find experiences that feel personal.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Travel lighter",
      description:
        "Thoughtful choices, local experiences and journeys with less unnecessary noise.",
      icon: Leaf,
    },
    {
      number: "03",
      title: "Feel more",
      description:
        "Because the best memories usually happen between the places on your itinerary.",
      icon: Heart,
    },
    {
      number: "04",
      title: "Stay curious",
      description:
        "Every destination has another story waiting around the corner.",
      icon: Sparkles,
    },
  ];
  
  function WhyWanderly() {
    return (
      <section
        id="experiences"
        className="overflow-hidden bg-[#17201c] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                Why Wanderly
              </p>
  
              <h2 className="font-display max-w-4xl text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
                Don't just see
                <br />
                <span className="italic text-emerald-300">the world.</span>
                <br />
                Feel it.
              </h2>
            </div>
  
            <div className="lg:pb-2">
              <p className="max-w-md text-base leading-7 text-white/55 sm:text-lg">
                We believe travel isn't a checklist. It's the unexpected café,
                the conversation with a stranger, the road you almost didn't
                take.
              </p>
            </div>
          </div>
  
          {/* Stats */}
          <div className="mt-16 grid border-y border-white/10 sm:grid-cols-3">
            <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
              <p className="font-display text-5xl text-white sm:text-6xl">
                40<span className="text-emerald-300">+</span>
              </p>
              <p className="mt-2 text-sm text-white/45">Curated destinations</p>
            </div>
  
            <div className="border-b border-white/10 py-7 sm:border-b-0 sm:px-8 sm:border-r">
              <p className="font-display text-5xl text-white sm:text-6xl">
                12k<span className="text-emerald-300">+</span>
              </p>
              <p className="mt-2 text-sm text-white/45">Journeys imagined</p>
            </div>
  
            <div className="py-7 sm:pl-8">
              <p className="font-display text-5xl text-white sm:text-6xl">
                4.9<span className="text-emerald-300">/5</span>
              </p>
              <p className="mt-2 text-sm text-white/45">Traveler happiness</p>
            </div>
          </div>
  
          {/* Visual Story */}
          <div className="mt-20 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Quote Card */}
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#25302a] p-8 sm:p-10">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85')",
                }}
              />
  
              <div className="absolute inset-0 bg-gradient-to-t from-[#17201c] via-[#17201c]/35 to-transparent" />
  
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                  <Sparkles size={19} />
                </div>
  
                <div>
                  <p className="font-display text-3xl leading-tight text-white sm:text-4xl">
                    “The best trips aren't the ones you planned perfectly.”
                  </p>
  
                  <p className="mt-5 text-sm text-white/50">
                    They're the ones that leave you with a story.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Principles */}
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;
  
                return (
                  <div
                    key={principle.number}
                    className="group bg-[#17201c] p-7 transition-colors duration-300 hover:bg-[#202b25] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs text-white/25">
                        {principle.number}
                      </span>
  
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 group-hover:border-emerald-300/40 group-hover:text-emerald-300">
                        <Icon size={17} />
                      </span>
                    </div>
  
                    <h3 className="mt-12 font-display text-2xl">
                      {principle.title}
                    </h3>
  
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                      {principle.description}
                    </p>
  
                    <ArrowUpRight
                      size={17}
                      className="mt-7 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyWanderly;