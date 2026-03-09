"use client";

import { projects } from "@/data";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function ProjectPlaceholder({ color, title }: { color: string; title: string }) {
  return (
    <div
      className="w-full aspect-video rounded-lg flex items-center justify-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, #0D1117 0%, ${color}18 100%)` }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${color}15 1px, transparent 1px), linear-gradient(90deg, ${color}15 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      {/* Center icon */}
      <div className="relative flex flex-col items-center gap-2">
        <div
          className="w-12 h-12 rounded flex items-center justify-center"
          style={{ background: `${color}20`, border: `1px solid ${color}40` }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
        <span
          className="font-display text-[10px] tracking-widest uppercase"
          style={{ color: `${color}80` }}
        >
          {title}
        </span>
      </div>
      {/* Corner badge */}
      <div
        className="absolute top-3 right-3 font-display text-[9px] tracking-widest uppercase px-2 py-1 rounded"
        style={{
          background: `${color}10`,
          border: `1px solid ${color}30`,
          color: `${color}CC`,
        }}
      >
        Preview
      </div>
    </div>
  );
}

export default function Projects() {
  const [failedScreenshots, setFailedScreenshots] = useState<Record<string, boolean>>({});
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  const closeModal = () => setActiveProjectId(null);

  useEffect(() => {
    if (!activeProjectId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProjectId]);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,255,163,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="section-line" />
          <p className="font-display text-xs tracking-[0.15em] text-[#00FFA3] uppercase mb-3">
            02 — Projets
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Réalisations récentes
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="project-card bg-[#0D1117] border border-[#1C2333] rounded-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Screenshot placeholder */}
                <div className={`lg:col-span-2 p-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  {failedScreenshots[project.id] ? (
                    <ProjectPlaceholder color={project.color} title={project.title} />
                  ) : (
                    <button
                      type="button"
                      className="w-full text-left"
                      aria-label={`Agrandir l'aperçu du projet ${project.title}`}
                      onClick={() => setActiveProjectId(project.id)}
                    >
                      <div className="w-full aspect-video rounded-lg relative overflow-hidden">
                        <Image
                          src={`/screenshots/${project.id}.png`}
                          alt={project.title}
                          fill
                          className="object-cover"
                          onError={() =>
                            setFailedScreenshots((prev) => ({
                              ...prev,
                              [project.id]: true,
                            }))
                          }
                        />
                      </div>
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className={`lg:col-span-3 p-8 flex flex-col justify-between ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    {/* Company badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: project.color }}
                      />
                      <span className="font-display text-xs tracking-widest text-[#4A5568] uppercase">
                        {project.company}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>

                    <p className="font-body text-[#8892A4] text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#8892A4]">
                          <span className="text-[#00FFA3] mt-0.5 flex-shrink-0">›</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {"link" in project && project.link && (
                      <a
                        href={project.link as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-[#00FFA3] hover:text-white transition-colors"
                        style={{ borderBottom: `1px solid ${project.color}40` }}
                      >
                        Voir le projet
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    )}
                    {"links" in project &&
                      (project.links as { label: string; url: string }[]).map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-display text-xs uppercase tracking-wider text-[#4A5568] hover:text-[#00FFA3] transition-colors"
                        >
                          {l.label}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu du projet ${activeProject.title}`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Fermer la modale"
            onClick={closeModal}
          />

          <div className="relative w-full h-full flex items-center justify-center p-6">
            <div className="relative w-full max-w-5xl">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1C2333] bg-[#0D1117]">
                {failedScreenshots[activeProject.id] ? (
                  <ProjectPlaceholder color={activeProject.color} title={activeProject.title} />
                ) : (
                  <Image
                    src={`/screenshots/${activeProject.id}.png`}
                    alt={activeProject.title}
                    fill
                    className="object-contain"
                    priority
                    onError={() =>
                      setFailedScreenshots((prev) => ({
                        ...prev,
                        [activeProject.id]: true,
                      }))
                    }
                  />
                )}
              </div>

              <button
                type="button"
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#0D1117] border border-[#1C2333] text-white flex items-center justify-center"
                aria-label="Fermer"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
