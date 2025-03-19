"use client"

import Image from "next/image";

interface HomeProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function HomeSection({ onScrollToSection }: HomeProps) {
  return (
    <section id="beranda" className="pt-32 pb-20 px-8 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 inline-block w-fit text-sm font-semibold animate-pulse">✨ Tersedia untuk proyek baru</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-gray-800">
              Saya <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Alfreinsco</span>,
              <br/>
              <span className="relative">
                <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-blue-600 pr-1">Full Stack Developer</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl">
              Membangun <strong>aplikasi web</strong>, <strong>mobile</strong> dan <strong>desktop</strong> yang menarik dengan fokus pada pengalaman pengguna yang luar biasa dan performa tinggi. Menjadikan ide Anda menjadi kenyataan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portofolio" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full transition-all font-medium shadow-lg hover:shadow-blue-500/30">
                Lihat Karya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#kontak" className="inline-flex items-center gap-2 bg-transparent border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 py-3 px-8 rounded-full transition-all font-medium">
                Hubungi Saya
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 items-center">
              <div className="text-gray-600 font-medium">Tech Stack:</div>
              <div className="flex gap-4">
                <img src="/img/icons/react.svg" alt="React" className="h-8 w-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/img/icons/nextjs.svg" alt="Next.js" className="h-8 w-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/img/icons/node.svg" alt="Node.js" className="h-8 w-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/img/icons/typescript.svg" alt="TypeScript" className="h-8 w-8 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <Image 
                src="/img/marthin.png" 
                alt="Developer Hero" 
                width={600} 
                height={600}
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 