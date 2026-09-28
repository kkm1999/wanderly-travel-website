import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Sparkles,
} from "lucide-react";
import { findBestDestination } from "../utils/travelMatcher";
import DestinationModal from "./DestinationModal";

const quickPrompts = [
  "Peaceful mountains under ₹30k",
  "Beach escape for 5 days",
  "Culture, food & history",
  "Quiet green retreat",
];

function AITravelPlanner() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;

    const recommendation = findBestDestination(query);
    setResult(recommendation);
  };

  const handleQuickPrompt = (prompt) => {
    setQuery(prompt);

    const recommendation = findBestDestination(prompt);
    setResult(recommendation);
  };

  const destination = result?.destination;

  return (
    <section
      id="wanderly-ai"
      className="bg-[#17201c] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/4 shadow-2xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT — AI INPUT */}
            <div className="relative p-7 sm:p-10 lg:p-14">
              <div
                className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300 text-[#17201c]">
                    <Bot size={19} />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                      Wanderly AI
                    </p>

                    <p className="mt-0.5 text-xs text-white/40">
                      Smart travel matching
                    </p>
                  </div>
                </div>

                <h2 className="font-display mt-10 max-w-xl text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Tell us how you want
                  <span className="italic text-emerald-300">
                    {" "}
                    to feel.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                  Describe your ideal escape in your own words. We'll match
                  your mood, time and budget with a destination from our
                  collection.
                </p>

                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="rounded-2xl border border-white/15 bg-black/20 p-2 backdrop-blur">
                    <textarea
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      rows={3}
                      placeholder="e.g. A peaceful 5-day mountain trip under ₹30k..."
                      className="w-full resize-none bg-transparent px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-white/30"
                      aria-label="Describe your ideal trip"
                    />

                    <div className="flex justify-end border-t border-white/10 pt-2">
                      <button
                        type="submit"
                        className="group flex items-center gap-2 rounded-xl bg-emerald-300 px-4 py-2.5 text-xs font-bold text-[#17201c] transition hover:bg-emerald-200"
                      >
                        Find my escape
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mt-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Try a prompt
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => handleQuickPrompt(prompt)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/55 transition hover:border-emerald-300/30 hover:bg-white/10 hover:text-white"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — AI RESULT */}
            <div className="relative min-h-105 overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              {destination ? (
                <>
                  <img
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/10" />

                  <div className="relative flex h-full min-h-105 flex-col justify-end p-7 sm:p-10">
                    {/* FIXED TOP MATCH BADGE */}
                    <div className="absolute left-7 top-7 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70 backdrop-blur-md sm:left-10 sm:top-10">
                      <Sparkles
                        size={14}
                        className="shrink-0 text-emerald-300"
                      />
                      <span>Your match</span>
                    </div>

                    {/* DESTINATION CONTENT */}
                    <div className="relative z-10 pt-20">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                        {destination.country}
                      </p>

                      <h3 className="font-display mt-2 text-5xl tracking-tight sm:text-6xl">
                        {destination.name}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                        {destination.description}
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-3 backdrop-blur">
                          <p className="text-[10px] uppercase tracking-wider text-white/35">
                            Duration
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            {destination.duration}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-3 backdrop-blur">
                          <p className="text-[10px] uppercase tracking-wider text-white/35">
                            Starting from
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            {destination.price}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedDestination(destination)}
                        className="mt-5 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#17201c] transition hover:bg-emerald-100"
                      >
                        Explore {destination.name}
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex h-full min-h-105 items-center justify-center p-8">
                  <div className="max-w-sm text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                      <Sparkles size={25} />
                    </div>

                    <h3 className="font-display mt-6 text-3xl">
                      Your escape is waiting.
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      Tell us what you're looking for and we'll find a
                      destination that fits.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-2 text-[11px] text-white/35">
                      <span className="flex items-center gap-1">
                        <Check
                          size={12}
                          className="text-emerald-300"
                        />
                        Mood
                      </span>

                      <span className="flex items-center gap-1">
                        <Check
                          size={12}
                          className="text-emerald-300"
                        />
                        Budget
                      </span>

                      <span className="flex items-center gap-1">
                        <Check
                          size={12}
                          className="text-emerald-300"
                        />
                        Duration
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[10px] text-white/25">
          Wanderly AI uses a local recommendation engine for this demo.
        </p>

        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      </div>
    </section>
  );
}

export default AITravelPlanner;