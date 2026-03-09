import { profile } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="section-line" />
            <p className="font-display text-xs tracking-[0.15em] text-[#00FFA3] uppercase mb-3">
              01 — À propos
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Architecte du front-end,
              <br />
              <span className="text-[#8892A4]">passionné de qualité.</span>
            </h2>
            <p className="font-body text-[#8892A4] leading-relaxed text-base mb-6">
              {profile.about}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["React", "TypeScript", "Next.js", "Lead Tech", "Performance", "Testing"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: terminal card */}
          <div className="relative">
            <div className="bg-[#0D1117] border border-[#1C2333] rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1C2333] bg-[#080B12]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-4 font-display text-xs text-[#4A5568]">~ profile.ts</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-display text-sm leading-7">
                <p>
                  <span className="text-[#6C8EF5]">const</span>{" "}
                  <span className="text-[#00FFA3]">developer</span>{" "}
                  <span className="text-[#8892A4]">= {"{"}</span>
                </p>
                <div className="pl-4">
                  <p>
                    <span className="text-[#8892A4]">name:</span>{" "}
                    <span className="text-[#F5A623]">&quot;Johann Zitouni&quot;</span>
                    <span className="text-[#8892A4]">,</span>
                  </p>
                  <p>
                    <span className="text-[#8892A4]">role:</span>{" "}
                    <span className="text-[#F5A623]">&quot;Senior Front-end Developer&quot;</span>
                    <span className="text-[#8892A4]">,</span>
                  </p>
                  <p>
                    <span className="text-[#8892A4]">experience:</span>{" "}
                    <span className="text-[#6C8EF5]">13</span>
                    <span className="text-[#8892A4]">, <span className="text-[#4A5568]">// années</span></span>
                  </p>
                  <p>
                    <span className="text-[#8892A4]">stack:</span>{" "}
                    <span className="text-[#8892A4]">[</span>
                  </p>
                  <div className="pl-4">
                    {["React", "TypeScript", "Next.js", "GraphQL", "Tailwind"].map((s) => (
                      <p key={s}>
                        <span className="text-[#F5A623]">&quot;{s}&quot;</span>
                        <span className="text-[#8892A4]">,</span>
                      </p>
                    ))}
                  </div>
                  <p><span className="text-[#8892A4]">],</span></p>
                  <p>
                    <span className="text-[#8892A4]">focus:</span>{" "}
                    <span className="text-[#F5A623]">&quot;Architecture & Performance&quot;</span>
                  </p>
                </div>
                <p><span className="text-[#8892A4]">{"}"}</span></p>
                <p className="mt-2 text-[#4A5568]">
                  <span className="text-[#00FFA3]">▶</span> Prêt pour de nouveaux défis
                </p>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#1C2333] rounded opacity-40 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-[#1C2333] rounded opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
