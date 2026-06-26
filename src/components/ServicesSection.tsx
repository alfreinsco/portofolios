"use client"

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
  // Fungsi untuk mendapatkan icon berdasarkan nama icon
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'mobile':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'design':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'consultation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case 'server':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'support':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section id="layanan" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className="text-blue-600 font-medium mb-2">Layanan</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">Apa yang Saya Tawarkan</h2>
          <div className="w-16 md:w-20 h-1 bg-blue-600 mt-3 md:mt-4 rounded-full"></div>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2">
            Saya menawarkan berbagai layanan pengembangan web dan mobile dengan fokus pada kualitas, performa, dan pengalaman pengguna.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div key={index} className="bg-white p-5 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-blue-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 transition-all">
                <div className="group-hover:text-white transition-all">
                  {getIconComponent(service.icon)}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 