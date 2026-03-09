export default function Footer() {
  return (
    <footer className="border-t border-[#1C2333] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xs text-[#4A5568]">
          © {new Date().getFullYear()} Johann Zitouni — All rights reserved
        </span>
        <span className="font-display text-xs text-[#4A5568]">
          Built with{" "}
          <span className="text-[#00FFA3]">Next.js</span> ·{" "}
          <span className="text-[#00FFA3]">TypeScript</span> ·{" "}
          <span className="text-[#00FFA3]">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  );
}
