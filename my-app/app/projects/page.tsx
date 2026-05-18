"use client";

import { useState } from "react";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { FaArrowRight, FaFolderOpen } from "react-icons/fa";

const projects = [
  {
    title: "Downtown Office Block",
    category: "Commercial",
    status: "Completed",
    year: "2025",
    value: "$4.2M",
    duration: "14 months",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    text: "A 12-story commercial office complex featuring floor-to-ceiling glass facades, open-plan layouts, and integrated smart building systems. Delivered on schedule with zero safety incidents.",
  },
  {
    title: "Riverside Housing Complex",
    category: "Residential",
    status: "Completed",
    year: "2025",
    value: "$6.8M",
    duration: "18 months",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
    text: "A 48-unit residential development with energy-efficient HVAC systems, sustainable landscaping, and premium interior finishes. Achieved LEED Gold certification.",
  },
  {
    title: "Heritage Structure Rehabilitation",
    category: "Renovation",
    status: "Completed",
    year: "2024",
    value: "$2.1M",
    duration: "8 months",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    text: "Structural reinforcement and interior modernization of a 1920s landmark building. Preserved historical character while bringing all systems up to current code.",
  },
  {
    title: "Metro Transit Hub",
    category: "Infrastructure",
    status: "In Progress",
    year: "2026",
    value: "$12.5M",
    duration: "24 months",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    text: "A multimodal transit center integrating bus, rail, and pedestrian access with weather-protected platforms, digital wayfinding, and ADA-compliant pathways.",
  },
  {
    title: "Lakeside Medical Center",
    category: "Healthcare",
    status: "Completed",
    year: "2024",
    value: "$8.9M",
    duration: "20 months",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    text: "A state-of-the-art outpatient facility with 32 exam rooms, surgical suites, and advanced medical gas systems. Designed for infection control.",
  },
  {
    title: "Green Valley School Campus",
    category: "Education",
    status: "Completed",
    year: "2025",
    value: "$5.4M",
    duration: "16 months",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    text: "A K-8 campus featuring 24 classrooms, a gymnasium, and administrative building. Natural daylighting, acoustic panels, and flexible learning spaces.",
  },
  {
    title: "Harborfront Mixed-Use Tower",
    category: "Mixed-Use",
    status: "In Progress",
    year: "2026",
    value: "$18.2M",
    duration: "28 months",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
    text: "A 22-story mixed-use tower with ground-floor retail, 6 levels of premium office space, and 140 residential units above with underground parking.",
  },
  {
    title: "Industrial Warehouse Conversion",
    category: "Renovation",
    status: "Completed",
    year: "2024",
    value: "$3.6M",
    duration: "10 months",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    text: "Adaptive reuse of a 45,000 sq ft industrial warehouse into creative office and co-working space. Exposed structural elements and polished concrete floors.",
  },
  {
    title: "Parkside Community Center",
    category: "Public",
    status: "Completed",
    year: "2025",
    value: "$7.1M",
    duration: "15 months",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    text: "A public recreation facility with an indoor pool, fitness center, community rooms, and outdoor sports courts. Designed for LEED Platinum.",
  },
];

const categories = [
  "All",
  "Commercial",
  "Residential",
  "Renovation",
  "Infrastructure",
  "Healthcare",
  "Education",
  "Mixed-Use",
  "Public",
];

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    Commercial: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    Residential: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    Renovation: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    Infrastructure: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    Healthcare: "bg-red-500/10 text-red-300 border-red-500/20",
    Education: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    "Mixed-Use": "bg-teal-500/10 text-teal-300 border-teal-500/20",
    Public: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  };
  return colors[category] || "bg-white/10 text-white/80 border-white/20";
}

