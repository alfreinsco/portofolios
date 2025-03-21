"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

export default function Header({ isScrolled, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Tutup menu saat scroll
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isScrolled]);
  
  // Tutup menu saat klik link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  // Fungsi untuk scroll ke section tanpa mengubah URL
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault(); // Mencegah perilaku default anchor link
    
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll ke section dengan animasi smooth
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Tutup menu mobile jika terbuka
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="/" 
            onClick={(e) => scrollToSection(e, 'beranda')}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Alfreinsco
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a 
              href="#beranda" 
              onClick={(e) => scrollToSection(e, 'beranda')}
              className={`relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:scale-105 ${activeSection === 'beranda' ? 'text-blue-600 after:w-full' : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'}`}
            >
              Beranda
            </a>
            <a 
              href="#tentang" 
              onClick={(e) => scrollToSection(e, 'tentang')}
              className={`relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:scale-105 ${activeSection === 'tentang' ? 'text-blue-600 after:w-full' : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'}`}
            >
              Tentang
            </a>
            <a 
              href="#layanan" 
              onClick={(e) => scrollToSection(e, 'layanan')}
              className={`relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:scale-105 ${activeSection === 'layanan' ? 'text-blue-600 after:w-full' : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'}`}
            >
              Layanan
            </a>
            <a 
              href="#portofolio" 
              onClick={(e) => scrollToSection(e, 'portofolio')}
              className={`relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:scale-105 ${activeSection === 'portofolio' ? 'text-blue-600 after:w-full' : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'}`}
            >
              Portofolio
            </a>
            <a 
              href="#kontak" 
              onClick={(e) => scrollToSection(e, 'kontak')}
              className={`relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:scale-105 ${activeSection === 'kontak' ? 'text-blue-600 after:w-full' : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'}`}
            >
              Kontak
            </a>
            <a 
              href="#kontak" 
              onClick={(e) => scrollToSection(e, 'kontak')}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 px-6 rounded-full text-base transition-all hover:shadow-lg hover:scale-105 font-medium"
            >
              Hubungi Saya
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-6">
            <a 
              href="#beranda" 
              onClick={(e) => scrollToSection(e, 'beranda')}
              className={`text-lg font-medium ${activeSection === 'beranda' ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Beranda
            </a>
            <a 
              href="#tentang" 
              onClick={(e) => scrollToSection(e, 'tentang')}
              className={`text-lg font-medium ${activeSection === 'tentang' ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Tentang
            </a>
            <a 
              href="#layanan" 
              onClick={(e) => scrollToSection(e, 'layanan')}
              className={`text-lg font-medium ${activeSection === 'layanan' ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Layanan
            </a>
            <a 
              href="#portofolio" 
              onClick={(e) => scrollToSection(e, 'portofolio')}
              className={`text-lg font-medium ${activeSection === 'portofolio' ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Portofolio
            </a>
            <a 
              href="#kontak" 
              onClick={(e) => scrollToSection(e, 'kontak')}
              className={`text-lg font-medium ${activeSection === 'kontak' ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Kontak
            </a>
            <a 
              href="#kontak" 
              onClick={(e) => scrollToSection(e, 'kontak')}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-full transition-all text-center mt-2 hover:shadow-lg font-medium"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 