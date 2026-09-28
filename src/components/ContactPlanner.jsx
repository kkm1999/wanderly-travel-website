import { useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

const destinations = [
  "Goa",
  "Bali",
  "Kashmir",
  "Swiss Alps",
  "Kyoto",
  "Ubud",
];

const tripTypes = [
  "Relaxing",
  "Adventure",
  "Culture",
  "Luxury",
];

function ContactPlanner() {
  const [formData, setFormData] = useState({
    destination: "",
    travelers: "2",
    tripType: "",
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.destination ||
      !formData.tripType ||
      !formData.name ||
      !formData.email
    ) {
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      destination: "",
      travelers: "2",
      tripType: "",
      name: "",
      email: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#e9eee8] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-4xl bg-[#17201c] text-white lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <div className="relative overflow-hidden p-8 sm:p-12 lg:p-14">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85')",
              }}
            />

            <div className="absolute inset-0 bg-linear-to-br from-[#17201c] via-[#17201c]/85 to-emerald-950/60" />

            <div className="relative flex h-full min-h-125 flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                  Your next chapter
                </p>

                <h2 className="mt-5 max-w-md font-display text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
                  Tell us where
                  <br />
                  <span className="italic text-emerald-300">you want to go.</span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
                  Give us a few details and imagine your next escape. No
                  commitment, just possibilities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-white/55">
                  <MapPin size={17} className="text-emerald-300" />
                  Handpicked destinations
                </div>

                <div className="flex items-center gap-3 text-sm text-white/55">
                  <Users size={17} className="text-emerald-300" />
                  Trips built around you
                </div>

                <div className="flex items-center gap-3 text-sm text-white/55">
                  <Mail size={17} className="text-emerald-300" />
                  A real response, not a robot
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-7 text-[#17201c] sm:p-10 lg:p-14">
            {submitted ? (
              <div className="flex min-h-125 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check size={28} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                  Request received
                </p>

                <h3 className="mt-4 font-display text-4xl sm:text-5xl">
                  Your next adventure
                  <br />
                  just got closer.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                  Thanks, {formData.name}. This demo form has successfully
                  captured your travel request.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold transition-colors hover:bg-slate-50"
                >
                  Plan another trip
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                    Plan your escape
                  </p>

                  <h3 className="mt-3 font-display text-4xl sm:text-5xl">
                    Let's make it happen.
                  </h3>
                </div>

                {/* Destination */}
                <div>
                  <label
                    htmlFor="destination"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Where are you dreaming of going?
                  </label>

                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                  >
                    <option value="">Choose a destination</option>

                    {destinations.map((destination) => (
                      <option key={destination} value={destination}>
                        {destination}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Travelers */}
                <div className="mt-6">
                  <label
                    htmlFor="travelers"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Who's travelling?
                  </label>

                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                  >
                    <option value="1">1 traveler</option>
                    <option value="2">2 travelers</option>
                    <option value="3">3 travelers</option>
                    <option value="4">4 travelers</option>
                    <option value="5+">5+ travelers</option>
                  </select>
                </div>

                {/* Trip Type */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What kind of trip?
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {tripTypes.map((type) => {
                      const isSelected = formData.tripType === type;

                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setFormData((current) => ({
                              ...current,
                              tripType: type,
                            }))
                          }
                          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                            isSelected
                              ? "border-[#17201c] bg-[#17201c] text-white"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Kishor"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#17201c] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  Start planning
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Demo form · No real booking or payment is processed
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPlanner;