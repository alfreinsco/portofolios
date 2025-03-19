"use client"

interface ScrollToTopButtonProps {
  isScrolled: boolean;
}

export default function ScrollToTopButton({ isScrolled }: ScrollToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:bg-blue-700 focus:outline-none ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      aria-label="Kembali ke atas"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
} 