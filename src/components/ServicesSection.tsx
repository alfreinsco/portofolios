"use client"

import { FormEvent, useState } from "react";

interface Service {
  title: string;
  icon: string;
  description: string;
}

interface ServicesSectionProps {
  isVisible: boolean;
  services: Service[];
}

export default function ServicesSection({ isVisible, services }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const closeModal = () => setSelectedService(null);

  const handleServiceSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedService) return;

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const whatsappMessage = `*Permintaan Layanan dari Website*\n\nLayanan: ${selectedService.title}\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}\n\nCatatan layanan:\n${selectedService.description}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/6281318812027?text=${encodedMessage}`, "_blank");
    form.reset();
    closeModal();
  };

  // Fungsi untuk mendapatkan icon berdasarkan nama icon
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0575f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'mobile':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0575f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'design':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0575f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'consultation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0575f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case 'server':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0575f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'support':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0575f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0575f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section id="layanan" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-cyan-50/60">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className="section-eyebrow mb-3">Layanan</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-black text-center">Apa yang Saya Tawarkan</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full"></div>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2">
            Saya menawarkan berbagai layanan pengembangan web dan mobile dengan fokus pada kualitas, performa, dan pengalaman pengguna.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedService(service)}
              className="glass-card cursor-pointer p-5 md:p-8 rounded-3xl text-left transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-[#142331]/10 group-hover:scale-110 transition-all">
                <div className="group-hover:text-white transition-all">
                  {getIconComponent(service.icon)}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0575f5]">
                Konsultasikan layanan
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#142331]/70 px-4 py-6 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#142331]/30" onClick={(event) => event.stopPropagation()}>
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#10c7ee]/25 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#0575f5]/20 blur-3xl"></div>

            <div className="relative border-b border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 md:p-8">
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-5 top-5 rounded-full bg-white/80 p-2 text-gray-500 shadow-lg transition hover:text-[#142331]"
                aria-label="Tutup modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="section-eyebrow mb-4">Konsultasi Layanan</span>
              <h3 className="pr-10 text-2xl font-black text-[#142331] md:text-3xl">{selectedService.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">{selectedService.description}</p>
            </div>

            <form onSubmit={handleServiceSubmit} className="relative space-y-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-gray-700">Nama</span>
                  <input name="name" type="text" required placeholder="Nama lengkap" className="w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-gray-700">Email</span>
                  <input name="email" type="email" required placeholder="email@domain.com" className="w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100" />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-gray-700">Pesan</span>
                <textarea name="message" required rows={5} placeholder={`Halo, saya tertarik dengan layanan ${selectedService.title}. Saya ingin konsultasi tentang...`} className="w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100" />
              </label>

              <div className="rounded-2xl bg-cyan-50 p-4 text-sm text-gray-600">
                Pesan WhatsApp akan otomatis menyertakan layanan <span className="font-bold text-[#0575f5]">{selectedService.title}</span>, nama, email, dan pesan Anda.
              </div>

              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-6 py-3.5 font-bold text-white shadow-xl shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40">
                Kirim ke WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
