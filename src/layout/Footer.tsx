import React from "react";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#13110E] relative overflow-hidden">
      {/* ── Ambient decorative glow ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #B96727 0%, transparent 70%)",
        }}
      />

      {/* ═══════════════════════════════════════════
          TOP: Centered brand moment
          ═══════════════════════════════════════════ */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-12 text-center">
        {/* Decorative accent line */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-brand-accent/20" />
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
              <FaFireFlameCurved size={16} />
            </div>
            <span className="w-12 h-px bg-brand-accent/20" />
          </div>
        </div>

        {/* Large brand name — editorial serif */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl text-white mb-3 tracking-tight"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Bella Vista
        </h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#6D655C] font-medium mb-6">
          Ristorante Italiano &middot; Est. 2009 &middot; Austin, TX
        </p>
        <p className="text-[#8c847b] text-sm leading-relaxed max-w-md mx-auto italic">
          &ldquo;La vita è troppo breve per mangiare male.&rdquo;
        </p>
      </div>

      {/* ═══════════════════════════════════════════
          MIDDLE: Info strip — 3 cards with dividers
          ═══════════════════════════════════════════ */}
      <div className="border-y border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {/* Visit Us */}
            <div className="py-10 md:pr-10 lg:pr-14 group">
              <div className="flex items-center gap-2 mb-5">
                <svg
                  className="w-4 h-4 text-brand-accent/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#6D655C] font-bold">
                  Visit Us
                </h4>
              </div>
              <div className="text-white/80 text-sm leading-relaxed mb-3">
                123 Congress Ave
                <br />
                Austin, TX 78701
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-accent/70 hover:text-brand-accent text-xs font-medium transition-colors group"
              >
                Get directions
                <svg
                  className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>

            {/* Hours */}
            <div className="py-10 md:px-10 lg:px-14">
              <div className="flex items-center gap-2 mb-5">
                <svg
                  className="w-4 h-4 text-brand-accent/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#6D655C] font-bold">
                  Hours
                </h4>
              </div>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#6D655C]">Mon &ndash; Thu</span>
                  <span className="text-white/70 tabular-nums">
                    12 pm &ndash; 10 pm
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#6D655C]">Fri &ndash; Sat</span>
                  <span className="text-white/70 tabular-nums">
                    12 pm &ndash; 11 pm
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#6D655C]">Sunday</span>
                  <span className="text-white/70 tabular-nums">
                    12 pm &ndash; 9 pm
                  </span>
                </div>
                <div className="pt-2 mt-1 border-t border-white/[0.04]">
                  <span className="text-brand-accent/50 text-[10px] uppercase tracking-widest font-medium">
                    Last orders 30 min before close
                  </span>
                </div>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="py-10 md:pl-10 lg:pl-14">
              <div className="flex items-center gap-2 mb-5">
                <svg
                  className="w-4 h-4 text-brand-accent/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#6D655C] font-bold">
                  Get in Touch
                </h4>
              </div>
              <div className="space-y-2.5 text-sm mb-5">
                <a
                  href="tel:+15125550191"
                  className="flex items-center gap-2 text-white/70 hover:text-brand-accent transition-colors"
                >
                  (512) 555-0191
                </a>
                <a
                  href="mailto:ciao@bellavista.com"
                  className="flex items-center gap-2 text-white/70 hover:text-brand-accent transition-colors"
                >
                  ciao@bellavista.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-brand-accent/20 flex items-center justify-center text-[#6D655C] hover:text-brand-accent transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-brand-accent/20 flex items-center justify-center text-[#6D655C] hover:text-brand-accent transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-brand-accent/20 flex items-center justify-center text-[#6D655C] hover:text-brand-accent transition-all duration-300"
                  aria-label="X"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BOTTOM: Nav links + copyright
          ═══════════════════════════════════════════ */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quick nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["Menu", "Our Story", "Reviews", "Reservations", "Privacy"].map(
              (label) => {
                const href =
                  label === "Privacy"
                    ? "#"
                    : label === "Reservations"
                      ? "#cta"
                      : `#${label.toLowerCase().replace(" ", "-")}`;
                return (
                  <a
                    key={label}
                    href={href}
                    className="text-[#4a443d] hover:text-[#8c847b] text-xs transition-colors"
                  >
                    {label}
                  </a>
                );
              }
            )}
          </nav>

          {/* Copyright */}
          <div className="text-[#3a352f] text-[11px] flex items-center gap-1.5">
            &copy; 2026 Bella Vista
            <span className="text-brand-accent/30">&middot;</span>
            Crafted with
            <span className="text-brand-accent/40">&hearts;</span>
            in Austin
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
