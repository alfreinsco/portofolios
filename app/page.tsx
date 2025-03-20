"use client"

import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeSection from "./home";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { getData } from "./utils/data";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("semua");
  const [activeSection, setActiveSection] = useState("beranda");
  const [isVisible, setIsVisible] = useState({
    stats: false,
    services: false,
    portfolio: false,
    testimonials: false
  });
  
  // Ambil data dari database.json
  const data = getData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Cek visibilitas elemen saat scroll
      const stats = document.getElementById('stats');
      const services = document.getElementById('layanan');
      const portfolio = document.getElementById('portofolio');
      const testimonials = document.getElementById('testimonial');
      
      if (stats && isElementInViewport(stats)) setIsVisible(prev => ({...prev, stats: true}));
      if (services && isElementInViewport(services)) setIsVisible(prev => ({...prev, services: true}));
      if (portfolio && isElementInViewport(portfolio)) setIsVisible(prev => ({...prev, portfolio: true}));
      if (testimonials && isElementInViewport(testimonials)) setIsVisible(prev => ({...prev, testimonials: true}));

      // Deteksi section yang aktif
      const sections = [
        { id: 'beranda', element: document.getElementById('beranda') },
        { id: 'tentang', element: document.getElementById('tentang') },
        { id: 'layanan', element: document.getElementById('layanan') }, 
        { id: 'portofolio', element: document.getElementById('portofolio') },
        { id: 'testimonial', element: document.getElementById('testimonial') },
        { id: 'kontak', element: document.getElementById('kontak') }
      ];

      // Mendapatkan section yang aktif berdasarkan posisi scroll
      let currentSection = 'beranda';
      
      sections.forEach(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          // Section dianggap aktif jika bagian atasnya berada di 1/3 atas layar
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = section.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk cek apakah elemen terlihat di viewport
  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  };

  return (
    <div className="font-sans">
      {/* Header Component - Sekarang dengan activeSection */}
      <Header isScrolled={isScrolled} activeSection={activeSection} />

      {/* Hero Section Component */}
      <HomeSection profile={data.profile} />

      {/* Stats Section Component */}
      <StatsSection isVisible={isVisible.stats} stats={data.stats} />

      {/* About Section Component */}
      <AboutSection profile={data.profile} experience={data.experience} education={data.education} />

      {/* Services Section Component */}
      <ServicesSection isVisible={isVisible.services} services={data.services} />

      {/* Portfolio Section Component */}
      <PortfolioSection 
        isVisible={isVisible.portfolio} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        portfolioItems={data.portfolio.map(item => ({ ...item, link: '' }))}
      />

      {/* Testimonials Section Component */}
      {/* <TestimonialsSection isVisible={isVisible.testimonials} /> */}

      {/* Contact Section Component */}
      <ContactSection profile={data.profile} />

      {/* Footer Component */}
      <Footer profile={data.profile} />

      {/* Scroll to Top Button Component */}
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  );
}