"use client"

import Image from "next/image";

interface AboutSectionProps {
  profile: any;
  experience: any[];
  education: any[];
}

export default function AboutSection({ profile, experience, education }: AboutSectionProps) {
  // Fungsi untuk menangani download CV
  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Jika CV belum tersedia, cegah default action dan tampilkan pesan
    if (!process.env.NEXT_PUBLIC_CV_URL) {
      e.preventDefault();
      alert('CV akan segera tersedia!');
    }
    // Jika CV tersedia, biarkan default action (download) berjalan
  };

  return (
    <section id="tentang" className="py-24 px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 font-medium mb-2">Tentang</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Mengenal Saya Lebih Dekat</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden flex-shrink-0 border-8 border-white shadow-2xl z-10 relative">
                <Image 
                  src="/img/marthin1.jpg" 
                  alt="Foto Profil" 
                  width={320} 
                  height={320}
                  className="object-cover"
                />
              </div>
              <div className="absolute w-full h-full top-5 left-5 border-8 border-blue-600 rounded-2xl -z-10"></div>
              
              <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 ">100%</div>
                  <div className="text-xs text-gray-500">Kepuasan Klien</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Full Stack Developer & UI/UX Designer</h3>
            <p className="mb-4 text-gray-600">
              Halo! Saya adalah seorang pengembang web profesional dengan pengalaman lebih dari 5 tahun dalam industri teknologi. Saya menggabungkan keahlian teknis dengan pemahaman mendalam tentang desain UI/UX untuk menciptakan aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga indah secara visual.
            </p>
            <p className="mb-6 text-gray-600">
              Saya berdedikasi untuk membangun aplikasi yang berkualitas dan selalu berusaha untuk belajar teknologi baru. Pendekatan saya berfokus pada pengguna, memastikan setiap proyek yang saya kerjakan tidak hanya memenuhi kebutuhan bisnis tetapi juga memberikan pengalaman yang luar biasa bagi pengguna akhir.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Nama: <span className="font-medium">Alfreinsco</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Email: <span className="font-medium">alfreinsco@email.com</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Pendidikan: <span className="font-medium">Teknik Informatika</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Lokasi: <span className="font-medium">Jakarta, Indonesia</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Freelance: <span className="font-medium">Tersedia</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Bahasa: <span className="font-medium">Indonesia, Inggris</span></span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={process.env.NEXT_PUBLIC_CV_URL || '#'} 
                onClick={handleDownloadCV}
                download="/CV_Alfreinsco.pdf"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full transition-all font-medium shadow-lg hover:shadow-blue-500/30 hover:scale-105"
              >
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Keahlian Profesional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">Frontend Development</span>
                <span className="text-blue-600">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: "95%"}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">Backend Development</span>
                <span className="text-blue-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: "90%"}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">UI/UX Design</span>
                <span className="text-blue-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: "85%"}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">Mobile Development</span>
                <span className="text-blue-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 