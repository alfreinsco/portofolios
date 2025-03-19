"use client"

interface StatsSectionProps {
  isVisible: boolean;
}

export default function StatsSection({ isVisible }: StatsSectionProps) {
  return (
    <section id="stats" className="py-16 px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
            <div className="text-gray-600">Proyek Selesai</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Klien Puas</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Penghargaan</div>
          </div>
        </div>
      </div>
    </section>
  );
} 