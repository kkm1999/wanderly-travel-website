import {
    ArrowRight,
    MapPin,
    Play,
    Sparkles,
  } from "lucide-react";
  
  function Hero() {
    return (
      <section className="relative min-h-screen overflow-hidden bg-[#17201c] text-white">
        {/* Background image */}
        <div
          className="hero-image absolute inset-0 scale-[1.03] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545140976-8c17471ba12d?auto=format&fit=crop&w=2400&q=90')",
          }}
          aria-hidden="true"
        />
  
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-black/30" />
  
        {/* Ambient glow */}
        <div
          className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-emerald-400/20 blur-[120px]"
          aria-hidden="true"
        />
  
        {/* Hero content */}
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="w-full">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                <Sparkles size={15} strokeWidth={1.8} />
              </span>
  
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 sm:text-xs">
                Travel beyond the ordinary
              </span>
            </div>
  
            {/* Main heading */}
            <h1 className="font-display max-w-5xl text-[3.8rem] leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[7.2rem]">
              Go where
              <br />
              <span className="italic text-emerald-300">
                you feel alive.
              </span>
            </h1>
  
            {/* Description + actions */}
            <div className="mt-9 flex flex-col gap-6 lg:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="max-w-lg">
                <p className="max-w-md text-sm leading-6 text-white/70 sm:text-base sm:leading-7 lg:text-lg">
                  Handpicked escapes, unforgettable experiences, and journeys
                  designed around the way you want to travel.
                </p>
  
                {/* Hero buttons */}
                <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                  {/* Discover CTA */}
                  <a
                    href="#discover"
                    className="group flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-xs font-semibold text-slate-900 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-100 sm:px-6 sm:text-sm"
                  >
                    Explore destinations
  
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
  
                  {/* About CTA */}
                  <a
                    href="#about"
                    className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-xs font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:text-sm"
                  >
                    <Play size={13} fill="currentColor" />
                    Our story
                  </a>
                </div>
              </div>
  
              {/* Hidden escapes */}
              <div className="mt-1 lg:mt-0">
                {/* Desktop card */}
                <a
                  href="#discover"
                  aria-label="Explore hidden escapes in South Asia"
                  className="group hidden w-72 rounded-2xl border border-white/15 bg-black/25 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-black/35 lg:block"
                >
                  <div
                    className="h-36 rounded-xl bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=700&q=80')",
                    }}
                  />
  
                  <div className="flex items-center justify-between px-1 pt-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-white/55">
                        <MapPin size={12} />
                        South Asia
                      </div>
  
                      <p className="mt-1 font-display text-lg">
                        Hidden escapes
                      </p>
                    </div>
  
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-emerald-300 group-hover:text-[#17201c]">
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </a>
  
                {/* Mobile / tablet compact CTA */}
                <a
                  href="#discover"
                  aria-label="Explore hidden escapes in South Asia"
                  className="group flex max-w-md items-center justify-between rounded-2xl border border-white/15 bg-black/25 px-4 py-3.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-black/35 lg:hidden"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/50">
                      <MapPin size={11} />
                      South Asia
                    </div>
  
                    <p className="mt-1 font-display text-lg text-white">
                      Hidden escapes
                    </p>
                  </div>
  
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:bg-emerald-300 group-hover:text-[#17201c]">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Scroll cue → Wanderly AI */}
        <a
          href="#wanderly-ai"
          aria-label="Scroll to Wanderly AI"
          className="scroll-cue absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-all duration-300 hover:text-white sm:flex"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            Scroll
          </span>
  
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1.5">
            <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </a>
      </section>
    );
  }
  
  export default Hero;