"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHelmetSafety } from "react-icons/fa6";
import { mainNavLinks } from "./nav-links";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#1a2330]/92 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-90"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#f2be2f] to-[#e0a800] text-[#1a2330] shadow-[0_4px_16px_rgba(242,190,47,0.4)]">
            <FaHelmetSafety className="text-lg" />
          </span>
          <span className="leading-tight">
            Building
            <span className="block text-[0.6rem] font-semibold tracking-[0.45em] text-white/50">
              Construction Co.
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-[0.82rem] font-medium text-white/65 transition-all hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-[#f2be2f] to-[#e8aa00] px-6 text-[0.82rem] font-bold text-[#1a2330] shadow-[0_4px_20px_rgba(242,190,47,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(242,190,47,0.45)]"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="transition-transform"
              style={{ transform: mobileOpen ? "rotate(45deg)" : "none" }}
            >
              {mobileOpen ? (
                <>
                  <path d="M4 4l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M2 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 9h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#1a2330] px-4 pb-6 pt-4 lg:hidden reveal-up">
          <nav className="grid gap-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#f2be2f] to-[#e8aa00] text-sm font-bold text-[#1a2330] shadow-[0_4px_20px_rgba(242,190,47,0.3)]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