function getStatusColor(status: string) {
  return status === "In Progress"
    ? "bg-[#f2be2f]/20 text-[#f2be2f] border-[#f2be2f]/30"
    : "bg-white/10 text-white border-white/20";
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#0f141c]">
      <SiteHeader />

      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#f2be2f]/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-900/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#f2be2f] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Our Portfolio</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Projects & <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">Case Studies.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Browse our portfolio of completed and active construction
            projects spanning residential, commercial, healthcare, education,
            and public infrastructure.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
            {[
              ["120+", "Projects Delivered"],
              ["$95M+", "Total Value"],
              ["98%", "On-Time Rate"],
              ["0", "Safety Incidents"],
            ].map(([value, label]) => (
              <div key={label} className="p-4">
                <div className="text-3xl font-black text-[#f2be2f] mb-2">{value}</div>
                <div className="text-[0.65rem] font-bold text-white/50 uppercase tracking-[0.2em]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter - Premium Architecture Style */}
      <section className="relative z-40 mt-8 mb-4">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllProjects(false);
                }}
                className={`rounded-full px-6 py-3 text-[0.7rem] font-black uppercase tracking-[0.15em] transition-all duration-500 ${cat === activeCategory
                  ? "bg-[#f2be2f] text-[#0f141c] shadow-[0_10px_30px_rgba(242,190,47,0.3)] scale-105 border border-[#f2be2f]"
                  : "bg-[#1a2330]/80 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Dark Glassmorphism */}
      <section id="projects-grid" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center reveal-up">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#1a2330] border border-white/10 text-4xl mb-6 shadow-2xl">
              <FaFolderOpen className="text-white/20" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">No projects found</h3>
            <p className="max-w-md text-white/50 text-lg mb-8">
              No projects match the selected category. Try selecting a different
              category or view all projects.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="inline-flex h-12 items-center rounded-2xl bg-[#f2be2f] px-8 text-sm font-black text-[#0f141c] transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(242,190,47,0.2)]"
            >
              View All Projects
            </button>
          </div>
        ) : (
          <>
            <div className="stagger-up grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, i) => (
                <article
                  key={project.title}
                  className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-[#1a2330] border border-white/5 hover:border-[#f2be2f]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-72 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[#f2be2f]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2330] via-[#1a2330]/40 to-transparent z-20" />

                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-30">
                      <span className={`px-3 py-1.5 rounded-lg border text-[0.65rem] font-black uppercase tracking-widest backdrop-blur-md ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-3 py-1.5 rounded-lg border text-[0.65rem] font-black uppercase tracking-widest backdrop-blur-md ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 relative z-30 bg-[#1a2330] flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[0.65rem] font-bold text-white/50 uppercase tracking-widest mb-4">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-[#f2be2f]"></span>
                      <span>{project.duration}</span>
                      <span className="w-1 h-1 rounded-full bg-[#f2be2f]"></span>
                      <span className="text-[#f2be2f]">{project.value}</span>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-4 group-hover:text-[#f2be2f] transition-colors">
                      {project.title}
                    </h2>

                    <p className="leading-relaxed text-white/60 text-sm flex-1 mb-8">
                      {project.text}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                      <span className="text-sm font-bold text-white group-hover:text-[#f2be2f] transition-colors">
                        View Case Study
                      </span>
                      <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-[#f2be2f] group-hover:border-[#f2be2f] group-hover:text-[#0f141c] transition-all duration-300">
                        <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProjects.length > 6 && (
              <div className="mt-16 flex justify-center reveal-up">
                <button
                  type="button"
                  onClick={() => {
                    if (showAllProjects) {
                      const element = document.getElementById("projects-grid");
                      if (element) {
                        const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }
                    setShowAllProjects(!showAllProjects);
                  }}
                  className="inline-flex h-14 items-center rounded-2xl bg-white/5 border border-white/10 px-8 text-sm font-bold text-white hover:bg-white/10 hover:border-[#f2be2f] transition-all hover:-translate-y-1 shadow-lg backdrop-blur-md"
                >
                  {showAllProjects ? "Show Less Projects" : "Show More Projects"}
                </button>
              </div>
            )}
          </>
        )}

        {/* Result count */}
        <div className="mt-16 flex flex-col items-center gap-3 border-t border-white/5 pt-8 reveal-up">
          <p className="text-sm font-semibold text-white/40">
            Showing <span className="text-white">{visibleProjects.length}</span> of <span className="text-white">{filteredProjects.length}</span> projects
            {activeCategory !== "All" && (
              <span>
                {" "}
                in{" "}
                <span className="text-[#f2be2f]">
                  {activeCategory}
                </span>
              </span>
            )}
          </p>
        </div>
      </section>

      {/* CTA Section - Matching Team Page Aesthetic */}
      <section className="py-32 bg-[#f2be2f] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0f141c 1px, transparent 1px), linear-gradient(90deg, #0f141c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal-up">
          <h2 className="text-5xl sm:text-7xl font-black text-[#0f141c] mb-8 tracking-tight">Have a build in mind?</h2>
          <p className="text-xl text-[#0f141c]/70 font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your requirements, timeline, and budget. Our team
            will prepare a comprehensive proposal tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-[#0f141c] text-white rounded-2xl font-black text-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,20,28,0.3)] transition-all duration-300">
              Request a Quote
            </Link>
            <Link href="/services" className="px-10 py-5 bg-transparent border-2 border-[#0f141c] text-[#0f141c] rounded-2xl font-black text-lg hover:bg-[#0f141c] hover:text-white transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
