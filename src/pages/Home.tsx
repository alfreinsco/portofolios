"use client"

import { useState, useEffect } from "react";
import Header from "../components/Header";
import HomeSection from "../home";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import DeveloperActivitySection from "../components/DeveloperActivitySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { getData } from "../utils/data";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("semua");
  const [activeSection, setActiveSection] = useState("beranda");
  const [isVisible, setIsVisible] = useState({
    stats: false,
    services: false,
    portfolio: false,
    activity: false,
  });
  const data = getData();

  useEffect(() => {
    document.title = 'Marthin Alfreinsco Salakory | Software Engineer & Full Stack Developer';

    const description = 'Portofolio Marthin Alfreinsco Salakory, Software Engineer dan Full Stack Developer asal Ambon yang berfokus pada sistem informasi kampus, repository digital, dashboard admin, Laravel, React, Next.js, dan REST API.';
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', 'https://alfreinsco.vercel.app/');
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', 'https://alfreinsco.vercel.app/');

    if (window.location.hash) {
      const section = document.getElementById(window.location.hash.replace('#', ''));
      section?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Cek visibilitas elemen saat scroll
      const stats = document.getElementById('stats');
      const services = document.getElementById('layanan');
      const portfolio = document.getElementById('portofolio');
      const activity = document.getElementById('aktivitas');
      
      if (stats && isElementInViewport(stats)) setIsVisible(prev => ({...prev, stats: true}));
      if (services && isElementInViewport(services)) setIsVisible(prev => ({...prev, services: true}));
      if (portfolio && isElementInViewport(portfolio)) setIsVisible(prev => ({...prev, portfolio: true}));
      if (activity && isElementInViewport(activity)) setIsVisible(prev => ({...prev, activity: true}));

      // Deteksi section yang aktif
      const sections = [
        { id: 'beranda', element: document.getElementById('beranda') },
        { id: 'tentang', element: document.getElementById('tentang') },
        { id: 'layanan', element: document.getElementById('layanan') }, 
        { id: 'portofolio', element: document.getElementById('portofolio') },
        { id: 'aktivitas', element: document.getElementById('aktivitas') },
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

      <main>
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
        portfolioItems={data.portfolio}
      />

      <DeveloperActivitySection activity={data.developerActivity} />

      {/* Contact Section Component */}
      <ContactSection profile={data.profile} />
      </main>

      {/* Footer Component */}
      <Footer profile={data.profile} />

      {/* Scroll to Top Button Component */}
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  );
}
