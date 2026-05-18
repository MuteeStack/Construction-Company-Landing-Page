"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope, FaArrowRight, FaQuoteLeft, FaHelmetSafety, FaScrewdriverWrench, FaRulerCombined } from "react-icons/fa6";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const leadership = [
  {
    name: "William Carter",
    role: "Founder & CEO",
    department: "Executive",
    experience: "28 years",
    bio: "Founded Building Construction Co. in 1998 with a vision of delivering construction projects defined by precision and integrity. William oversees all operations, strategic planning, and client relationships. Under his leadership, the company has grown from a 5-person crew to a 200+ strong organization managing $95M+ in annual project value.",
    specialties: ["Strategic Planning", "Client Relations", "Business Development"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "w.carter@buildingconstruction.co",
  },
  {
    name: "Marcus Thompson",
    role: "Chief Operations Officer",
    department: "Executive",
    experience: "22 years",
    bio: "Marcus manages day-to-day operations across all active project sites. He has a background in civil engineering and spent 12 years as a project director before joining the executive team. His systems-driven approach to resource allocation has improved on-time delivery rates from 85% to 98%.",
    specialties: ["Operations Management", "Resource Planning", "Process Optimization"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "m.thompson@buildingconstruction.co",
  },
  {
    name: "Richard Lawson",
    role: "VP of Construction",
    department: "Executive",
    experience: "24 years",
    bio: "Richard brings deep expertise in large-scale commercial and mixed-use construction. He leads all field operations and is responsible for safety compliance, quality assurance, and subcontractor management across the company's project portfolio. Previously a superintendent for a Fortune 500 construction firm.",
    specialties: ["Field Operations", "Safety Compliance", "Quality Assurance"],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
    email: "r.lawson@buildingconstruction.co",
  },
];

const teamMembers = [
  {
    name: "Anthony Reeves",
    role: "Senior Project Manager",
    department: "Project Management",
    experience: "15 years",
    bio: "Manages commercial and mixed-use projects from pre-construction through closeout. Specializes in complex multi-phase builds with tight urban site constraints.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Nathan Cole",
    role: "Senior Project Manager",
    department: "Project Management",
    experience: "13 years",
    bio: "Leads residential and education sector projects. Known for meticulous scheduling and maintaining transparent communication channels with all stakeholders.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Victor Hale",
    role: "Construction Superintendent",
    department: "Field Operations",
    experience: "18 years",
    bio: "Oversees day-to-day field operations on commercial sites. Coordinates trade crews, manages inspections, and enforces quality standards at every phase.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Raymond Foster",
    role: "Structural Engineer",
    department: "Engineering",
    experience: "12 years",
    bio: "Licensed PE specializing in structural analysis for steel and reinforced concrete frames. Reviews designs, conducts load calculations, and supports field teams during critical pours.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Daniel Mercer",
    role: "Estimator & Cost Analyst",
    department: "Pre-Construction",
    experience: "10 years",
    bio: "Prepares detailed cost estimates, conducts value engineering analyses, and manages procurement timelines. Ensures every bid is competitive and realistic.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Patrick Quinn",
    role: "Safety Director",
    department: "Health & Safety",
    experience: "16 years",
    bio: "OSHA-certified safety professional responsible for all site safety programs, incident prevention protocols, and compliance training across every active project.",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Kevin Barrett",
    role: "MEP Coordinator",
    department: "Engineering",
    experience: "11 years",
    bio: "Coordinates mechanical, electrical, and plumbing systems installation across commercial and healthcare projects. Expert in BIM clash detection and resolution.",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Terrence Walsh",
    role: "Site Foreman",
    department: "Field Operations",
    experience: "20 years",
    bio: "Veteran field leader who manages labor crews, coordinates daily task assignments, and maintains strict adherence to project schedules and safety requirements.",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
  {
    name: "Gregory Nash",
    role: "Quality Control Inspector",
    department: "Quality Assurance",
    experience: "14 years",
    bio: "Conducts inspections at every critical milestone using a 140+ point checklist. Documents findings with photos and ensures corrective actions are completed on time.",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=600&q=80",
    linkedin: "#",
  },
];

const departments = [
  { name: "All", count: 12 },
  { name: "Executive", count: 3 },
  { name: "Project Management", count: 2 },
  { name: "Field Operations", count: 2 },
  { name: "Engineering", count: 2 },
  { name: "Pre-Construction", count: 1 },
  { name: "Health & Safety", count: 1 },
  { name: "Quality Assurance", count: 1 },
];

export default function TeamPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filteredTeamMembers = activeDept === "All"
    ? teamMembers
    : teamMembers.filter(m => m.department === activeDept);

  return (
    <main className="min-h-screen bg-[#0f141c]">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#f2be2f]/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-900/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center reveal-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#f2be2f] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">The People Behind The Concrete</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Master Builders.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">Visionary Minds.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mx-auto max-w-2xl mb-10">
              We are a collective of engineers, designers, and project managers united by a single goal: turning ambitious blueprints into enduring realities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#leadership" className="px-8 py-4 bg-gradient-to-r from-[#f2be2f] to-[#e8aa00] text-[#0f141c] rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,190,47,0.3)] flex items-center gap-3">
                Meet The Leaders <FaArrowRight />
              </a>
              <a href="#join-us" className="px-8 py-4 border border-white/20 hover:border-[#f2be2f] text-white rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                Join Our Ranks
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Immersive Cards */}
      <section id="leadership" className="py-24 bg-[#141b24] relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
            <FaQuoteLeft className="text-4xl text-[#f2be2f]/30 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">The Executive Vanguard</h2>
            <p className="text-white/60 text-lg leading-relaxed">Guided by experience and driven by innovation, our leadership team sets the benchmark for quality and safety across every site we command.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <div key={leader.name} className="group relative rounded-[2.5rem] bg-[#1a2330] overflow-hidden border border-white/5 hover:border-[#f2be2f]/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] stagger-up flex flex-col" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-80 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-[#f2be2f]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2330] via-[#1a2330]/40 to-transparent z-20" />

                  <div className="absolute bottom-6 left-6 right-6 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="px-3 py-1.5 bg-[#f2be2f] text-[#0f141c] text-[0.65rem] font-black uppercase tracking-widest rounded-full">{leader.experience}</span>
                    <h3 className="text-3xl font-black text-white mt-4">{leader.name}</h3>
                    <p className="text-[#f2be2f] font-semibold mt-1">{leader.role}</p>
                  </div>
                </div>

                <div className="p-8 relative z-30 bg-[#1a2330] flex-1 flex flex-col">
                  <p className="text-white/60 leading-relaxed text-[0.95rem] mb-6 flex-1">{leader.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {leader.specialties.map(spec => (
                      <span key={spec} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/70">{spec}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <a href={leader.linkedin} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all">
                      <FaLinkedinIn />
                    </a>
                    <a href={`mailto:${leader.email}`} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#f2be2f] hover:border-[#f2be2f] hover:text-[#0f141c] transition-all">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Core Team Grid */}
      <section className="py-24 bg-[#0f141c] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] border border-white/5 rounded-full" />
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] border border-[#f2be2f]/10 rounded-full" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-up">
            <div>
              <p className="text-[#f2be2f] text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Specialists</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">The Core Crew</h2>
              <p className="text-white/60 text-lg max-w-xl">Every great structure relies on the strength of its individual parts. Meet the experts driving our projects forward.</p>
            </div>

            {/* Custom Sleek Filter */}
            <div className="relative shrink-0 w-full md:w-auto">
              <select
                value={activeDept}
                onChange={(e) => setActiveDept(e.target.value)}
                className="appearance-none w-full bg-[#1a2330] border border-white/10 text-white py-4 pl-6 pr-14 rounded-2xl font-bold focus:outline-none focus:border-[#f2be2f] focus:ring-1 focus:ring-[#f2be2f] cursor-pointer shadow-lg transition-colors"
              >
                {departments.map(dept => (
                  <option key={dept.name} value={dept.name}>{dept.name} ({dept.count})</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#f2be2f]">
                <FaArrowRight className="rotate-90" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTeamMembers.map((member, i) => (
              <div key={member.name} className="group relative h-[22rem] rounded-[2rem] overflow-hidden cursor-pointer stagger-up border border-white/5 hover:border-[#f2be2f]/50 transition-colors" style={{ animationDelay: `${i * 50}ms` }}>
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141c] via-[#0f141c]/50 to-transparent opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[0.6rem] font-bold text-[#f2be2f] uppercase tracking-widest bg-[#0f141c]/50 px-2 py-1 rounded-md backdrop-blur-sm">{member.department}</span>
                    <h3 className="text-xl font-black text-white mt-3 mb-1">{member.name}</h3>
                    <p className="text-white/70 text-sm font-medium">{member.role}</p>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-[0.65rem] text-white font-bold">{member.experience}</span>
                        <a href={member.linkedin} className="ml-auto w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] transition-colors"><FaLinkedinIn className="text-xs" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA / Careers */}
      <section id="join-us" className="py-32 bg-[#f2be2f] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0f141c 1px, transparent 1px), linear-gradient(90deg, #0f141c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal-up">
          <h2 className="text-5xl sm:text-7xl font-black text-[#0f141c] mb-8 tracking-tight">Ready to Build With The Best?</h2>
          <p className="text-xl text-[#0f141c]/70 font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            We are always searching for top-tier talent. If you have the grit, the expertise, and the vision, there's a hard hat waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="px-10 py-5 bg-[#0f141c] text-white rounded-2xl font-black text-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,20,28,0.3)] transition-all duration-300">
              View Open Positions
            </a>
            <a href="mailto:careers@buildingconstruction.co" className="px-10 py-5 bg-transparent border-2 border-[#0f141c] text-[#0f141c] rounded-2xl font-black text-lg hover:bg-[#0f141c] hover:text-white transition-all duration-300">
              Email Your Resume
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
