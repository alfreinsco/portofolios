"use client"

import Image from "next/image";

interface TestimonialsSectionProps {
  isVisible: boolean;
}

export default function TestimonialsSection({ isVisible }: TestimonialsSectionProps) {
  return (
    <section id="testimonial" className="py-24 px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 font-medium mb-2">Testimonial</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Apa Kata Klien</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600 text-center max-w-3xl">
            Berikut beberapa ulasan dari klien yang telah bekerja sama dengan saya dalam berbagai proyek.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
            <div className="absolute -top-5 right-8 text-6xl text-blue-200">"</div>
            <p className="text-gray-600 mb-6 relative z-10">
              Alfreinsco membantu kami membangun website e-commerce dengan tampilan yang modern dan fungsionalitas yang lengkap. Hasilnya melebihi ekspektasi kami, dan penjualan kami meningkat signifikan!
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image 
                  src="/img/testimonial1.jpg" 
                  alt="Sarah Johnson" 
                  width={48} 
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-800">Sarah Johnson</div>
                <div className="text-sm text-gray-500">CEO, Fashion Store</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
            <div className="absolute -top-5 right-8 text-6xl text-blue-200">"</div>
            <p className="text-gray-600 mb-6 relative z-10">
              Kami sangat terkesan dengan desain UI/UX yang dibuat Alfreinsco untuk aplikasi mobile kami. Pengguna kami memberikan feedback positif tentang kemudahan penggunaan dan tampilan yang menarik.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image 
                  src="/img/testimonial2.jpg" 
                  alt="Michael Chen" 
                  width={48} 
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-800">Michael Chen</div>
                <div className="text-sm text-gray-500">CTO, Health App</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
            <div className="absolute -top-5 right-8 text-6xl text-blue-200">"</div>
            <p className="text-gray-600 mb-6 relative z-10">
              Alfreinsco adalah partner yang tepat dalam pengembangan website kami. Responsif, komunikatif, dan selalu memberikan solusi kreatif untuk setiap tantangan yang kami hadapi.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image 
                  src="/img/testimonial3.jpg" 
                  alt="Amanda Torres" 
                  width={48} 
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-800">Amanda Torres</div>
                <div className="text-sm text-gray-500">Marketing Director, EduTech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 