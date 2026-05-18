import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope, FaHelmetSafety, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { mainNavLinks } from "./nav-links";

const socialLinks = [
  { label: "X", href: "#", icon: FaXTwitter },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#0f141c] text-white overflow-hidden border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Top accent line */}
      <div className="relative z-10 h-1 w-full bg-gradient-to-r from-transparent via-[#f2be2f] to-transparent opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-white">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#f2be2f] to-[#e0a800] text-[#1a2330] shadow-[0_4px_16px_rgba(242,190,47,0.3)]">
                <FaHelmetSafety className="text-xl" />
              </span>
              <span className="leading-tight">
                Building
                <span className="block text-[0.6rem] font-semibold tracking-[0.45em] text-white/50">
                  Construction Co.
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-8 text-white/50">
              We deliver residential and commercial construction with reliable schedules, clear communication, and quality craftsmanship across the tri-state area.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/8 bg-white/[0.04] text-white/60 transition-all duration-300 hover:border-[#f2be2f]/30 hover:bg-[#f2be2f]/10 hover:text-[#f2be2f] hover:-translate-y-0.5"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#f2be2f]">Quick Links</h3>
            <nav className="mt-6 grid gap-3.5 text-sm">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#f2be2f]">Services</h3>
            <div className="mt-6 grid gap-3.5 text-sm">
              <Link href="/services" className="text-white/50 transition-colors hover:text-white">Residential Builds</Link>
              <Link href="/services" className="text-white/50 transition-colors hover:text-white">Commercial Projects</Link>
              <Link href="/services" className="text-white/50 transition-colors hover:text-white">Renovations</Link>
              <Link href="/projects" className="text-white/50 transition-colors hover:text-white">Field Operations</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#f2be2f]">Contact Us</h3>
            <div className="mt-6 grid gap-5 text-sm">
              <p className="flex items-start gap-3 text-white/50">
                <FaLocationDot className="mt-1 shrink-0 text-[#f2be2f]/70" />
                <span>128 Construction Ave, Suite 400<br />New York, NY 10001</span>
              </p>
              <a href="tel:+15552108844" className="flex items-center gap-3 text-white/50 transition-colors hover:text-white">
                <FaPhone className="shrink-0 text-[#f2be2f]/70" />
                +1 (555) 210-8844
              </a>
              <a href="mailto:hello@buildingconstruction.co" className="flex items-center gap-3 text-white/50 transition-colors hover:text-white">
                <FaEnvelope className="shrink-0 text-[#f2be2f]/70" />
                hello@buildingconstruction.co
              </a>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5 text-[0.7rem] font-semibold text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Mon – Sat: 8:00 AM – 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col gap-5 items-center justify-between sm:flex-row">
          <p className="text-xs text-white/30">© 2026 Building Construction Co. All rights reserved.</p>
          <div className="flex gap-8 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/25">
            <Link href="/contact" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
