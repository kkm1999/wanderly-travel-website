import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Sparkles,
  X,
} from "lucide-react";
import { findBestDestination } from "../utils/travelMatcher";
import DestinationModal from "./DestinationModal";

const quickPrompts = [
  "Peaceful mountains",
  "Beach escape",
  "Culture & food",
  "Quiet nature",
];

function WanderlyAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;

    setResult(findBestDestination(query));
  };

  const handleQuickPrompt = (prompt) => {
    setQuery(prompt);
    setResult(findBestDestination(prompt));
  };

  const destination = result?.destination;

  return (
    <>
      {/* Floating AI launcher */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Wanderly AI"
          title="Wanderly AI"
          className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#17201c]/95 text-white shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#203029] sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 rounded-full border border-emerald-300/0 transition-all duration-300 group-hover:scale-125 group-hover:border-emerald-300/20" />

          <Sparkles
            size={21}
            className="relative text-emerald-300 transition-transform duration-300 group-hover:rotate-12"
          />

          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#17201c] bg-emerald-300 px-1 text-[8px] font-bold text-[#17201c]">
            Help
          </span>
        </button>
      )}

      {/* AI overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/40 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="absolute bottom-4 right-4 w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#17201c] text-white shadow-2xl shadow-black/30 sm:bottom-7 sm:right-7 sm:w-107.5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-300 text-[#17201c]">
                  <Bot size={17} />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                    Wanderly AI
                  </p>

                  <p className="mt-0.5 text-[11px] text-white/40">
                    Your personal travel matcher
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Wanderly AI"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[75vh] overflow-y-auto p-5 sm:p-6">
              {!destination ? (
                <>
                  <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">
                      <Sparkles size={19} />
                    </div>

                    <h2 className="font-display mt-5 text-3xl leading-tight">
                      Where do you want
                      <span className="italic text-emerald-300">
                        {" "}
                        to escape?
                      </span>
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      Tell us about your ideal trip. We'll match your mood,
                      budget and time with a destination.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-5">
                      <div className="rounded-xl border border-white/15 bg-black/20 p-2">
                        <textarea
                          value={query}
                          onChange={(event) => setQuery(event.target.value)}
                          rows={3}
                          placeholder="Try: peaceful mountains under ₹30k..."
                          className="w-full resize-none bg-transparent px-2 py-1 text-sm leading-6 text-white outline-none placeholder:text-white/25"
                          aria-label="Describe your ideal trip"
                        />

                        <div className="flex justify-end border-t border-white/10 pt-2">
                          <button
                            type="submit"
                            className="group flex items-center gap-2 rounded-lg bg-emerald-300 px-4 py-2.5 text-xs font-bold text-[#17201c] transition hover:bg-emerald-200"
                          >
                            Find my escape
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-5">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Try a quick idea
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

                  <div className="mt-5 flex items-center justify-center gap-4 text-[10px] text-white/25">
                    <span className="flex items-center gap-1">
                      <Check size={11} className="text-emerald-300" />
                      Mood
                    </span>

                    <span className="flex items-center gap-1">
                      <Check size={11} className="text-emerald-300" />
                      Budget
                    </span>

                    <span className="flex items-center gap-1">
                      <Check size={11} className="text-emerald-300" />
                      Duration
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/4">
                    <div className="relative h-52">
                      <img
                        src={destination.image}
                        alt={`${destination.name}, ${destination.country}`}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-4 left-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                          Your match
                        </p>

                        <h3 className="font-display mt-1 text-4xl">
                          {destination.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        {destination.country}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        {destination.description}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                          <p className="text-[9px] uppercase tracking-wider text-white/30">
                            Duration
                          </p>

                          <p className="mt-1 text-xs font-semibold">
                            {destination.duration}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                          <p className="text-[9px] uppercase tracking-wider text-white/30">
                            Starting from
                          </p>

                          <p className="mt-1 text-xs font-semibold">
                            {destination.price}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedDestination(destination)
                        }
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#17201c] transition hover:bg-emerald-100"
                      >
                        Explore {destination.name}
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="mt-4 w-full rounded-xl border border-white/10 px-4 py-3 text-xs font-semibold text-white/50 transition hover:bg-white/5 hover:text-white"
                  >
                    Try another escape
                  </button>
                </>
              )}
            </div>

            <p className="border-t border-white/10 px-5 py-3 text-center text-[9px] text-white/20">
              Local recommendation engine · Demo feature
            </p>
          </div>
        </div>
      )}

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </>
  );
}

export default WanderlyAIAssistant;