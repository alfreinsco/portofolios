"use client"

import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  category: string;
  techs: string[];
  image: string;
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
  
  const filteredProjects = activeCategory === "semua" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="portofolio" className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 font-medium mb-2">Portofolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Proyek Terbaru</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600 text-center max-w-3xl">
            Berikut adalah beberapa proyek terbaru yang telah saya kerjakan bersama klien dan tim.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button 
            onClick={() => setActiveCategory("semua")} 
            className={`px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "semua" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Semua
          </button>
          <button 
            onClick={() => setActiveCategory("web")} 
            className={`px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "web" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Web
          </button>
          <button 
            onClick={() => setActiveCategory("app")} 
            className={`px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "app" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Aplikasi
          </button>
          <button 
            onClick={() => setActiveCategory("design")} 
            className={`px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "design" ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white hover:bg-blue-100'}`}
          >
            Desain
          </button>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-indigo-600 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-95 transition-all duration-300 p-6">
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100 text-center mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {item.techs.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-white bg-opacity-20 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techs.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-1">
                  Lihat Detail
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 