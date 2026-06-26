import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { getData } from '../utils/data';

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

export default function Portfolio() {
  const data = getData();
  const [activeCategory, setActiveCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled] = useState(true);

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
        <section className="relative overflow-hidden bg-[#142331] px-4 pb-16 pt-32 text-white md:px-8 md:pb-20 md:pt-40">
          <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#10c7ee]/20 blur-3xl"></div>
          <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#0575f5]/25 blur-3xl"></div>
          <div className="absolute inset-0 opacity-20 soft-grid"></div>

          <div className="relative container mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
                  Portfolio Archive
                </span>
                <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Lihat bagaimana ide berubah menjadi produk digital yang nyata.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                  Dari sistem kampus, website bisnis, sampai aplikasi mobile—setiap proyek di sini dibuat untuk menyelesaikan masalah, mempercepat proses, dan memberi pengalaman yang lebih baik untuk pengguna.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm font-bold text-cyan-100">Ringkasan</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {stats.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setActiveCategory(item.key)}
                      className={`rounded-2xl p-4 text-left transition ${activeCategory === item.key ? 'bg-white text-[#142331]' : 'bg-white/10 text-white hover:bg-white/15'}`}
                    >
                      <span className="block text-2xl font-black">{item.count}</span>
                      <span className="text-sm font-semibold opacity-80">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-8 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-card rounded-[2rem] p-4 md:p-5">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Cari proyek, teknologi, fitur..."
                    className="w-full rounded-2xl border border-cyan-100 bg-white px-12 py-3.5 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      type="button"
                      onClick={() => setActiveCategory(category.key)}
                      className={`rounded-full px-4 py-2 text-sm font-bold transition ${activeCategory === category.key ? 'bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-lg shadow-cyan-500/20' : 'bg-white text-gray-700 hover:bg-cyan-100'}`}
                    >
                      {category.label}
                    </button>
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
                  <article key={project.id} className="group grid overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-xl shadow-[#142331]/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15 lg:grid-cols-[320px_1fr]">
                    <div className="relative min-h-64 overflow-hidden lg:min-h-full">
                      <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#142331]/70 via-transparent to-transparent"></div>
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0575f5] shadow-lg backdrop-blur">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

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
                        <a
                          href={project.link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
                        >
                          Kunjungi Proyek
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4a1 1 0 110 2H6v10h8v-4a1 1 0 112 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm9-1a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </a>
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

      <Footer profile={data.profile} />
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  );
}
