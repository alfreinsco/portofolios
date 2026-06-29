import { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { getData } from '../utils/data';

type PortfolioProject = ReturnType<typeof getData>['portfolio'][number];

const categories = [
  { key: 'semua', label: 'Semua' },
  { key: 'web', label: 'Website' },
  { key: 'app', label: 'Aplikasi' },
  { key: 'design', label: 'Desain' },
];

const getCategoryLabel = (category: string) => {
  if (category === 'web') return 'Website';
  if (category === 'app') return 'Aplikasi';
  return 'Desain';
};

const getProjectImages = (project: PortfolioProject) => {
  const images = project.images?.length ? project.images : [project.image];
  return images.filter(Boolean);
};

function ProjectImageSlider({ project, index }: { project: PortfolioProject; index: number }) {
  const images = getProjectImages(project);

  return (
    <div className="relative min-h-64 overflow-hidden lg:min-h-full">
      <img
        src={images[0]}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#142331]/70 via-transparent to-transparent"></div>
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0575f5] shadow-lg backdrop-blur">
        #{String(index + 1).padStart(2, '0')}
      </span>
      {images.length > 1 && (
        <span className="absolute bottom-4 right-4 rounded-full bg-[#142331]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          {images.length} gambar
        </span>
      )}
    </div>
  );
}

function ModalImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [images, title]);

  const showImage = (direction: 'prev' | 'next') => {
    setActiveIndex((currentIndex) => {
      if (direction === 'next') return (currentIndex + 1) % images.length;
      return (currentIndex - 1 + images.length) % images.length;
    });
  };

  if (!images.length) {
    return (
      <div className="flex h-[220px] w-full items-center justify-center border-b border-cyan-100 bg-slate-100 text-sm font-bold text-slate-500 sm:h-[300px] md:h-[420px]">
        Gambar proyek belum tersedia
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden border-b border-cyan-100 bg-white">
      <div className="h-[240px] sm:h-[320px] md:h-[460px]">
        <img
          src={images[activeIndex]}
          alt={`${title} ${activeIndex + 1}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full bg-slate-950 object-contain"
        />
      </div>

      {images.length > 1 && (
        <>
          <button type="button" onClick={() => showImage('prev')} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:left-4 sm:p-3" aria-label="Gambar sebelumnya">‹</button>
          <button type="button" onClick={() => showImage('next')} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:right-4 sm:p-3" aria-label="Gambar berikutnya">›</button>
          <div className="absolute bottom-3 left-1/2 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-2xl bg-[#142331]/75 p-2 backdrop-blur sm:bottom-4 sm:max-w-[90%]">
            {images.map((image, index) => (
              <button key={image} type="button" onClick={() => setActiveIndex(index)} className={`h-12 w-16 overflow-hidden rounded-xl border transition sm:h-14 sm:w-20 ${activeIndex === index ? 'border-cyan-300 ring-2 ring-cyan-300/60' : 'border-white/20 hover:border-white/80'}`} aria-label={`Tampilkan gambar ${index + 1}`}>
                <span className="sr-only">Gambar {index + 1}</span>
                <img src={image} alt={`${title} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Portfolio() {
  const data = getData();
  const [activeCategory, setActiveCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const [isScrolled] = useState(true);

  useEffect(() => {
    document.title = 'Daftar Proyek | Marthin Alfreinsco Salakory';

    const description = 'Daftar proyek Marthin Alfreinsco Salakory, Software Engineer dan Full Stack Developer asal Ambon untuk sistem kampus, website, aplikasi, dashboard admin, Laravel, React, REST API, dan deployment server.';
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    metaDescription?.setAttribute('content', description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute('href', 'https://alfreinsco.vercel.app/portofolio');

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    ogUrl?.setAttribute('content', 'https://alfreinsco.vercel.app/portofolio');

    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', 'Daftar Proyek | Marthin Alfreinsco Salakory');
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', 'Daftar Proyek | Marthin Alfreinsco Salakory');
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, []);

  const openProjectDetail = (project: PortfolioProject) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const copyPortfolioPrompt = async () => {
    const prompt = `Buatkan saya portofolio profesional untuk kebutuhan melamar kerja berdasarkan data berikut. Fokuskan pada nilai bisnis, impact, tech stack, tanggung jawab, dan hasil yang relevan untuk recruiter. Tulis dalam bahasa Indonesia yang profesional dan ringkas. Susun menjadi: ringkasan profil, highlight skill, daftar proyek unggulan, deskripsi tiap proyek dengan problem-solution-impact, dan versi singkat untuk CV/LinkedIn.\n\nData proyek:\n${JSON.stringify(data.portfolio, null, 2)}`;

    await navigator.clipboard.writeText(prompt);
    setCopyStatus('copied');
    window.setTimeout(() => setCopyStatus('idle'), 1800);
  };

  const stats = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      count: category.key === 'semua'
        ? data.portfolio.length
        : data.portfolio.filter((item) => item.category === category.key).length,
    }));
  }, [data.portfolio]);

  const projects = useMemo(() => {
    const keyword = searchQuery.trim().toLowerCase();

    return data.portfolio.filter((item) => {
      const categoryMatch = activeCategory === 'semua' || item.category === activeCategory;
      const searchMatch = !keyword || [
        item.title,
        item.desc,
        item.category,
        ...item.techs,
        ...item.features,
      ].join(' ').toLowerCase().includes(keyword);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, data.portfolio, searchQuery]);

  return (
    <div className="font-sans bg-[#f7fbff] text-[#142331]">
      <Header isScrolled={isScrolled} activeSection="portofolio" />

      <main className="min-h-screen pb-16">
        <section className="px-4 pb-6 pt-28 md:px-8 md:pt-36">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-eyebrow mb-3">Portofolio</span>
                <h1 className="section-title text-3xl font-black md:text-4xl">Daftar Proyek</h1>
              </div>
              <p className="text-sm font-semibold text-gray-500">Cari dan filter proyek sesuai kebutuhan.</p>
              <button
                type="button"
                onClick={copyPortfolioPrompt}
                className="w-fit rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-500 shadow-sm transition hover:border-cyan-100 hover:text-[#0575f5]"
              >
                {copyStatus === 'copied' ? 'Prompt disalin' : 'Copy prompt portfolio'}
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-card rounded-[2rem] p-4 md:p-5">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="relative">
                  <label htmlFor="portfolio-search" className="sr-only">Cari proyek portofolio</label>
                  <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  <input
                    id="portfolio-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Cari proyek, teknologi, fitur..."
                    className="w-full rounded-2xl border border-cyan-100 bg-white px-12 py-3.5 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    (() => {
                      const count = stats.find((item) => item.key === category.key)?.count || 0;

                      return (
                    <button
                      key={category.key}
                      type="button"
                      onClick={() => setActiveCategory(category.key)}
                      aria-pressed={activeCategory === category.key}
                      className={`rounded-full px-4 py-2 text-sm font-bold transition ${activeCategory === category.key ? 'bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-lg shadow-cyan-500/20' : 'bg-white text-gray-700 hover:bg-cyan-100'}`}
                    >
                      {category.label} <span className="ml-1 opacity-80">({count})</span>
                    </button>
                      );
                    })()
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-10 md:px-8 md:pt-12">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#0575f5]">{projects.length} proyek ditemukan</p>
                <h2 className="text-2xl font-black text-[#142331] md:text-3xl">Daftar Proyek</h2>
              </div>
              <a href="/" className="hidden rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-bold text-[#0575f5] shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50 sm:inline-flex">
                Kembali ke Beranda
              </a>
            </div>

            {projects.length > 0 ? (
              <div className="space-y-5">
                {projects.map((project, index) => (
                  <article key={project.title} className="group grid overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-xl shadow-[#142331]/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15 lg:grid-cols-[320px_1fr]">
                    <ProjectImageSlider project={project} index={index} />

                    <div className="flex min-h-[300px] flex-col p-5 md:p-7">
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-[#0575f5]">
                          {getCategoryLabel(project.category)}
                        </span>
                        {project.techs.slice(0, 5).map((tech) => (
                          <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-black leading-snug text-[#142331] md:text-2xl">{project.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base">{project.desc}</p>

                      <div className="mt-5 grid gap-2 sm:grid-cols-2">
                        {project.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex gap-2 rounded-2xl bg-cyan-50/70 p-3 text-sm text-gray-600">
                            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#10c7ee]"></span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-6">
                        <button
                          type="button"
                          onClick={() => openProjectDetail(project)}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
                        >
                          Lihat Detail
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-cyan-200 bg-white p-10 text-center shadow-xl shadow-[#142331]/5">
                <h3 className="text-2xl font-black text-[#142331]">Tidak ada proyek ditemukan</h3>
                <p className="mt-3 text-gray-600">Coba gunakan kata kunci atau kategori lain.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 block h-dvh overflow-y-auto bg-[#142331]/75 p-3 backdrop-blur-md sm:p-4"
          onClick={closeProjectDetail}
        >
          <div
            className="relative mx-auto my-3 flex w-full max-w-5xl flex-col rounded-[1.5rem] bg-white shadow-2xl shadow-[#142331]/40 sm:my-4 sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#10c7ee]/25 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0575f5]/20 blur-3xl"></div>

            {(() => {
              const modalImages = getProjectImages(selectedProject);

              return <ModalImageGallery images={modalImages} title={selectedProject.title} />;
            })()}

            <div className="relative min-w-0 bg-gradient-to-br from-[#142331] via-[#16344a] to-[#0575f5] p-5 text-white sm:p-6 md:p-8">
              <button
                type="button"
                onClick={closeProjectDetail}
                className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white/80 shadow-lg backdrop-blur transition hover:bg-white hover:text-[#142331]"
                aria-label="Tutup modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black text-cyan-100 backdrop-blur">
                {getCategoryLabel(selectedProject.category)}
              </span>
              <h3 className="break-words pr-10 text-2xl font-black leading-tight md:text-3xl">{selectedProject.title}</h3>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-cyan-50/90 md:text-base">{selectedProject.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.techs.slice(0, 5).map((tech) => (
                  <span key={tech} className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-w-0 p-5 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-4">
                  <div className="rounded-3xl border border-cyan-100 bg-cyan-50/60 p-5">
                    <h4 className="text-sm font-black uppercase tracking-wide text-[#0575f5]">Teknologi</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech) => (
                        <span key={tech} className="rounded-full bg-white px-3 py-1 text-sm font-bold text-[#0575f5] shadow-sm">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5">
                    <h4 className="text-sm font-black uppercase tracking-wide text-[#142331]">Kategori</h4>
                    <p className="mt-3 text-lg font-black text-[#0575f5]">{getCategoryLabel(selectedProject.category)}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5 md:p-6">
                  <h4 className="text-lg font-black text-[#142331]">Fitur Utama</h4>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <div key={feature} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-gray-600">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#10c7ee]"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative border-t border-cyan-100 bg-white/90 p-4 backdrop-blur md:p-6">
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={closeProjectDetail} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-bold text-slate-700 transition hover:bg-slate-50">
                  Tutup
                </button>
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40">
                    Kunjungi Proyek
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4a1 1 0 110 2H6v10h8v-4a1 1 0 112 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm9-1a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer profile={data.profile} />
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  );
}
