"use client";

import Image from "next/image";

interface HomeProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    available: boolean;
  };
}

export default function HomeSection({ profile }: HomeProps) {
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
      className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
            {profile.available && (
              <div className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 inline-block w-fit text-sm font-semibold animate-pulse">
                ✨ Tersedia untuk proyek baru
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-gray-800">
              Saya{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {profile.name}
              </span>
              ,
              <br />
              <span className="relative">
                <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-blue-600 pr-1">
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
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 px-6 md:px-8 rounded-full transition-all font-medium shadow-lg hover:shadow-blue-500/30 text-sm md:text-base"
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
                className="inline-flex items-center gap-2 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 py-2 md:py-3 px-6 md:px-8 rounded-full transition-all font-medium text-sm md:text-base"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 items-center">
              <div className="text-gray-600 font-medium text-sm md:text-base">
                Tech Stack:
              </div>
              <div className="flex gap-3 md:gap-4">
                <img
                  src="/img/icons/react.svg"
                  alt="React"
                  className="h-6 w-6 md:h-8 md:w-8 grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="/img/icons/nextjs.svg"
                  alt="Next.js"
                  className="h-6 w-6 md:h-8 md:w-8 grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="/img/icons/node.svg"
                  alt="Node.js"
                  className="h-6 w-6 md:h-8 md:w-8 grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="/img/icons/typescript.svg"
                  alt="TypeScript"
                  className="h-6 w-6 md:h-8 md:w-8 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative z-10 animate-float max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <Image
                src="/img/marthin.jpeg"
                alt="Developer Hero"
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
            <div className="absolute top-0 right-0 -z-10 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-48 h-48 md:w-72 md:h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
