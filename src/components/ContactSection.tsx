"use client";

import { FormEvent } from "react";

interface ContactSectionProps {
  profile: any;
}

export default function ContactSection({ profile }: ContactSectionProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Ambil nilai dari form
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    // Format pesan untuk WhatsApp
    const whatsappMessage = `*Pesan dari Website*\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Buka WhatsApp dengan pesan yang sudah disiapkan
    window.open(`https://wa.me/6281318812027?text=${encodedMessage}`, "_blank");

    // Reset form
    form.reset();
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      url: profile.socialMedia.linkedin,
      icon: "/img/icons/linkedin.svg",
      label: "Kunjungi LinkedIn Alfreinsco",
    },
    {
      name: "GitHub",
      url: profile.socialMedia.github,
      icon: "/img/icons/github.svg",
      label: "Kunjungi GitHub Alfreinsco",
    },
    {
      name: "X",
      url: profile.socialMedia.twitter,
      icon: "/img/icons/x.svg",
      label: "Kunjungi X Alfreinsco",
    },
    {
      name: "Instagram",
      url: profile.socialMedia.instagram,
      icon: "/img/icons/instagram.svg",
      label: "Kunjungi Instagram Alfreinsco",
    },
    {
      name: "WhatsApp",
      url: profile.socialMedia.whatsapp,
      icon: "/img/icons/whatsapp.svg",
      label: "Hubungi Alfreinsco lewat WhatsApp",
    },
  ];


  return (
    <section
      id="kontak"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-white via-cyan-50 to-blue-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className="section-eyebrow mb-3">Kontak</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-black text-center">
            Hubungi Saya
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full"></div>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2">
            Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya dan
            diskusikan ide proyek Anda.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          <div className="md:w-1/2 glass-card rounded-3xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">
              Informasi Kontak
            </h3>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#0575f5] mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-1 text-gray-800">
                    Email
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    {profile.email}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Kirim email kapan saja!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#0575f5] mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-1 text-gray-800">
                    Telepon
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    {profile.phone}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Senin - Jumat: 09.00 - 17.00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#0575f5] mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-1 text-gray-800">
                    Lokasi
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    {profile.location}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Tersedia untuk meeting offline dan online
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">
              Ikuti Saya
            </h3>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shadow-cyan-900/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 md:h-10 md:w-10"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="h-5 w-5 object-contain"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 glass-card rounded-3xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base"
                    placeholder="Nama Anda"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base"
                    placeholder="email@gmail.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base"
                  placeholder="Subjek pesan"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white py-2.5 md:py-3 px-6 rounded-lg hover:shadow-lg transition-all font-medium text-sm md:text-base flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
                </svg>
                Kirim Pesan via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
