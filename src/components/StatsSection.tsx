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
    <section id="stats" className="py-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">{stats.projectsCompleted}+</div>
            <div className="text-blue-100">Proyek Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">{stats.happyClients}+</div>
            <div className="text-blue-100">Klien Puas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">{stats.yearsExperience}+</div>
            <div className="text-blue-100">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">{stats.awardsWon}</div>
            <div className="text-blue-100">Penghargaan</div>
          </div>
        </div>
      </div>
    </section>
  );
} 