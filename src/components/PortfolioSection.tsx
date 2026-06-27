"use client";

import { useEffect, useState } from "react";

interface PortfolioItem {
  title: string;
  desc: string;
  category: string;
  techs: string[];
  image: string;
  images?: string[];
  link: string;
  features: string[];
}

interface PortfolioSectionProps {
  isVisible: boolean;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  portfolioItems: PortfolioItem[];
}

function ModalImageGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [images, title]);

  const showImage = (direction: "prev" | "next") => {
    setActiveIndex((currentIndex) => {
      if (direction === "next") return (currentIndex + 1) % images.length;
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
          className="h-full w-full bg-slate-950 object-contain"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => showImage("prev")}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:left-4 sm:p-3"
            aria-label="Gambar sebelumnya"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => showImage("next")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:right-4 sm:p-3"
            aria-label="Gambar berikutnya"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-2xl bg-[#142331]/75 p-2 backdrop-blur sm:bottom-4 sm:max-w-[90%]">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-12 w-16 overflow-hidden rounded-xl border transition sm:h-14 sm:w-20 ${activeIndex === index ? "border-cyan-300 ring-2 ring-cyan-300/60" : "border-white/20 hover:border-white/80"}`}
                aria-label={`Tampilkan gambar ${index + 1}`}
              >
                <span className="sr-only">Gambar {index + 1}</span>
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function PortfolioSection({
  isVisible,
  activeCategory,
  setActiveCategory,
  portfolioItems,
}: PortfolioSectionProps) {
  const getProjectImages = (project: PortfolioItem) => {
    const images = project.images?.length ? project.images : [project.image];
    return images.filter(Boolean);
  };

  // State untuk modal detail proyek
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openProjectDetail = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Mencegah scroll pada body ketika modal terbuka
    document.body.style.overflow = "hidden";
  };

  // Fungsi untuk menutup modal
  const closeProjectDetail = () => {
    setIsModalOpen(false);
    // Mengaktifkan kembali scroll pada body
    document.body.style.overflow = "auto";
  };

  const filteredProjects =
    activeCategory === "semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);
  const displayedProjects = filteredProjects.slice(0, 3);

  const openAllProjectsPage = () => {
    window.location.href = "/portofolio";
  };

  return (
    <section
      id="portofolio"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-cyan-50/70 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className="section-eyebrow mb-3">Portofolio</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-black text-center">
            Proyek Terbaru
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full"></div>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2">
            Berikut adalah beberapa proyek terbaru yang telah saya kerjakan
            bersama klien dan tim.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          <button
            onClick={() => setActiveCategory("semua")}
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "semua" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`}
          >
            Semua
          </button>
          <button
            onClick={() => setActiveCategory("web")}
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "web" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveCategory("app")}
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "app" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`}
          >
            Aplikasi
          </button>
          <button
            onClick={() => setActiveCategory("design")}
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "design" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`}
          >
            Desain
          </button>
        </div>

        <div
          className={`space-y-5 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {displayedProjects.map((item, index) => (
            <article
              key={item.title}
              className="group grid overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-xl shadow-[#142331]/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15 lg:grid-cols-[300px_1fr]"
            >
              <div className="relative min-h-56 overflow-hidden lg:min-h-full">
                <img
                  src={getProjectImages(item)[0]}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142331]/75 via-transparent to-transparent"></div>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0575f5] shadow-lg backdrop-blur">
                  #{String(index + 1).padStart(2, "0")}
                </span>
                {getProjectImages(item).length > 1 && (
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#142331]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {getProjectImages(item).length} gambar
                  </span>
                )}
              </div>

              <div className="flex min-h-[280px] flex-col p-5 md:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-[#0575f5]">
                    {item.category === "web"
                      ? "Website"
                      : item.category === "app"
                        ? "Aplikasi"
                        : "Desain"}
                  </span>
                  {item.techs.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-black leading-snug text-[#142331] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base line-clamp-3">
                  {item.desc}
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.features.slice(0, 4).map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-2 rounded-2xl bg-cyan-50/70 p-3 text-sm text-gray-600"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#10c7ee]"></span>
                      <span className="line-clamp-2">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => openProjectDetail(item)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
                  >
                    Lihat Detail
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={openAllProjectsPage}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/85 px-6 py-3 font-bold text-[#0575f5] shadow-xl shadow-[#142331]/5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-cyan-500/20"
            >
              Lihat proyek lainnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4a1 1 0 110 2H6v10h8v-4a1 1 0 112 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm9-1a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Modal Detail Proyek */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 block h-dvh overflow-y-auto bg-[#142331]/75 p-3 backdrop-blur-md transition-all duration-300 sm:p-4"
          onClick={closeProjectDetail}
        >
          <div
            className="relative mx-auto my-3 flex w-full max-w-5xl flex-col rounded-[1.5rem] bg-white shadow-2xl shadow-[#142331]/40 sm:my-4 sm:rounded-[2rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#10c7ee]/25 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0575f5]/20 blur-3xl"></div>

            {(() => {
              const modalImages = getProjectImages(selectedProject);

              return (
                <ModalImageGallery
                  images={modalImages}
                  title={selectedProject.title}
                />
              );
            })()}

            <div className="relative min-w-0 bg-gradient-to-br from-[#142331] via-[#16344a] to-[#0575f5] p-5 text-white sm:p-6 md:p-8">
              <button
                onClick={closeProjectDetail}
                className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white/80 shadow-lg backdrop-blur transition hover:bg-white hover:text-[#142331]"
                aria-label="Tutup modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <span className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black text-cyan-100 backdrop-blur capitalize">
                {selectedProject.category === "web"
                  ? "Website"
                  : selectedProject.category === "app"
                    ? "Aplikasi"
                    : "Desain"}
              </span>
              <h3 className="break-words pr-10 text-2xl font-black leading-tight md:text-3xl">
                {selectedProject.title}
              </h3>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-cyan-50/90 md:text-base">
                {selectedProject.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.techs.slice(0, 5).map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-w-0 p-5 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-4">
                  <div className="rounded-3xl border border-cyan-100 bg-cyan-50/60 p-5">
                    <h4 className="text-sm font-black uppercase tracking-wide text-[#0575f5]">
                      Teknologi
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-white px-3 py-1 text-sm font-bold text-[#0575f5] shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5">
                    <h4 className="text-sm font-black uppercase tracking-wide text-[#142331]">
                      Kategori
                    </h4>
                    <p className="mt-3 text-lg font-black capitalize text-[#0575f5]">
                      {selectedProject.category === "web"
                        ? "Website"
                        : selectedProject.category === "app"
                          ? "Aplikasi"
                          : "Desain"}
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5 md:p-6">
                  <h4 className="text-lg font-black text-[#142331]">
                    Fitur Utama
                  </h4>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-gray-600"
                      >
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
                <button
                  onClick={closeProjectDetail}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Tutup
                </button>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kunjungi Proyek
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4a1 1 0 110 2H6v10h8v-4a1 1 0 112 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm9-1a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
