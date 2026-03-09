import { skills } from "@/data";

const CATEGORY_ICONS: Record<string, string> = {
  "Front-end": "◈",
  "State & Forms": "⟳",
  "Testing & Quality": "✓",
  "Backend & APIs": "⌥",
  "DevOps & Tools": "⚙",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(0,255,163,0.02) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="section-line" />
          <p className="font-display text-xs tracking-[0.15em] text-[#00FFA3] uppercase mb-3">
            03 — Compétences
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Stack technique
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-[#0D1117] border border-[#1C2333] rounded-xl p-6 hover:border-[#00FFA3]/20 transition-colors group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-display text-lg text-[#00FFA3] opacity-60 group-hover:opacity-100 transition-opacity">
                  {CATEGORY_ICONS[group.category] ?? "◆"}
                </span>
                <h3 className="font-display text-sm font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-display text-xs px-3 py-1.5 rounded border border-[#1C2333] text-[#8892A4] hover:border-[#00FFA3]/30 hover:text-[#00FFA3] transition-colors cursor-default"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.03em" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar — experience indicator */}
        <div className="mt-16 bg-[#0D1117] border border-[#1C2333] rounded-xl p-8">
          <p className="font-display text-xs tracking-[0.15em] text-[#4A5568] uppercase mb-6">
            Niveau d&apos;expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "React / Next.js / TypeScript", level: 95 },
              { label: "Architecture & Lead Tech", level: 88 },
              { label: "Testing & Performance", level: 82 },
            ].map(({ label, level }) => (
              <div key={label}>
                <div className="flex justify-between mb-2">
                  <span className="font-body text-sm text-[#8892A4]">{label}</span>
                  <span className="font-display text-xs text-[#00FFA3]">{level}%</span>
                </div>
                <div className="h-1 bg-[#1C2333] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${level}%`,
                      background: "linear-gradient(90deg, #00FFA3, #00C896)",
                      boxShadow: "0 0 8px rgba(0,255,163,0.4)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
