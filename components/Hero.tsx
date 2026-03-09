"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Senior Front-end Developer",
  "React & TypeScript Expert",
  "Lead Technique",
  "Next.js Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let i = typing ? 0 : role.length;

    const interval = setInterval(() => {
      if (typing) {
        i++;
        setDisplayed(role.slice(0, i));
        if (i >= role.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 2000);
        }
      } else {
        i--;
        setDisplayed(role.slice(0, i));
        if (i <= 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTyping(true);
        }
      }
    }, typing ? 60 : 35);

    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  return (
    <section className="relative min-h-screen grid-bg flex items-center overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,255,163,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Corner decoration */}
      <div className="absolute top-32 right-12 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#00FFA3" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#00FFA3" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="#00FFA3" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#00FFA3" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#00FFA3" strokeWidth="0.5" />
          <line x1="43" y1="43" x2="157" y2="157" stroke="#00FFA3" strokeWidth="0.5" />
          <line x1="157" y1="43" x2="43" y2="157" stroke="#00FFA3" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        {/* Pre-label */}
        <p className="animate-fade-up font-display text-xs tracking-[0.2em] text-[#00FFA3] uppercase mb-6">
          <span className="text-[#4A5568]">// </span>Bonjour, je suis
        </p>

        {/* Name */}
        <h1
          className="animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none tracking-tight"
          style={{ textShadow: "0 0 60px rgba(0,255,163,0.1)" }}
        >
          Johann
          <br />
          <span className="text-[#00FFA3]">Zitouni</span>
        </h1>

        {/* Animated role */}
        <div className="animate-fade-up delay-200 font-display text-lg md:text-2xl text-[#8892A4] mb-10 h-8 flex items-center gap-2">
          <span className="text-[#00FFA3]">{">"}</span>
          <span className="cursor">{displayed}</span>
        </div>

        {/* CTA */}
        <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFA3] text-[#080B12] font-display text-xs font-bold uppercase tracking-widest rounded hover:bg-[#00C896] transition-colors glow"
          >
            Voir mes projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1C2333] text-[#8892A4] font-display text-xs uppercase tracking-widest rounded hover:border-[#00FFA3] hover:text-[#00FFA3] transition-colors"
          >
            Me contacter
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up delay-400 mt-16 flex flex-wrap gap-8">
          {[
            { value: "13", label: "ans d'expérience" },
            { value: "25+", label: "sites gérés" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-3xl font-bold text-[#00FFA3]">{stat.value}</span>
              <span className="font-body text-xs text-[#4A5568] mt-1 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080B12] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="font-display text-[10px] tracking-widest text-[#4A5568] uppercase">Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4A5568" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
