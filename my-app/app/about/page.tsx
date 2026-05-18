import { FaBuildingCircleCheck, FaClipboardCheck, FaHelmetSafety, FaShield } from "react-icons/fa6";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import CompaniesMarquee from "../components/companies-marquee";
import { FaCheckCircle, FaChartLine } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f141c]">
      <SiteHeader />

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#f2be2f]/5 blur-[180px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-900/10 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#f2be2f] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Our Story</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Forging The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">Future.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl mb-10">
                Building Construction Co. is a premium general contractor focused on high-end residential, commercial, and infrastructure projects. We deliver uncompromising quality through disciplined planning and precision engineering.
              </p>
            </div>

            <div className="relative h-[500px] hidden lg:block reveal-up delay-1">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" alt="Construction site" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141c] via-[#0f141c]/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute bottom-10 left-[-10%] bg-[#1a2330]/90 backdrop-blur-xl px-8 py-6 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">Est. 2012</div>
                <div className="text-[0.65rem] font-bold text-white/60 uppercase tracking-[0.2em] mt-2">A Decade of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values - Dark Glassmorphism */}
      <section className="py-16 relative z-20 -mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 stagger-up">
            {[
              { title: "Mission", desc: "Build reliable spaces that perform for decades and support long-term community growth.", icon: FaHelmetSafety },
              { title: "Vision", desc: "Set a new standard for quality execution, predictable delivery, and absolute client trust.", icon: FaChartLine },
              { title: "Values", desc: "Safety, transparency, teamwork, accountability, and pristine craftsmanship in every phase.", icon: FaShield },
            ].map((item, i) => (
              <div key={item.title} className="group relative rounded-3xl bg-[#1a2330] p-8 border border-white/5 hover:border-[#f2be2f]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="w-14 h-14 rounded-2xl bg-[#0f141c] flex items-center justify-center text-2xl text-[#f2be2f] mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">{item.title}</h2>
                <p className="leading-relaxed text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="reveal-up">
              <p className="text-[#f2be2f] text-xs font-bold uppercase tracking-[0.3em] mb-4">The Foundation</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">Who We Are</h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Since 2012, our team has delivered projects ranging from custom homes and multi-family buildings to office fit-outs and structural rehabilitation works. Our internal model combines project management, procurement, engineering coordination, and field supervision under one cohesive delivery team.
                </p>
                <p>
                  We partner exclusively with licensed trade partners, certified safety officers, and independent quality inspectors to ensure each project meets stringent contractual, code, and performance requirements.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  "Licensed general contractor",
                  "Dedicated HSE plans",
                  "QA/QC at every milestone",
                  "Transparent reporting",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#f2be2f] shrink-0" />
                    <span className="text-sm font-semibold text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 stagger-up delay-1">
              {[
                { title: "Safety First Culture", detail: "Daily toolbox talks, permit controls, and active prevention.", icon: FaHelmetSafety },
                { title: "Quality Assurance", detail: "Inspection and testing plans aligned with exact specs.", icon: FaClipboardCheck },
                { title: "Compliance", detail: "As-built records, warranties, and strict closeouts.", icon: FaShield },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5 p-6 rounded-3xl bg-[#1a2330]/50 border border-white/5 backdrop-blur-sm hover:bg-[#1a2330] transition-colors">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0f141c] text-[#f2be2f]">
                    <item.icon className="text-xl" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Snapshot Section */}
      <section className="py-24 bg-[#f2be2f] relative overflow-hidden text-[#0f141c]">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0f141c 1px, transparent 1px), linear-gradient(90deg, #0f141c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.3em] opacity-60 mb-4">Performance Metrics</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Company Snapshot</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-up">
            {[
              { value: "120+", label: "Projects Delivered", detail: "Residential & commercial since 2012." },
              { value: "18", label: "Active Sites", detail: "Running concurrent complex builds." },
              { value: "60+", label: "Skilled Experts", detail: "Engineers, managers, and safety officers." },
              { value: "98%", label: "On-Time Rate", detail: "Milestone-based scheduling." },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0f141c] text-white rounded-[2.5rem] p-8 hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                <div className="text-5xl font-black text-[#f2be2f] mb-4">{stat.value}</div>
                <div className="text-lg font-bold mb-3">{stat.label}</div>
                <div className="text-sm text-white/50 leading-relaxed border-t border-white/10 pt-4">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies We've Worked With */}
      <div className="bg-[#0f141c] py-20 border-t border-white/5">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f2be2f]">Trusted By Industry Leaders</p>
        </div>
        <CompaniesMarquee />
      </div>

      <SiteFooter />
    </main>
  );
}