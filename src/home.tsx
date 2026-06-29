"use client";


interface HomeProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    available: boolean;
  };
}

export default function HomeSection({ profile }: HomeProps) {
  const techStacks = [
    {
      name: "React",
      icon: "/img/icons/react.svg",
      url: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: "/img/icons/nextjs.svg",
      url: "https://nextjs.org/",
    },
    {
      name: "Node.js",
      icon: "/img/icons/node.svg",
      url: "https://nodejs.org/",
    },
    {
      name: "TypeScript",
      icon: "/img/icons/typescript.svg",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Laravel",
      icon: "/img/icons/laravel.svg",
      url: "https://laravel.com/",
    },
    {
      name: "Flutter",
      icon: "/img/icons/flutter.svg",
      url: "https://flutter.dev/",
    },
  ];

  // Fungsi untuk scroll ke section tanpa mengubah URL
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault(); // Mencegah perilaku default anchor link

    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll ke section dengan animasi smooth
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 min-h-screen flex items-center soft-grid"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>
      <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl animate-blob"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="relative flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
            {profile.available && (
              <div className="glass-card text-[#045fd0] rounded-full px-4 py-2 inline-flex w-fit items-center gap-2 text-sm font-semibold shadow-cyan-200/50">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.16)]"></span>
                ✨ Tersedia untuk proyek baru
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-gray-900">
              Saya{" "}
              <span className="bg-gradient-to-r from-[#10c7ee] to-[#0575f5] bg-clip-text text-transparent">
                {profile.name}
              </span>
              ,
              <br />
              <span className="relative">
                <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-[#0575f5] pr-1">
                  {profile.title}
                </span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#portofolio"
                onClick={(e) => scrollToSection(e, "portofolio")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white py-2.5 md:py-3.5 px-6 md:px-8 rounded-full transition-all font-semibold shadow-xl shadow-cyan-500/25 hover:-translate-y-1 hover:shadow-cyan-500/40 text-sm md:text-base"
              >
                Lihat Karya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#kontak"
                onClick={(e) => scrollToSection(e, "kontak")}
                className="inline-flex items-center gap-2 bg-white/70 border border-white text-gray-700 hover:border-cyan-200 hover:text-[#045fd0] py-2.5 md:py-3.5 px-6 md:px-8 rounded-full transition-all font-semibold text-sm md:text-base shadow-lg shadow-[#142331]/5 backdrop-blur hover:-translate-y-1"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 items-center">
              <div className="text-gray-600 font-medium text-sm md:text-base">
                Tech Stack:
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {techStacks.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka halaman resmi ${tech.name}`}
                    title={tech.name}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-9 w-9 rounded-2xl bg-white p-2 shadow-lg shadow-[#142331]/10 grayscale transition-all hover:-translate-y-1 hover:grayscale-0 md:h-11 md:w-11"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative z-10 animate-float max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-[2rem] bg-white/50 p-3 shadow-2xl shadow-[#142331]/20 backdrop-blur">
              <img
                src="/img/marthin.jpeg"
                alt="Developer Hero"
                width={600}
                height={600}
                className="rounded-[1.5rem] object-cover shadow-2xl"
                              />
            </div>
            <div className="absolute -top-6 right-6 -z-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-300 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
