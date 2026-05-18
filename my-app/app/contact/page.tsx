"use client";

import { useState } from "react";
import { FaClock, FaEnvelope, FaHelmetSafety, FaLocationDot, FaPhone } from "react-icons/fa6";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFiles([]); // Reset files after submission
      // Optional: reset form here if using uncontrolled inputs or refs
    }, 1000);
  };
  return (
    <main className="min-h-screen bg-[#0f141c]">
      <SiteHeader />

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#f2be2f]/5 blur-[180px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-900/10 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#f2be2f] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">Contact Us</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">together.</span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-md mb-12">
              Share your project scope and timeline. Our pre-construction team will reply with recommended next steps, budget ranges, and detailed scheduling options.
            </p>

            <div className="space-y-6 text-sm text-white/80 font-medium">
              <p className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a2330] border border-white/5"><FaLocationDot className="text-[#f2be2f] text-xl shrink-0" />128 Construction Ave, New York, NY</p>
              <a href="tel:+15552108844" className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a2330] border border-white/5 hover:border-[#f2be2f]/30 transition-colors"><FaPhone className="text-[#f2be2f] text-xl shrink-0" />+1 (555) 210-8844</a>
              <a href="mailto:hello@buildingconstruction.co" className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a2330] border border-white/5 hover:border-[#f2be2f]/30 transition-colors"><FaEnvelope className="text-[#f2be2f] text-xl shrink-0" />hello@buildingconstruction.co</a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#f2be2f]/20 bg-gradient-to-br from-[#1a2330] to-[#0f141c] px-6 py-6 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">Response Time</p>
                <p className="mt-2 text-2xl font-black text-white">24 Hours</p>
              </div>
              <div className="rounded-3xl border border-[#f2be2f]/20 bg-gradient-to-br from-[#1a2330] to-[#0f141c] px-6 py-6 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">Active Sites</p>
                <p className="mt-2 text-2xl font-black text-[#f2be2f]">18 Ongoing</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/5 bg-[#1a2330]/50 backdrop-blur-md p-8">
              <p className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white">
                <FaClock className="text-[#f2be2f]" />
                Office Hours
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/60 font-medium">
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span><span className="text-white">8:00 AM - 6:00 PM</span></p>
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span><span className="text-white">9:00 AM - 2:00 PM</span></p>
                <p className="flex justify-between pt-1"><span>Emergency Support</span><span className="text-[#f2be2f]">24/7 Available</span></p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal-up delay-1 rounded-[3rem] border border-white/10 bg-[#1a2330] p-8 sm:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-black text-white mb-8">Project Inquiry Form</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Full name</label>
                <input required className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 text-white outline-none placeholder:text-white/20 focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all" placeholder="John Smith" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Email address</label>
                <input required type="email" className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 text-white outline-none placeholder:text-white/20 focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Phone number</label>
                <input className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 text-white outline-none placeholder:text-white/20 focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Project location</label>
                <input className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 text-white outline-none placeholder:text-white/20 focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all" placeholder="City, State" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Service required</label>
                <select className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 text-white outline-none focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all appearance-none cursor-pointer">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Renovation & Remodeling</option>
                  <option>Structural Repair</option>
                  <option>MEP Installation</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Estimated budget</label>
                <input className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 text-white outline-none placeholder:text-white/20 focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all" placeholder="$50k - $100k" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Expected start date</label>
                <input type="date" className="h-14 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 text-white outline-none focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all" style={{ colorScheme: 'dark' }} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Project details</label>
                <textarea required className="min-h-40 w-full rounded-2xl border border-white/10 bg-[#0f141c] px-5 py-4 text-white outline-none placeholder:text-white/20 focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] transition-all resize-none" placeholder="Scope, size, timeline, and any special requirements..." />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Attachments (Optional)</label>
                <div className="flex w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-[#0f141c] p-8 hover:bg-white/5 hover:border-[#f2be2f]/50 transition-colors group">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    multiple
                    onChange={(e) => {
                      if (e.target.files) {
                        setFiles(Array.from(e.target.files));
                      }
                    }}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer text-center">
                    <span className="block text-sm font-bold text-white group-hover:text-[#f2be2f] transition-colors">Click to upload files</span>
                    <span className="mt-2 block text-xs text-white/40">Plans, blueprints, or reference images (PDF, JPG, PNG)</span>
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0f141c] p-4">
                        <span className="truncate text-sm font-medium text-white">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                          className="ml-4 text-xs font-bold text-red-400 hover:text-red-300 transition-colors uppercase tracking-widest"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {isSubmitted && (
                <div className="sm:col-span-2 rounded-2xl bg-green-500/10 border border-green-500/20 p-5 text-center">
                  <p className="text-sm font-black text-green-400">Inquiry Sent Successfully!</p>
                  <p className="mt-1 text-sm text-green-400/80">Our team will contact you soon to discuss your project.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="mt-4 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#f2be2f] px-8 text-sm font-black uppercase tracking-widest text-[#0f141c] sm:col-span-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-[#e8aa00] hover:shadow-[0_10px_30px_rgba(242,190,47,0.3)] hover:-translate-y-1"
              >
                {isSubmitting ? "Sending..." : isSubmitted ? "Sent!" : "Send Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
