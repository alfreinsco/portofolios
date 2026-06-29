"use client"

interface StatsProps {
  isVisible: boolean;
  stats?: {
    projectsCompleted: number;
    happyClients: number;
    yearsExperience: number;
    awardsWon: number;
  };
}

const workHighlights = [
  {
    title: "Full Stack",
    description: "Web app, API, dan dashboard",
  },
  {
    title: "UI/UX",
    description: "Alur pengguna dan desain terarah",
  },
  {
    title: "Integrasi",
    description: "Sistem, database, dan layanan eksternal",
  },
  {
    title: "Maintenance",
    description: "Pengembangan lanjutan dan perbaikan fitur",
  },
];

export default function StatsSection({ isVisible }: StatsProps) {
  return (
    <section id="stats" className="relative overflow-hidden py-16 px-4 md:px-8 bg-gradient-to-r from-[#142331] via-[#0575f5] to-[#10c7ee] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {workHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur"
            >
              <div className="mb-2 text-2xl font-black md:text-3xl">
                {highlight.title}
              </div>
              <div className="text-sm leading-relaxed text-cyan-100">
                {highlight.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
