"use client"

interface StatsProps {
  isVisible: boolean;
  stats: {
    projectsCompleted: number;
    happyClients: number;
    yearsExperience: number;
    awardsWon: number;
  };
}

export default function StatsSection({ isVisible, stats }: StatsProps) {
  return (
    <section id="stats" className="relative overflow-hidden py-16 px-4 md:px-8 bg-gradient-to-r from-[#142331] via-[#0575f5] to-[#10c7ee] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur">
            <div className="text-4xl md:text-5xl font-black mb-2">{stats.projectsCompleted}+</div>
            <div className="text-cyan-100">Proyek Selesai</div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur">
            <div className="text-4xl md:text-5xl font-black mb-2">{stats.happyClients}+</div>
            <div className="text-cyan-100">Klien Puas</div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur">
            <div className="text-4xl md:text-5xl font-black mb-2">{stats.yearsExperience}+</div>
            <div className="text-cyan-100">Tahun Pengalaman</div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur">
            <div className="text-4xl md:text-5xl font-black mb-2">{stats.awardsWon}</div>
            <div className="text-cyan-100">Penghargaan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
