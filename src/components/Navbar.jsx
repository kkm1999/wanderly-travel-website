import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const navLinks = [
  { label: "Discover", href: "#discover" },
  { label: "AI Planner", href: "#wanderly-ai" },
  { label: "About", href: "#about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        {/* Logo */}
        <a
          href="#"
          aria-label="Wanderly home"
          className="group flex items-center gap-2 text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition group-hover:bg-white/15">
            <Sparkles size={17} strokeWidth={1.8} />
          </span>

          <span className="text-lg font-bold tracking-tight">
            wanderly<span className="text-emerald-300">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-3 text-xs font-bold text-[#17201c] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-emerald-100 md:block"
        >
          Plan a trip
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mx-5 overflow-hidden rounded-2xl border border-white/10 bg-[#17201c]/95 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-xl px-4 py-3.5 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 block rounded-xl bg-white px-4 py-3.5 text-center text-sm font-bold text-[#17201c] transition hover:bg-emerald-100"
            >
              Plan a trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;