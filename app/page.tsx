"use client"

import Image from "next/image";
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

  // Data portofolio
  const portfolioItems = [
    {id: 1, title: "Aplikasi E-commerce", desc: "Platform belanja online lengkap dengan pembayaran digital dan admin dashboard", category: "web", techs: ["React", "Node.js", "MongoDB"], image: "/project1-placeholder.jpg"},
    {id: 2, title: "Aplikasi Mobile Banking", desc: "Aplikasi perbankan modern dengan fitur transfer, pembayaran, dan investasi", category: "app", techs: ["Flutter", "Firebase", "REST API"], image: "/project2-placeholder.jpg"},
    {id: 3, title: "Dashboard Analytics", desc: "Dashboard interaktif untuk visualisasi data perusahaan", category: "web", techs: ["Vue.js", "D3.js", "Tailwind"], image: "/project3-placeholder.jpg"},
    {id: 4, title: "Logo & Branding Perusahaan", desc: "Desain identitas visual untuk startup teknologi", category: "design", techs: ["Figma", "Illustrator", "Photoshop"], image: "/project4-placeholder.jpg"},
    {id: 5, title: "Aplikasi Manajemen Proyek", desc: "Sistem manajemen proyek dengan fitur kanban dan timeline", category: "web", techs: ["Next.js", "GraphQL", "PostgreSQL"], image: "/project5-placeholder.jpg"},
    {id: 6, title: "UI/UX Website Pendidikan", desc: "Desain antarmuka untuk platform pembelajaran online", category: "design", techs: ["Figma", "Prototyping", "UX Research"], image: "/project6-placeholder.jpg"}
  ];

  return (
    <div className="font-sans">
      {/* Header Component - Sekarang dengan activeSection */}
      <Header isScrolled={isScrolled} activeSection={activeSection} />

      {/* Hero Section Component */}
      <HomeSection />

      {/* Stats Section Component */}
      <StatsSection isVisible={isVisible.stats} />

      {/* About Section Component */}
      <AboutSection />

      {/* Services Section Component */}
      <ServicesSection isVisible={isVisible.services} />

      {/* Portfolio Section Component */}
      <PortfolioSection 
        isVisible={isVisible.portfolio} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        portfolioItems={portfolioItems}
      />

      {/* Testimonials Section Component */}
      {/* <TestimonialsSection isVisible={isVisible.testimonials} /> */}

      {/* Contact Section Component */}
      <ContactSection />

      {/* Footer Component */}
      <Footer />

      {/* Scroll to Top Button Component */}
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  );
}