"use client";

interface FooterProps {
  profile: any;
}

export default function Footer({ profile }: FooterProps) {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault(); // Mencegah perilaku default anchor link

    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      url: profile.socialMedia?.linkedin || "https://linkedin.com/in/alfreinsco",
      icon: "/img/icons/linkedin.svg",
      label: "Kunjungi LinkedIn Alfreinsco",
    },
    {
      name: "GitHub",
      url: profile.socialMedia?.github || "https://github.com/alfreinsco",
      icon: "https://cdn.simpleicons.org/github/181717",
      label: "Kunjungi GitHub Alfreinsco",
    },
    {
      name: "X",
      url: profile.socialMedia?.twitter || "https://twitter.com/alfreinsco",
      icon: "https://cdn.simpleicons.org/x/000000",
      label: "Kunjungi X Alfreinsco",
    },
    {
      name: "Instagram",
      url: profile.socialMedia?.instagram || "https://instagram.com/alfreinsco_",
      icon: "https://cdn.simpleicons.org/instagram/E4405F",
      label: "Kunjungi Instagram Alfreinsco",
    },
    {
      name: "WhatsApp",
      url: profile.socialMedia?.whatsapp || "https://wa.me/6281318812027",
      icon: "https://cdn.simpleicons.org/whatsapp/25D366",
      label: "Hubungi Alfreinsco lewat WhatsApp",
    },
  ];

  return (
    <footer className="py-12 px-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/img/logo-alfreinsco-bawah.png"
              alt="Alfreinsco"
              className="mb-4 h-20 w-auto rounded-2xl bg-white/95 p-2 object-contain"
            />
            <p className="text-gray-400 mb-6">
              Menyediakan layanan pengembangan web dan mobile berkualitas tinggi
              untuk membantu bisnis Anda tumbuh di era digital.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
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

          <div>
            <h3 className="text-lg font-bold mb-4">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) =>
                    scrollToSection(
                      e as React.MouseEvent<HTMLAnchorElement>,
                      "beranda",
                    )
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  onClick={(e) =>
                    scrollToSection(
                      e as React.MouseEvent<HTMLAnchorElement>,
                      "tentang",
                    )
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) =>
                    scrollToSection(
                      e as React.MouseEvent<HTMLAnchorElement>,
                      "layanan",
                    )
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  onClick={(e) =>
                    scrollToSection(
                      e as React.MouseEvent<HTMLAnchorElement>,
                      "portofolio",
                    )
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#aktivitas"
                  onClick={(e) =>
                    scrollToSection(
                      e as React.MouseEvent<HTMLAnchorElement>,
                      "aktivitas",
                    )
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Aktivitas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Layanan</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Konsultasi Teknologi",
                "Backend Development",
                "Maintenance & Support",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    onClick={(e) => scrollToSection(e, "layanan")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mt-0.5"
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
                <span className="text-gray-400">alfreinsco@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mt-0.5"
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
                <span className="text-gray-400">+62 813 1881 2027</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mt-0.5"
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
                <span className="text-gray-400">Ambon, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Alfreinsco. Hak Cipta
              Dilindungi.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
