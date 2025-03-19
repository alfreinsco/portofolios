"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

export default function Header({ isScrolled, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['beranda', 'tentang', 'layanan', 'portofolio', 'kontak'];

  useEffect(() => {
    // Menutup menu mobile saat header di-scroll
    if (isScrolled && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isScrolled, isMobileMenuOpen]);

  // Menutup menu mobile ketika pengguna mengklik link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto max-w-6xl px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold relative"
          >
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Alfreinsco
            </span>
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item;
              return (
                <a 
                  key={item}
                  href={`#${item}`}
                  className={`capitalize font-medium transition-all relative 
                    ${isActive 
                      ? 'text-blue-500 after:w-full' 
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-500 after:w-0 hover:after:w-full' 
                        : 'text-gray-800 hover:text-blue-500 after:w-0 hover:after:w-full'
                    }
                    after:absolute after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 after:transition-all`}
                >
                  {item}
                </a>
              );
            })}
            
            <a 
              href="#kontak" 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-6 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 font-medium"
            >
              Hubungi Saya
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-gray-800"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'rotate-45 translate-y-2 bg-blue-400' 
                : 'bg-gray-800'
            }`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'opacity-0' 
                : 'bg-gray-800'
            }`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? '-rotate-45 -translate-y-2 bg-blue-400' 
                : 'bg-gray-800'
            }`}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'max-h-96 border-b border-gray-200' 
          : 'max-h-0 overflow-hidden'
      }`}>
        <div className="container mx-auto max-w-6xl px-8 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item;
              return (
                <a 
                  key={item}
                  href={`#${item}`}
                  onClick={handleLinkClick}
                  className={`capitalize font-medium transition-all border-b border-gray-100 pb-2 
                    ${isActive 
                      ? 'text-blue-500' 
                      : 'text-gray-700 hover:text-blue-500'
                    }`}
                >
                  {item}
                </a>
              );
            })}
            
            <a 
              href="#kontak" 
              onClick={handleLinkClick}
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