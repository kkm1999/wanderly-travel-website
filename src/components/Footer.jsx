import {
    ArrowUpRight,
    Camera,
    BriefcaseBusiness,
    Mail,
    MapPin,
  } from "lucide-react";
  const footerLinks = [
    { label: "Discover", href: "#discover" },
    { label: "Experiences", href: "#experiences" },
    { label: "About us", href: "#about" },
    { label: "Plan a trip", href: "#contact" },
  ];
  
  function Footer() {
    return (
      <footer className="bg-[#17201c] px-5 pb-6 pt-20 text-white sm:px-8 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer */}
          <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {/* Brand */}
            <div>
              <a
                href="#"
                className="inline-block font-display text-3xl tracking-tight"
              >
                wanderly<span className="text-emerald-300">.</span>
              </a>
  
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                Travel beyond the obvious. Discover places, experiences and
                moments worth remembering.
              </p>
  
              <a
                href="#contact"
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#17201c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                Plan your escape
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
  
            {/* Explore */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Explore
              </p>
  
              <div className="mt-5 flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Say hello
              </p>
  
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 text-sm text-white/55">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  hello@wanderly.demo
                </div>
  
                <div className="flex items-start gap-3 text-sm text-white/55">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  Somewhere worth exploring
                </div>
              </div>
  
              <div className="mt-7 flex gap-2">
                <a
                  href="#"
                  aria-label="Wanderly Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/25 hover:text-white"
                >
                  <Camera size={16} />
                </a>
  
                <a
                  href="#"
                  aria-label="Wanderly LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/25 hover:text-white"
                >
                  <BriefcaseBusiness size={16} />
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom */}
          <div className="flex flex-col gap-3 py-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Wanderly. Crafted for curious travelers.</p>
  
            <div className="flex gap-5">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Demo website</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;