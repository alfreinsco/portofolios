"use client"

import { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  category: string;
  techs: string[];
  image: string;
  features: string[];
}

interface PortfolioSectionProps {
  isVisible: boolean;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  portfolioItems: PortfolioItem[];
}

export default function PortfolioSection({ 
  isVisible, 
  activeCategory, 
  setActiveCategory, 
  portfolioItems 
}: PortfolioSectionProps) {
  
  // State untuk modal detail proyek
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Fungsi untuk membuka modal
  const openProjectDetail = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Mencegah scroll pada body ketika modal terbuka
    document.body.style.overflow = 'hidden';
  };
  
  // Fungsi untuk menutup modal
  const closeProjectDetail = () => {
    setIsModalOpen(false);
    // Mengaktifkan kembali scroll pada body
    document.body.style.overflow = 'auto';
  };
  
  const filteredProjects = activeCategory === "semua" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="portofolio" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className="text-blue-600 font-medium mb-2">Portofolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">Proyek Terbaru</h2>
          <div className="w-16 md:w-20 h-1 bg-blue-600 mt-3 md:mt-4 rounded-full"></div>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2">
            Berikut adalah beberapa proyek terbaru yang telah saya kerjakan bersama klien dan tim.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          <button 
            onClick={() => setActiveCategory("semua")} 
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "semua" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Semua
          </button>
          <button 
            onClick={() => setActiveCategory("web")} 
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "web" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Website
          </button>
          <button 
            onClick={() => setActiveCategory("app")} 
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "app" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Aplikasi
          </button>
          <button 
            onClick={() => setActiveCategory("design")} 
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "design" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Desain
          </button>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-indigo-600 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-95 transition-all duration-300 p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-blue-100 text-sm md:text-base text-center mb-3 md:mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
                    {item.techs.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-white bg-opacity-20 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-gray-800">{item.title}</h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {item.techs.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-2 md:px-3 py-0.5 md:py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <button 
                  onClick={() => openProjectDetail(item)}
                  className="text-blue-600 text-sm md:text-base font-medium hover:text-blue-700 transition-colors flex items-center gap-1"
                >
                  Lihat Detail
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal Detail Proyek dengan Background Semi-Transparan */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50 transition-all duration-300"
          onClick={closeProjectDetail}
        >
          <div 
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik di dalam modal
          >
            <div className="p-4 md:p-6 flex justify-between items-center border-b">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
              <button 
                onClick={closeProjectDetail}
                className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="overflow-y-auto flex-grow p-4 md:p-6">
              <div className="relative h-64 md:h-80 mb-6">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Deskripsi Proyek</h4>
                <p className="text-gray-600">{selectedProject.desc}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Teknologi</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techs.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Kategori</h4>
                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full capitalize">
                  {selectedProject.category === 'web' ? 'Website' : 
                   selectedProject.category === 'app' ? 'Aplikasi' : 'Desain'}
                </span>
              </div>
              
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Fitur Utama</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-4 md:p-6 border-t bg-gray-50">
              <div className="flex justify-end gap-3">
                <button 
                  onClick={closeProjectDetail}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Tutup
                </button>
                <a 
                  href="#" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kunjungi Proyek
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 