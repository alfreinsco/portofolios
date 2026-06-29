import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useState, useEffect, useMemo } from "react";
function Header({ isScrolled, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isScrolled]);
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-white/85 shadow-lg shadow-[#142331]/5 backdrop-blur-xl border-b border-white/70" : "py-5 bg-transparent"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 md:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              onClick: (e) => scrollToSection(e, "beranda"),
              className: "flex items-center hover:scale-105 transition-transform",
              "aria-label": "Ke beranda Alfreinsco",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/img/logo-alfreinsco-kanan.png",
                  alt: "Alfreinsco",
                  className: "h-14 w-auto object-contain md:h-16 lg:h-18"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 rounded-full bg-white/50 px-4 py-2 shadow-sm shadow-[#142331]/5 backdrop-blur", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#beranda",
                onClick: (e) => scrollToSection(e, "beranda"),
                className: `relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#0575f5] after:transition-all hover:scale-105 ${activeSection === "beranda" ? "text-[#0575f5] after:w-full" : "text-gray-700 hover:text-[#0575f5] after:w-0 hover:after:w-full"}`,
                children: "Beranda"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#tentang",
                onClick: (e) => scrollToSection(e, "tentang"),
                className: `relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#0575f5] after:transition-all hover:scale-105 ${activeSection === "tentang" ? "text-[#0575f5] after:w-full" : "text-gray-700 hover:text-[#0575f5] after:w-0 hover:after:w-full"}`,
                children: "Tentang"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#layanan",
                onClick: (e) => scrollToSection(e, "layanan"),
                className: `relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#0575f5] after:transition-all hover:scale-105 ${activeSection === "layanan" ? "text-[#0575f5] after:w-full" : "text-gray-700 hover:text-[#0575f5] after:w-0 hover:after:w-full"}`,
                children: "Layanan"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#portofolio",
                onClick: (e) => scrollToSection(e, "portofolio"),
                className: `relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#0575f5] after:transition-all hover:scale-105 ${activeSection === "portofolio" ? "text-[#0575f5] after:w-full" : "text-gray-700 hover:text-[#0575f5] after:w-0 hover:after:w-full"}`,
                children: "Portofolio"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#aktivitas",
                onClick: (e) => scrollToSection(e, "aktivitas"),
                className: `relative font-medium text-base transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#0575f5] after:transition-all hover:scale-105 ${activeSection === "aktivitas" ? "text-[#0575f5] after:w-full" : "text-gray-700 hover:text-[#0575f5] after:w-0 hover:after:w-full"}`,
                children: "Aktivitas"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#kontak",
                onClick: (e) => scrollToSection(e, "kontak"),
                className: "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white py-2.5 px-6 rounded-full text-base transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-105 font-semibold",
                children: "Hubungi Saya"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "md:hidden text-gray-700 focus:outline-none rounded-2xl bg-white/70 p-2 shadow-lg shadow-[#142331]/10 backdrop-blur",
              onClick: () => setIsMenuOpen(!isMenuOpen),
              "aria-label": isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
              "aria-controls": "mobile-navigation",
              "aria-expanded": isMenuOpen,
              children: isMenuOpen ? /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                }
              ) : /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16"
                    }
                  )
                }
              )
            }
          )
        ] }),
        isMenuOpen && /* @__PURE__ */ jsx(
          "div",
          {
            id: "mobile-navigation",
            className: "md:hidden fixed inset-0 bg-white/95 z-40 pt-24 px-6 transition-all duration-300 ease-in-out transform backdrop-blur-xl",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#beranda",
                  onClick: (e) => scrollToSection(e, "beranda"),
                  className: `text-lg font-medium ${activeSection === "beranda" ? "text-[#0575f5]" : "text-gray-700"}`,
                  children: "Beranda"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#tentang",
                  onClick: (e) => scrollToSection(e, "tentang"),
                  className: `text-lg font-medium ${activeSection === "tentang" ? "text-[#0575f5]" : "text-gray-700"}`,
                  children: "Tentang"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#layanan",
                  onClick: (e) => scrollToSection(e, "layanan"),
                  className: `text-lg font-medium ${activeSection === "layanan" ? "text-[#0575f5]" : "text-gray-700"}`,
                  children: "Layanan"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#portofolio",
                  onClick: (e) => scrollToSection(e, "portofolio"),
                  className: `text-lg font-medium ${activeSection === "portofolio" ? "text-[#0575f5]" : "text-gray-700"}`,
                  children: "Portofolio"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#aktivitas",
                  onClick: (e) => scrollToSection(e, "aktivitas"),
                  className: `text-lg font-medium ${activeSection === "aktivitas" ? "text-[#0575f5]" : "text-gray-700"}`,
                  children: "Aktivitas"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#kontak",
                  onClick: (e) => scrollToSection(e, "kontak"),
                  className: "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white py-3 px-6 rounded-full transition-all text-center mt-2 hover:shadow-lg font-medium",
                  children: "Hubungi Saya"
                }
              )
            ] })
          }
        )
      ] })
    }
  );
}
function HomeSection({ profile: profile2 }) {
  const techStacks = [
    {
      name: "React",
      icon: "/img/icons/react.svg",
      url: "https://react.dev/"
    },
    {
      name: "Laravel",
      icon: "/img/icons/laravel.svg",
      url: "https://laravel.com/"
    },
    {
      name: "Flutter",
      icon: "/img/icons/flutter.svg",
      url: "https://flutter.dev/"
    },
    {
      name: "Next.js",
      icon: "/img/icons/nextjs.svg",
      url: "https://nextjs.org/"
    }
  ];
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "beranda",
      className: "relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 min-h-screen flex items-center soft-grid",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-24 top-32 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl animate-blob" }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col md:flex-row gap-10 md:gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 flex flex-col gap-4 md:gap-6", children: [
            profile2.available && /* @__PURE__ */ jsxs("div", { className: "glass-card text-[#045fd0] rounded-full px-4 py-2 inline-flex w-fit items-center gap-2 text-sm font-semibold shadow-cyan-200/50", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.16)]" }),
              "✨ Tersedia untuk proyek baru"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-gray-900", children: [
              "Saya",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] bg-clip-text text-transparent", children: profile2.name }),
              ",",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "relative", children: /* @__PURE__ */ jsx("span", { className: "inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-[#0575f5] pr-1", children: profile2.title }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl", children: profile2.bio }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 md:gap-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#portofolio",
                  onClick: (e) => scrollToSection(e, "portofolio"),
                  className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white py-2.5 md:py-3.5 px-6 md:px-8 rounded-full transition-all font-semibold shadow-xl shadow-cyan-500/25 hover:-translate-y-1 hover:shadow-cyan-500/40 text-sm md:text-base",
                  children: [
                    "Lihat Karya",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 md:h-5 md:w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#kontak",
                  onClick: (e) => scrollToSection(e, "kontak"),
                  className: "inline-flex items-center gap-2 bg-white/70 border border-white text-gray-700 hover:border-cyan-200 hover:text-[#045fd0] py-2.5 md:py-3.5 px-6 md:px-8 rounded-full transition-all font-semibold text-sm md:text-base shadow-lg shadow-[#142331]/5 backdrop-blur hover:-translate-y-1",
                  children: "Hubungi Saya"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-[auto_1fr] items-start gap-3 md:mt-8 md:gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "pt-1.5 text-sm font-medium text-gray-600 md:text-base", children: "Tech Stack:" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: techStacks.map((tech) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: tech.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Buka halaman resmi ${tech.name}`,
                  title: tech.name,
                  className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-md shadow-[#142331]/10 transition-all hover:-translate-y-0.5 hover:text-[#0575f5] hover:shadow-cyan-900/10 md:px-3 md:text-sm",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: tech.icon,
                        alt: tech.name,
                        className: "h-4 w-4 object-contain md:h-5 md:w-5"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { children: tech.name })
                  ]
                },
                tech.name
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 relative mt-8 md:mt-0", children: [
            /* @__PURE__ */ jsx("div", { className: "relative z-10 animate-float h-[22rem] max-w-xs sm:h-[26rem] sm:max-w-sm md:h-[30rem] md:max-w-md mx-auto rounded-[2rem] bg-white/50 p-3 shadow-2xl shadow-[#142331]/20 backdrop-blur", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/img/optimized/marthin.webp",
                alt: "Developer Hero",
                width: 600,
                height: 760,
                fetchPriority: "high",
                className: "h-full w-full rounded-[1.5rem] object-cover object-[65%_center] shadow-2xl"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-6 right-6 -z-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-300 rounded-full filter blur-3xl opacity-50 animate-blob" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -z-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full filter blur-3xl opacity-50 animate-blob" })
          ] })
        ] }) })
      ]
    }
  );
}
function StatsSection({ isVisible, stats: stats2 }) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsx("section", { id: "stats", className: "relative overflow-hidden py-16 px-4 md:px-8 bg-gradient-to-r from-[#142331] via-[#0575f5] to-[#10c7ee] text-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: `relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-5xl font-black mb-2", children: [
        stats2.projectsCompleted,
        "+"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "font-semibold text-cyan-50", children: "Project Solved" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-cyan-100", children: (_a = stats2.descriptions) == null ? void 0 : _a.projectsCompleted })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-5xl font-black mb-2", children: [
        stats2.happyClients,
        "+"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "font-semibold text-cyan-50", children: "Client" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-cyan-100", children: (_b = stats2.descriptions) == null ? void 0 : _b.happyClients })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-5xl font-black mb-2", children: [
        stats2.yearsExperience,
        "+"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "font-semibold text-cyan-50", children: "Tahun Pengalaman" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-cyan-100", children: (_c = stats2.descriptions) == null ? void 0 : _c.yearsExperience })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-white/15 bg-white/10 p-6 text-center shadow-xl shadow-[#142331]/10 backdrop-blur", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-black mb-2", children: stats2.awardsWon }),
      /* @__PURE__ */ jsx("div", { className: "font-semibold text-cyan-50", children: "Partnership" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-cyan-100", children: (_d = stats2.descriptions) == null ? void 0 : _d.awardsWon })
    ] })
  ] }) }) });
}
function AboutSection({
  profile: profile2,
  experience: experience2,
  education: education2
}) {
  const [cvPromptStatus, setCvPromptStatus] = useState(
    "idle"
  );
  const professionalSkills = [
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "/img/icons/javascript.svg"
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: "/img/icons/typescript.svg"
    },
    { name: "React.js", url: "https://react.dev/", icon: "/img/icons/react.svg" },
    { name: "Next.js", url: "https://nextjs.org/", icon: "/img/icons/nextjs.svg" },
    { name: "Node.js", url: "https://nodejs.org/", icon: "/img/icons/node.svg" },
    {
      name: "Express.js",
      url: "https://expressjs.com/",
      icon: "/img/icons/express.svg"
    },
    {
      name: "HTML/CSS",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
      icon: "/img/icons/html5.svg"
    },
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/",
      icon: "/img/icons/tailwindcss.svg"
    },
    { name: "PHP", url: "https://www.php.net/", icon: "/img/icons/php.svg" },
    { name: "Laravel", url: "https://laravel.com/", icon: "/img/icons/laravel.svg" },
    {
      name: "CodeIgniter",
      url: "https://codeigniter.com/",
      icon: "/img/icons/codeigniter.svg"
    },
    { name: "Flutter", url: "https://flutter.dev/", icon: "/img/icons/flutter.svg" },
    { name: "Dart", url: "https://dart.dev/", icon: "/img/icons/dart.svg" },
    {
      name: "UI/UX Design",
      url: "https://www.interaction-design.org/literature/topics/ux-design",
      icon: "/img/icons/figma.svg"
    },
    { name: "Figma", url: "https://www.figma.com/", icon: "/img/icons/figma.svg" },
    {
      name: "Git & GitHub",
      url: "https://github.com/",
      icon: "/img/icons/github.svg"
    },
    {
      name: "REST API",
      url: "https://restfulapi.net/",
      icon: "/img/icons/swagger.svg"
    },
    {
      name: "Database Design",
      url: "https://www.postgresql.org/docs/current/ddl.html",
      icon: "/img/icons/postgresql.svg"
    },
    {
      name: "MySQL/PostgreSQL",
      url: "https://www.postgresql.org/",
      icon: "/img/icons/postgresql.svg"
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com/",
      icon: "/img/icons/firebase.svg"
    },
    { name: "Docker", url: "https://www.docker.com/", icon: "/img/icons/docker.svg" },
    {
      name: "AWS/Netlify/Vercel",
      url: "https://vercel.com/",
      icon: "/img/icons/vercel.svg"
    }
  ];
  const handleCopyCvPrompt = async () => {
    const prompt = `Buatkan CV profesional dalam bahasa Indonesia berdasarkan profil berikut. Susun dengan format ringkas, ATS-friendly, dan cocok untuk melamar posisi Full Stack Developer atau UI/UX Designer. Sertakan ringkasan profil, keahlian utama, pengalaman, pendidikan, proyek relevan, tools/teknologi, dan versi singkat untuk LinkedIn.

Profil:
${JSON.stringify(profile2, null, 2)}

Pengalaman:
${JSON.stringify(experience2, null, 2)}

Pendidikan:
${JSON.stringify(education2, null, 2)}`;
    await navigator.clipboard.writeText(prompt);
    setCvPromptStatus("copied");
    window.setTimeout(() => setCvPromptStatus("idle"), 2e3);
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "tentang",
      className: "py-20 md:py-24 px-4 md:px-8 bg-gradient-to-br from-white to-cyan-50/70",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-16", children: [
          /* @__PURE__ */ jsx("span", { className: "section-eyebrow mb-3", children: "Tentang" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title text-3xl md:text-4xl font-black text-center", children: "Mengenal Saya Lebih Dekat" }),
          /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-4 rounded-full" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-12 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "md:w-2/5", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "w-64 h-80 md:w-80 md:h-[28rem] rounded-[2rem] overflow-hidden flex-shrink-0 border-8 border-white bg-gradient-to-b from-white to-cyan-50 shadow-2xl shadow-[#142331]/20 z-10 relative", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/img/optimized/marthin-about.webp",
                alt: "Foto Profil",
                width: 320,
                height: 448,
                loading: "lazy",
                decoding: "async",
                className: "h-full w-full scale-110 object-cover object-[center_18%]"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full top-5 left-5 border-8 border-[#0575f5] rounded-2xl -z-10" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-cyan-100 rounded-full p-2", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6 text-[#0575f5]",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-700 ", children: "100%" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Kepuasan Klien" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "md:w-3/5", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Full Stack Developer & UI/UX Designer" }),
            /* @__PURE__ */ jsx("p", { className: "mb-4 text-gray-600", children: "Halo! Saya adalah seorang pengembang web profesional dengan pengalaman lebih dari 5 tahun dalam industri teknologi. Saya menggabungkan keahlian teknis dengan pemahaman mendalam tentang desain UI/UX untuk menciptakan aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga indah secara visual." }),
            /* @__PURE__ */ jsx("p", { className: "mb-6 text-gray-600", children: "Saya berdedikasi untuk membangun aplikasi yang berkualitas dan selalu berusaha untuk belajar teknologi baru. Pendekatan saya berfokus pada pengguna, memastikan setiap proyek yang saya kerjakan tidak hanya memenuhi kebutuhan bisnis tetapi juga memberikan pengalaman yang luar biasa bagi pengguna akhir." }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-[#0575f5]",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
                  "Nama: ",
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Alfreinsco" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-[#0575f5]",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
                  "Email:",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "alfreinsco@gmail.com" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-[#0575f5]",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
                  "Pendidikan:",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Teknik Informatika" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-[#0575f5]",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
                  "Lokasi: ",
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Ambon, Indonesia" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-[#0575f5]",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
                  "Freelance: ",
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Tersedia" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 text-[#0575f5]",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
                  "Bahasa:",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Indonesia, Inggris" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: handleCopyCvPrompt,
                className: "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:border-cyan-200 hover:bg-cyan-50 hover:text-[#0575f5]",
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 20 20",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1.8,
                          d: "M4 13.5V16h12v-2.5M6.5 7.5 10 4m0 0 3.5 3.5M10 4v9"
                        }
                      )
                    }
                  ),
                  cvPromptStatus === "copied" ? "Prompt CV disalin" : "Buat prompt CV"
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6 text-center text-gray-800", children: "Keahlian Profesional" }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-cyan-100 bg-white/80 p-6 shadow-lg shadow-cyan-900/5", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: professionalSkills.map((skill) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: skill.url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Buka website resmi ${skill.name}`,
                className: "inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/80 px-4 py-2 text-sm font-medium text-[#0575f5] transition-all hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-md hover:shadow-cyan-900/10",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: skill.icon,
                      alt: "",
                      className: "h-4 w-4 rounded-sm object-contain",
                      loading: "lazy"
                    }
                  ),
                  skill.name
                ]
              },
              skill.name
            )) }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-gray-500", children: "Keahlian yang digunakan secara fleksibel sesuai kebutuhan proyek, mulai dari perancangan antarmuka, pengembangan aplikasi, integrasi API, hingga pengelolaan database." })
          ] })
        ] })
      ] })
    }
  );
}
function ServicesSection({ isVisible, services: services2 }) {
  const [selectedService, setSelectedService] = useState(null);
  const closeModal = () => setSelectedService(null);
  const handleServiceSubmit = (event) => {
    event.preventDefault();
    if (!selectedService) return;
    const form = event.currentTarget;
    const name = form.elements.namedItem("name").value;
    const email = form.elements.namedItem("email").value;
    const message = form.elements.namedItem("message").value;
    const whatsappMessage = `*Permintaan Layanan dari Website*

Layanan: ${selectedService.title}
Nama: ${name}
Email: ${email}

Pesan:
${message}

Catatan layanan:
${selectedService.description}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6281318812027?text=${encodedMessage}`, "_blank");
    form.reset();
    closeModal();
  };
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "code":
        return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-[#0575f5]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }) });
      case "mobile":
        return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-[#0575f5]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" }) });
      case "design":
        return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-[#0575f5]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" }) });
      case "consultation":
        return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-[#0575f5]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }) });
      case "server":
        return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-[#0575f5]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" }) });
      case "support":
        return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-[#0575f5]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }) });
      default:
        return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-[#0575f5]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) });
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "layanan", className: "py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-cyan-50/60", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-10 md:mb-16", children: [
        /* @__PURE__ */ jsx("span", { className: "section-eyebrow mb-3", children: "Layanan" }),
        /* @__PURE__ */ jsx("h2", { className: "section-title text-2xl sm:text-3xl md:text-4xl font-black text-center", children: "Apa yang Saya Tawarkan" }),
        /* @__PURE__ */ jsx("div", { className: "w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2", children: "Saya menawarkan berbagai layanan pengembangan web dan mobile dengan fokus pada kualitas, performa, dan pengalaman pengguna." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`, children: services2.map((service, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSelectedService(service),
          className: "glass-card cursor-pointer p-5 md:p-8 rounded-3xl text-left transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 focus:outline-none focus:ring-4 focus:ring-cyan-100",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-[#142331]/10 group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsx("div", { className: "group-hover:text-white transition-all", children: getIconComponent(service.icon) }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600", children: service.description }),
            /* @__PURE__ */ jsxs("span", { className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0575f5]", children: [
              "Konsultasikan layanan",
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 transition-transform group-hover:translate-x-1", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ] })
          ]
        },
        index
      )) })
    ] }),
    selectedService && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#142331]/70 px-4 py-6 backdrop-blur-sm md:items-center", onClick: closeModal, children: /* @__PURE__ */ jsxs("div", { className: "relative my-2 max-h-[calc(100vh-3rem)] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl shadow-[#142331]/30", onClick: (event) => event.stopPropagation(), children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#10c7ee]/25 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#0575f5]/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative border-b border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 md:p-8", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: closeModal,
            className: "absolute right-5 top-5 rounded-full bg-white/80 p-2 text-gray-500 shadow-lg transition hover:text-[#142331]",
            "aria-label": "Tutup modal",
            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "section-eyebrow mb-4", children: "Konsultasi Layanan" }),
        /* @__PURE__ */ jsx("h3", { className: "pr-10 text-2xl font-black text-[#142331] md:text-3xl", children: selectedService.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-gray-600 md:text-base", children: selectedService.description })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleServiceSubmit, className: "relative space-y-5 p-6 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsx("span", { className: "mb-2 block text-sm font-bold text-gray-700", children: "Nama" }),
            /* @__PURE__ */ jsx("input", { name: "name", type: "text", autoComplete: "name", required: true, placeholder: "Nama lengkap", className: "w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsx("span", { className: "mb-2 block text-sm font-bold text-gray-700", children: "Email" }),
            /* @__PURE__ */ jsx("input", { name: "email", type: "email", autoComplete: "email", required: true, placeholder: "email@domain.com", className: "w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-2 block text-sm font-bold text-gray-700", children: "Pesan" }),
          /* @__PURE__ */ jsx("textarea", { name: "message", required: true, rows: 5, placeholder: `Halo, saya tertarik dengan layanan ${selectedService.title}. Saya ingin konsultasi tentang...`, className: "w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-cyan-50 p-4 text-sm text-gray-600", children: [
          "Pesan WhatsApp akan otomatis menyertakan layanan ",
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#0575f5]", children: selectedService.title }),
          ", nama, email, dan pesan Anda."
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-6 py-3.5 font-bold text-white shadow-xl shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40", children: [
          "Kirim ke WhatsApp",
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ] })
      ] })
    ] }) })
  ] });
}
function ModalImageGallery$1({
  images,
  title
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(0);
  }, [images, title]);
  const showImage = (direction) => {
    setActiveIndex((currentIndex) => {
      if (direction === "next") return (currentIndex + 1) % images.length;
      return (currentIndex - 1 + images.length) % images.length;
    });
  };
  if (!images.length) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-[220px] w-full items-center justify-center border-b border-cyan-100 bg-slate-100 text-sm font-bold text-slate-500 sm:h-[300px] md:h-[420px]", children: "Gambar proyek belum tersedia" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden border-b border-cyan-100 bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "h-[240px] sm:h-[320px] md:h-[460px]", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: images[activeIndex],
        alt: `${title} ${activeIndex + 1}`,
        loading: "lazy",
        decoding: "async",
        className: "h-full w-full bg-slate-950 object-contain"
      }
    ) }),
    images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => showImage("prev"),
          className: "absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:left-4 sm:p-3",
          "aria-label": "Gambar sebelumnya",
          children: "‹"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => showImage("next"),
          className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:right-4 sm:p-3",
          "aria-label": "Gambar berikutnya",
          children: "›"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-1/2 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-2xl bg-[#142331]/75 p-2 backdrop-blur sm:bottom-4 sm:max-w-[90%]", children: images.map((image, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveIndex(index),
          className: `h-12 w-16 overflow-hidden rounded-xl border transition sm:h-14 sm:w-20 ${activeIndex === index ? "border-cyan-300 ring-2 ring-cyan-300/60" : "border-white/20 hover:border-white/80"}`,
          "aria-label": `Tampilkan gambar ${index + 1}`,
          children: [
            /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
              "Gambar ",
              index + 1
            ] }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                alt: `${title} thumbnail ${index + 1}`,
                className: "h-full w-full object-cover"
              }
            )
          ]
        },
        image
      )) })
    ] })
  ] });
}
function PortfolioSection({
  isVisible,
  activeCategory,
  setActiveCategory,
  portfolioItems
}) {
  const getProjectImages2 = (project) => {
    var _a;
    const images = ((_a = project.images) == null ? void 0 : _a.length) ? project.images : [project.image];
    return images.filter(Boolean);
  };
  const [selectedProject, setSelectedProject] = useState(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeProjectDetail = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const filteredProjects = activeCategory === "semua" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);
  const displayedProjects = filteredProjects.slice(0, 3);
  const openAllProjectsPage = () => {
    window.location.href = "/portofolio";
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "portofolio",
      className: "py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-cyan-50/70 to-white",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-10 md:mb-16", children: [
            /* @__PURE__ */ jsx("span", { className: "section-eyebrow mb-3", children: "Portofolio" }),
            /* @__PURE__ */ jsx("h2", { className: "section-title text-2xl sm:text-3xl md:text-4xl font-black text-center", children: "Proyek Terbaru" }),
            /* @__PURE__ */ jsx("div", { className: "w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2", children: "Berikut adalah beberapa proyek terbaru yang telah saya kerjakan bersama klien dan tim." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 px-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveCategory("semua"),
                className: `px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "semua" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`,
                children: "Semua"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveCategory("web"),
                className: `px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "web" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`,
                children: "Website"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveCategory("app"),
                className: `px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "app" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`,
                children: "Aplikasi"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveCategory("design"),
                className: `px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition-all ${activeCategory === "design" ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-cyan-500/25" : "text-gray-700 bg-white/80 hover:bg-cyan-100 backdrop-blur"}`,
                children: "Desain"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `space-y-5 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
              children: displayedProjects.map((item, index) => /* @__PURE__ */ jsxs(
                "article",
                {
                  className: "group grid overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-xl shadow-[#142331]/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15 lg:grid-cols-[300px_1fr]",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative min-h-56 overflow-hidden lg:min-h-full", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: getProjectImages2(item)[0],
                          alt: item.title,
                          loading: "lazy",
                          decoding: "async",
                          className: "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#142331]/75 via-transparent to-transparent" }),
                      /* @__PURE__ */ jsxs("span", { className: "absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0575f5] shadow-lg backdrop-blur", children: [
                        "#",
                        String(index + 1).padStart(2, "0")
                      ] }),
                      getProjectImages2(item).length > 1 && /* @__PURE__ */ jsxs("span", { className: "absolute bottom-4 right-4 rounded-full bg-[#142331]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur", children: [
                        getProjectImages2(item).length,
                        " gambar"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex min-h-[280px] flex-col p-5 md:p-7", children: [
                      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-[#0575f5]", children: item.category === "web" ? "Website" : item.category === "app" ? "Aplikasi" : "Desain" }),
                        item.techs.slice(0, 5).map((tech) => /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600",
                            children: tech
                          },
                          tech
                        ))
                      ] }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-black leading-snug text-[#142331] md:text-2xl", children: item.title }),
                      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base line-clamp-3", children: item.desc }),
                      /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-2 sm:grid-cols-2", children: item.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex gap-2 rounded-2xl bg-cyan-50/70 p-3 text-sm text-gray-600",
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#10c7ee]" }),
                            /* @__PURE__ */ jsx("span", { className: "line-clamp-2", children: feature })
                          ]
                        },
                        feature
                      )) }),
                      /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => openProjectDetail(item),
                          className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40",
                          children: [
                            "Lihat Detail",
                            /* @__PURE__ */ jsx(
                              "svg",
                              {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /* @__PURE__ */ jsx(
                                  "path",
                                  {
                                    fillRule: "evenodd",
                                    d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                  }
                                )
                              }
                            )
                          ]
                        }
                      ) })
                    ] })
                  ]
                },
                item.title
              ))
            }
          ),
          filteredProjects.length > 3 && /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: openAllProjectsPage,
              className: "inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/85 px-6 py-3 font-bold text-[#0575f5] shadow-xl shadow-[#142331]/5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-cyan-500/20",
              children: [
                "Lihat proyek lainnya",
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M4 4a2 2 0 012-2h4a1 1 0 110 2H6v10h8v-4a1 1 0 112 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm9-1a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }),
        isModalOpen && selectedProject && /* @__PURE__ */ jsx(
          "div",
          {
            className: "fixed inset-0 z-50 block h-dvh overflow-y-auto bg-[#142331]/75 p-3 backdrop-blur-md transition-all duration-300 sm:p-4",
            onClick: closeProjectDetail,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative mx-auto my-3 flex w-full max-w-5xl flex-col rounded-[1.5rem] bg-white shadow-2xl shadow-[#142331]/40 sm:my-4 sm:rounded-[2rem]",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#10c7ee]/25 blur-3xl" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0575f5]/20 blur-3xl" }),
                  (() => {
                    const modalImages = getProjectImages2(selectedProject);
                    return /* @__PURE__ */ jsx(
                      ModalImageGallery$1,
                      {
                        images: modalImages,
                        title: selectedProject.title
                      }
                    );
                  })(),
                  /* @__PURE__ */ jsxs("div", { className: "relative min-w-0 bg-gradient-to-br from-[#142331] via-[#16344a] to-[#0575f5] p-5 text-white sm:p-6 md:p-8", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: closeProjectDetail,
                        className: "absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white/80 shadow-lg backdrop-blur transition hover:bg-white hover:text-[#142331]",
                        "aria-label": "Tutup modal",
                        children: /* @__PURE__ */ jsx(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /* @__PURE__ */ jsx(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                              }
                            )
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black text-cyan-100 backdrop-blur capitalize", children: selectedProject.category === "web" ? "Website" : selectedProject.category === "app" ? "Aplikasi" : "Desain" }),
                    /* @__PURE__ */ jsx("h3", { className: "break-words pr-10 text-2xl font-black leading-tight md:text-3xl", children: selectedProject.title }),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-4xl text-sm leading-6 text-cyan-50/90 md:text-base", children: selectedProject.desc }),
                    /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: selectedProject.techs.slice(0, 5).map((tech, idx) => /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur",
                        children: tech
                      },
                      idx
                    )) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "relative min-w-0 p-5 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.85fr_1.15fr]", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-cyan-100 bg-cyan-50/60 p-5", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-black uppercase tracking-wide text-[#0575f5]", children: "Teknologi" }),
                        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: selectedProject.techs.map((tech, idx) => /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "rounded-full bg-white px-3 py-1 text-sm font-bold text-[#0575f5] shadow-sm",
                            children: tech
                          },
                          idx
                        )) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-black uppercase tracking-wide text-[#142331]", children: "Kategori" }),
                        /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg font-black capitalize text-[#0575f5]", children: selectedProject.category === "web" ? "Website" : selectedProject.category === "app" ? "Aplikasi" : "Desain" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5 md:p-6", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-black text-[#142331]", children: "Fitur Utama" }),
                      /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: selectedProject.features.map((feature, idx) => /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-gray-600",
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#10c7ee]" }),
                            /* @__PURE__ */ jsx("span", { children: feature })
                          ]
                        },
                        idx
                      )) })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "relative border-t border-cyan-100 bg-white/90 p-4 backdrop-blur md:p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: closeProjectDetail,
                        className: "rounded-full border border-slate-200 bg-white px-5 py-2.5 font-bold text-slate-700 transition hover:bg-slate-50",
                        children: "Tutup"
                      }
                    ),
                    selectedProject.link && /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: selectedProject.link,
                        className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          "Kunjungi Proyek",
                          /* @__PURE__ */ jsx(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-4 w-4",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: /* @__PURE__ */ jsx(
                                "path",
                                {
                                  fillRule: "evenodd",
                                  d: "M4 4a2 2 0 012-2h4a1 1 0 110 2H6v10h8v-4a1 1 0 112 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm9-1a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 01-1-1z",
                                  clipRule: "evenodd"
                                }
                              )
                            }
                          )
                        ]
                      }
                    )
                  ] }) })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function DeveloperActivitySection({
  activity
}) {
  const hasWakatimeEmbed = Boolean(
    activity.wakatimeActivityUrl && !activity.wakatimeActivityUrl.endsWith("/last_year.svg")
  );
  const hasWakatimeLanguages = Boolean(activity.wakatimeLanguagesUrl);
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "aktivitas",
      className: "py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-cyan-50/70",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-10 md:mb-16", children: [
          /* @__PURE__ */ jsx("span", { className: "section-eyebrow mb-3", children: "Aktivitas Developer" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title text-2xl sm:text-3xl md:text-4xl font-black text-center", children: "Coding Activity Last Year" }),
          /* @__PURE__ */ jsx("div", { className: "w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2", children: "Ringkasan aktivitas coding dari WakaTime dan kontribusi GitHub selama satu tahun terakhir." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-[#0575f5]", children: "WakaTime" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#142331]", children: "Activity Last Year" })
              ] }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: activity.wakatimeProfileUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]",
                  children: [
                    "@",
                    activity.wakatimeUsername
                  ]
                }
              )
            ] }),
            hasWakatimeEmbed ? /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-cyan-100 bg-white p-3 shadow-inner", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: activity.wakatimeActivityUrl,
                alt: "WakaTime activity last year",
                className: "min-h-64 w-full object-contain",
                loading: "lazy"
              }
            ) }) : /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-cyan-200 bg-cyan-50/70 p-6 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg shadow-cyan-500/10", children: "⏱️" }),
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-black text-[#142331]", children: "Tambahkan Share URL WakaTime" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-gray-600", children: "Buat chart publik dari WakaTime, pilih Coding Activity Last Year format SVG, lalu tempel URL-nya di file data." }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-2xl bg-white p-3 text-left font-mono text-xs text-gray-600", children: "src/data/developerActivity.ts → wakatimeActivityUrl" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wakatime.com/share/embed",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "mt-5 inline-flex rounded-full bg-[#0575f5] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#045fd0]",
                  children: "Buat Embed WakaTime"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-[#0575f5]", children: "WakaTime" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#142331]", children: "Languages Last Year" })
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: activity.wakatimeProfileUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]",
                  children: "Languages"
                }
              )
            ] }),
            hasWakatimeLanguages ? /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-cyan-100 bg-white p-3 shadow-inner", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: activity.wakatimeLanguagesUrl,
                alt: "WakaTime languages over the last year",
                className: "min-h-64 w-full object-contain",
                loading: "lazy"
              }
            ) }) : /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-cyan-200 bg-cyan-50/70 p-6 text-center text-sm text-gray-600", children: [
              "Tambahkan URL SVG languages di",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-mono", children: "src/data/developerActivity.ts" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-[#0575f5]", children: "GitHub" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#142331]", children: "GitHub Streak" })
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: activity.githubProfileUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]",
                  children: "View Profile"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/50 to-white p-4 shadow-inner", children: [
              /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#10c7ee]/20 blur-3xl" }),
              /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#0575f5]/15 blur-3xl" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: activity.githubProfileUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "relative flex justify-center overflow-x-auto rounded-2xl bg-white/85 p-3 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:shadow-cyan-500/20",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: activity.githubStreakUrl,
                      alt: "GitHub Streak",
                      className: "min-h-48 w-full max-w-xl object-contain",
                      loading: "lazy"
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-[#0575f5]", children: "GitHub" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#142331]", children: "Contributions Last Year" })
              ] }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: activity.githubProfileUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]",
                  children: [
                    "@",
                    activity.githubUsername
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-cyan-100 bg-white p-4 shadow-inner", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: activity.githubContributionsUrl,
                alt: "GitHub contributions in the last year",
                className: "min-h-36 min-w-[720px] object-contain",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-gray-500", children: [
              "Grafik kontribusi mengikuti data publik GitHub dari username",
              " ",
              activity.githubUsername,
              "."
            ] })
          ] })
        ] })
      ] })
    }
  );
}
function ContactSection({ profile: profile2 }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.namedItem("name").value;
    const email = form.elements.namedItem("email").value;
    const subject = form.elements.namedItem("subject").value;
    const message = form.elements.namedItem("message").value;
    const whatsappMessage = `*Pesan dari Website*

Nama: ${name}
Email: ${email}
Subjek: ${subject}

Pesan:
${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6281318812027?text=${encodedMessage}`, "_blank");
    form.reset();
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      url: profile2.socialMedia.linkedin,
      icon: "/img/icons/linkedin.svg",
      label: "Kunjungi LinkedIn Alfreinsco"
    },
    {
      name: "GitHub",
      url: profile2.socialMedia.github,
      icon: "/img/icons/github.svg",
      label: "Kunjungi GitHub Alfreinsco"
    },
    {
      name: "X",
      url: profile2.socialMedia.twitter,
      icon: "/img/icons/x.svg",
      label: "Kunjungi X Alfreinsco"
    },
    {
      name: "Instagram",
      url: profile2.socialMedia.instagram,
      icon: "/img/icons/instagram.svg",
      label: "Kunjungi Instagram Alfreinsco"
    },
    {
      name: "WhatsApp",
      url: profile2.socialMedia.whatsapp,
      icon: "/img/icons/whatsapp.svg",
      label: "Hubungi Alfreinsco lewat WhatsApp"
    }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "kontak",
      className: "py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-white via-cyan-50 to-blue-50",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-10 md:mb-16", children: [
          /* @__PURE__ */ jsx("span", { className: "section-eyebrow mb-3", children: "Kontak" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title text-2xl sm:text-3xl md:text-4xl font-black text-center", children: "Hubungi Saya" }),
          /* @__PURE__ */ jsx("div", { className: "w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2", children: "Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya dan diskusikan ide proyek Anda." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-8 md:gap-12 items-stretch", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 glass-card rounded-3xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800", children: "Informasi Kontak" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:space-y-6 mb-6 md:mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 md:gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#0575f5] mt-1", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 md:h-6 md:w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-base md:text-lg font-semibold mb-1 text-gray-800", children: "Email" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600", children: profile2.email }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-500 mt-1", children: "Kirim email kapan saja!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 md:gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#0575f5] mt-1", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 md:h-6 md:w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-base md:text-lg font-semibold mb-1 text-gray-800", children: "Telepon" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600", children: profile2.phone }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-500 mt-1", children: "Senin - Jumat: 09.00 - 17.00" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 md:gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-100 flex items-center justify-center text-[#0575f5] mt-1", children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5 md:h-6 md:w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: [
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-base md:text-lg font-semibold mb-1 text-gray-800", children: "Lokasi" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600", children: profile2.location }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-500 mt-1", children: "Tersedia untuk meeting offline dan online" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800", children: "Ikuti Saya" }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-3 md:gap-4", children: socialLinks.map((social) => /* @__PURE__ */ jsx(
              "a",
              {
                href: social.url,
                "aria-label": social.label,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shadow-cyan-900/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 md:h-10 md:w-10",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: social.icon,
                    alt: "",
                    className: "h-5 w-5 object-contain",
                    loading: "lazy"
                  }
                )
              },
              social.name
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 glass-card rounded-3xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800", children: "Kirim Pesan" }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 md:space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "name",
                      className: "block text-sm md:text-base font-medium text-gray-700 mb-1",
                      children: "Nama"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      autoComplete: "name",
                      className: "text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base",
                      placeholder: "Nama Anda",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "email",
                      className: "block text-sm md:text-base font-medium text-gray-700 mb-1",
                      children: "Email"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      autoComplete: "email",
                      className: "text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base",
                      placeholder: "email@gmail.com",
                      required: true
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "subject",
                    className: "block text-sm md:text-base font-medium text-gray-700 mb-1",
                    children: "Subjek"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "subject",
                    name: "subject",
                    className: "text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base",
                    placeholder: "Subjek pesan",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "message",
                    className: "block text-sm md:text-base font-medium text-gray-700 mb-1",
                    children: "Pesan"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "message",
                    name: "message",
                    rows: 4,
                    className: "text-gray-700 w-full px-3 md:px-4 py-2 md:py-3 border border-cyan-100 bg-white/80 rounded-2xl focus:ring-2 focus:ring-[#10c7ee] focus:border-[#10c7ee] transition-all text-sm md:text-base",
                    placeholder: "Tulis pesan Anda di sini...",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "w-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white py-2.5 md:py-3 px-6 rounded-lg hover:shadow-lg transition-all font-medium text-sm md:text-base flex items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" })
                      }
                    ),
                    "Kirim Pesan via WhatsApp"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] })
    }
  );
}
function Footer({ profile: profile2 }) {
  var _a, _b, _c, _d, _e;
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    section == null ? void 0 : section.scrollIntoView({ behavior: "smooth" });
  };
  const socialLinks = [
    {
      name: "LinkedIn",
      url: ((_a = profile2.socialMedia) == null ? void 0 : _a.linkedin) || "https://linkedin.com/in/alfreinsco",
      icon: "/img/icons/linkedin.svg",
      label: "Kunjungi LinkedIn Alfreinsco"
    },
    {
      name: "GitHub",
      url: ((_b = profile2.socialMedia) == null ? void 0 : _b.github) || "https://github.com/alfreinsco",
      icon: "/img/icons/github.svg",
      label: "Kunjungi GitHub Alfreinsco"
    },
    {
      name: "X",
      url: ((_c = profile2.socialMedia) == null ? void 0 : _c.twitter) || "https://twitter.com/alfreinsco",
      icon: "/img/icons/x.svg",
      label: "Kunjungi X Alfreinsco"
    },
    {
      name: "Instagram",
      url: ((_d = profile2.socialMedia) == null ? void 0 : _d.instagram) || "https://instagram.com/alfreinsco_",
      icon: "/img/icons/instagram.svg",
      label: "Kunjungi Instagram Alfreinsco"
    },
    {
      name: "WhatsApp",
      url: ((_e = profile2.socialMedia) == null ? void 0 : _e.whatsapp) || "https://wa.me/6281318812027",
      icon: "/img/icons/whatsapp.svg",
      label: "Hubungi Alfreinsco lewat WhatsApp"
    }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "py-12 px-8 bg-gray-900 text-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-12", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/img/optimized/logo-alfreinsco-bawah.webp",
          alt: "Alfreinsco",
          loading: "lazy",
          className: "mb-4 h-20 w-auto rounded-2xl bg-white/95 p-2 object-contain"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: "Menyediakan layanan pengembangan web dan mobile berkualitas tinggi untuk membantu bisnis Anda tumbuh di era digital." }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: socialLinks.map((social) => /* @__PURE__ */ jsx(
        "a",
        {
          href: social.url,
          "aria-label": social.label,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: social.icon,
              alt: "",
              className: "h-5 w-5 object-contain",
              loading: "lazy"
            }
          )
        },
        social.name
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-4", children: "Navigasi" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#beranda",
            onClick: (e) => scrollToSection(
              e,
              "beranda"
            ),
            className: "text-gray-400 hover:text-white transition-colors",
            children: "Beranda"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#tentang",
            onClick: (e) => scrollToSection(
              e,
              "tentang"
            ),
            className: "text-gray-400 hover:text-white transition-colors",
            children: "Tentang"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#layanan",
            onClick: (e) => scrollToSection(
              e,
              "layanan"
            ),
            className: "text-gray-400 hover:text-white transition-colors",
            children: "Layanan"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#portofolio",
            onClick: (e) => scrollToSection(
              e,
              "portofolio"
            ),
            className: "text-gray-400 hover:text-white transition-colors",
            children: "Portofolio"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#aktivitas",
            onClick: (e) => scrollToSection(
              e,
              "aktivitas"
            ),
            className: "text-gray-400 hover:text-white transition-colors",
            children: "Aktivitas"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-4", children: "Layanan" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Konsultasi Teknologi",
        "Backend Development",
        "Maintenance & Support"
      ].map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "#layanan",
          onClick: (e) => scrollToSection(e, "layanan"),
          className: "text-gray-400 hover:text-white transition-colors",
          children: service
        }
      ) }, service)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-4", children: "Kontak" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5 text-gray-400 mt-0.5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "alfreinsco@gmail.com" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5 text-gray-400 mt-0.5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "+62 813 1881 2027" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5 text-gray-400 mt-0.5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Ambon, Indonesia" })
        ] })
      ] })
    ] })
  ] }) }) });
}
function ScrollToTopButton({ isScrolled }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: scrollToTop,
      className: `fixed right-6 bottom-6 w-12 h-12 rounded-full bg-[#0575f5] text-white flex items-center justify-center shadow-lg transition-all hover:bg-[#045fd0] focus:outline-none ${isScrolled ? "opacity-100 visible" : "opacity-0 invisible"}`,
      "aria-label": "Kembali ke atas",
      children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }) })
    }
  );
}
const profile = {
  "name": "Alfreinsco",
  "title": "Full Stack Developer",
  "location": "Ambon, Indonesia",
  "phone": "+62 813 1881 2027",
  "email": "alfreinsco@gmail.com",
  "bio": "Membangun aplikasi web, mobile dan desktop yang menarik dengan fokus pada pengalaman pengguna yang luar biasa dan performa tinggi. Menjadikan ide Anda menjadi kenyataan.",
  "avatar": "/img/optimized/marthin.webp",
  "available": true,
  "socialMedia": {
    "linkedin": "https://linkedin.com/in/alfreinsco",
    "github": "https://github.com/alfreinsco",
    "twitter": "https://twitter.com/alfreinsco",
    "instagram": "https://instagram.com/alfreinsco_",
    "whatsapp": "https://wa.me/6281318812027"
  }
};
const skills = {
  "programming": [
    {
      "name": "JavaScript",
      "level": 95
    },
    {
      "name": "TypeScript",
      "level": 90
    },
    {
      "name": "React.js",
      "level": 92
    },
    {
      "name": "Next.js",
      "level": 88
    },
    {
      "name": "Node.js",
      "level": 85
    },
    {
      "name": "Express.js",
      "level": 80
    },
    {
      "name": "HTML/CSS",
      "level": 95
    },
    {
      "name": "TailwindCSS",
      "level": 90
    },
    {
      "name": "PHP",
      "level": 75
    },
    {
      "name": "Laravel",
      "level": 70
    }
  ],
  "design": [
    {
      "name": "UI/UX Design",
      "level": 85
    },
    {
      "name": "Figma",
      "level": 90
    },
    {
      "name": "Adobe XD",
      "level": 80
    },
    {
      "name": "Photoshop",
      "level": 75
    },
    {
      "name": "Illustrator",
      "level": 70
    }
  ],
  "other": [
    {
      "name": "Git & GitHub",
      "level": 85
    },
    {
      "name": "REST API",
      "level": 90
    },
    {
      "name": "Database Design",
      "level": 80
    },
    {
      "name": "MongoDB",
      "level": 85
    },
    {
      "name": "MySQL/PostgreSQL",
      "level": 85
    },
    {
      "name": "Docker",
      "level": 75
    },
    {
      "name": "AWS/Netlify/Vercel",
      "level": 80
    }
  ]
};
const experience = [
  {
    position: "Senior Full Stack Developer",
    company: "Tech Solutions Indonesia",
    location: "Ambon",
    period: "2020 - Sekarang",
    description: "Mengembangkan dan memelihara aplikasi web skala besar menggunakan React, Node.js, dan AWS. Memimpin tim pengembangan dengan 5 anggota."
  },
  {
    position: "UI/UX Designer & Frontend Developer",
    company: "Creative Digital Agency",
    location: "Ambon",
    period: "2018 - 2020",
    description: "Merancang antarmuka pengguna dan mengimplementasikan desain ke dalam kode frontend menggunakan React.js dan TailwindCSS."
  },
  {
    position: "Web Developer",
    company: "Startup Hub Indonesia",
    location: "Ambon",
    period: "2016 - 2018",
    description: "Mengembangkan website dan aplikasi web untuk berbagai startup menggunakan PHP, Laravel dan JavaScript."
  }
];
const education = [
  {
    "degree": "S1 Teknik Informatika",
    "institution": "Universitas Indonesia",
    "location": "Depok",
    "period": "2012 - 2016",
    "description": "Fokus pada pengembangan web dan desain aplikasi. Lulus dengan predikat cum laude."
  },
  {
    "degree": "Bootcamp Full Stack Web Development",
    "institution": "Dicoding Academy",
    "location": "Online",
    "period": "2017",
    "description": "Program intensif pengembangan web full stack dengan fokus pada MERN stack."
  }
];
const services = [
  {
    "title": "Web Development",
    "icon": "code",
    "description": "Pembuatan website responsive, aplikasi web modern, dan sistem manajemen konten dengan performa tinggi."
  },
  {
    "title": "Mobile App Development",
    "icon": "mobile",
    "description": "Pengembangan aplikasi mobile untuk iOS dan Android menggunakan React Native dan Flutter."
  },
  {
    "title": "UI/UX Design",
    "icon": "design",
    "description": "Desain antarmuka pengguna yang menarik, intuitif dan memberikan pengalaman terbaik bagi pengguna."
  },
  {
    "title": "Konsultasi Teknologi",
    "icon": "consultation",
    "description": "Konsultasi pemilihan teknologi, arsitektur aplikasi, dan strategi pengembangan untuk bisnis Anda."
  },
  {
    "title": "Backend Development",
    "icon": "server",
    "description": "Pengembangan backend yang aman, skalabel, dan berperforma tinggi dengan REST API dan database."
  },
  {
    "title": "Maintenance & Support",
    "icon": "support",
    "description": "Layanan pemeliharaan dan dukungan teknis untuk aplikasi web dan mobile yang telah berjalan."
  }
];
const portfolio = [
  {
    title: "Repository UNPATTI",
    desc: "Platform digital perpustakaan Universitas Pattimura untuk mengakses ribuan e-resources akademik seperti jurnal, skripsi, tesis, dan penelitian terkini secara mudah dan instan.",
    category: "web",
    techs: ["PHP", "Bootstrap", "MySQL"],
    // Contoh tech stack umum repository kampus, silakan sesuaikan jika tahu detailnya
    image: "/img/project/optimized/repository-unpatti.webp",
    link: "https://repository.unpatti.ac.id/",
    features: [
      "Pencarian canggih dengan fitur filter berdasarkan penulis, tahun publikasi, topik, dan jenis dokumen akademik.",
      "Akses instan untuk membaca, mengunduh (download), dan menandai (bookmark) publikasi favorit kapan saja.",
      "Koleksi e-resources lengkap yang mencakup jurnal internasional, skripsi mahasiswa, tesis, dan penelitian eksklusif.",
      "Manajemen konten tugas akhir terintegrasi dengan sistem persetujuan publikasi sebelum ditampilkan secara aktif.",
      "Navigasi katalog digital yang intuitif dilengkapi dengan informasi kontak dan panduan penggunaan bagi sivitas akademika."
    ]
  },
  {
    title: "MIKASTOR POS",
    desc: "Sistem Informasi Point of Sales (POS) dan Manajemen Inventori retail minyak kayu putih yang dirancang untuk mengoptimalkan alur kerja kasir serta memberikan laporan performa bisnis yang akurat bagi pemilik toko.",
    category: "web",
    techs: ["PHP Native", "Tailwind CSS"],
    image: "/img/project/optimized/mikastor.webp",
    link: "https://github.com/alfreinsco/mikastor",
    features: [
      "Dashboard bisnis real-time untuk memantau akumulasi total pendapatan, omset harian, dan jumlah varian aktif.",
      "Sistem manajemen inventori cerdas dengan indikator peringatan otomatis untuk stok produk yang mulai menipis.",
      "Modul kasir (Point of Sales) yang cepat dan responsif untuk efisiensi pemrosesan transaksi pelanggan.",
      "Pelacakan riwayat transaksi dan nota penjualan terperinci guna transparansi laporan keuangan.",
      "Manajemen operasional toko yang terintegrasi, mencakup pencatatan pengeluaran dan pemrosesan pesanan online."
    ]
  },
  {
    title: "SIKERMA UNPATTI",
    desc: "Sistem Informasi Manajemen Kerjasama Universitas Pattimura untuk melacak, mengelola, dan mengoptimalkan dokumen kerja sama antarinstansi secara transparan dan real-time.",
    category: "web",
    techs: ["Laravel", "Tailwind CSS", "Livewire"],
    // Sesuaikan kembali dengan tech stack asli yang Anda gunakan
    image: "/img/project/optimized/sikerma.webp",
    link: "https://sikerma.unpatti.ac.id/",
    features: [
      "Dashboard interaktif pelacakan statistik total kerja sama, mitra aktif, dan persentase tingkat keberhasilan",
      "Sistem manajemen dan filter dokumen kerja sama berdasarkan jenis (MoU, MoA, IA), status, dan masa berlaku",
      "Pencarian cepat dokumen berdasarkan nomor, judul, instansi mitra, atau status verifikasi",
      "Manajemen statistik jumlah kerja sama yang terbagi berdasarkan klaster sub-kelompok kerja dan unit terkait",
      "Sistem verifikasi dokumen terintegrasi untuk menjamin validitas berkas kerja sama yang sedang berjalan"
    ]
  },
  {
    title: "SMART PKK MALUKU",
    desc: "Aplikasi dan ruang belajar sederhana untuk keluarga serta kader PKK Maluku guna membaca materi, mengikuti kursus, menonton video, dan mengikuti webinar secara mandiri.",
    category: "web",
    techs: ["Next.js", "Tailwind CSS", "TypeScript"],
    // Sesuaikan dengan teknologi asli yang Anda gunakan
    image: "/img/project/optimized/smartpkkmaluku.webp",
    link: "https://smart.pkkmaluku.com/",
    features: [
      "Sistem pembelajaran mandiri (E-Learning) interaktif langkah demi langkah untuk kader dan keluarga",
      "Manajemen kursus dan materi bacaan praktis seputar kesehatan, organisasi, dan keterampilan rumah tangga",
      "Integrasi jadwal dan pelaksanaan pertemuan online atau webinar komunitas",
      "Pusat media edukasi berupa konten video dan podcast yang informatif serta inspiratif",
      "Antarmuka ramah pengguna dengan tombol navigasi besar yang mudah diakses oleh segala usia"
    ]
  },
  {
    title: "TP PKK Provinsi Maluku",
    desc: "Portal resmi Tim Penggerak PKK Provinsi Maluku untuk pemberdayaan keluarga, peningkatan kualitas hidup, dan penguatan ketahanan ekonomi menuju Maluku sejahtera.",
    category: "web",
    techs: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/img/project/optimized/pkkmaluku.webp",
    link: "https://pkkmaluku.com/",
    features: [
      "Sistem pemetaan interaktif sebaran kader dan kelompok Dasawisma di 11 kabupaten/kota",
      "Manajemen data terintegrasi untuk empat Kelompok Kerja (Pokja I - IV)",
      "Portal publikasi berita, kegiatan terkini, dan dokumentasi program kerja",
      "Akses cepat ke regulasi, surat keputusan (SK), dan unduhan dokumen resmi",
      "Desain responsif yang ramah pengguna dengan performa tinggi menggunakan teknologi modern"
    ]
  },
  {
    title: "Kairatu Beach - Paket Liburan Keluarga",
    desc: "Destinasi pantai eksklusif dan privat di Seram Bagian Barat yang dirancang khusus untuk momen hangat berkumpul bersama keluarga tercinta.",
    category: "web",
    techs: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/img/project/optimized/kairatubeach.webp",
    link: "https://kairatubeach.codedaritimur.com/",
    features: [
      "Akses penuh ke area pantai privat yang aman dan ramah keluarga",
      "Fasilitas Gazebo Premium untuk bersantai menikmati panorama laut lepas",
      "Spot foto instagramable di setiap sudut pantai",
      "Area parkir yang luas dan aman untuk kendaraan keluarga",
      "Pendampingan langsung oleh koordinator lokal selama kunjungan"
    ]
  },
  {
    title: "SIGAP UNPATTI - Sistem Informasi Kepegawaian",
    desc: "Sistem informasi kepegawaian Universitas Pattimura yang dirancang untuk memonitoring kehadiran, aktivitas, dan data master pegawai secara terintegrasi.",
    category: "app",
    techs: ["flutter", "React", "PHP", "Laravel", "MySQL"],
    // Sesuaikan dengan tech stack asli yang Anda gunakan
    image: "/img/project/optimized/sigap.webp",
    link: "https://play.google.com/store/apps/details?id=com.unpatti.sigap",
    features: [
      "Dashboard monitoring kehadiran pegawai (WFO/WFH/WFA) secara real-time",
      "Sistem absensi online terintegrasi dengan rekapitulasi bulanan",
      "Manajemen data master pegawai (Pendidik dan Kependidikan)",
      "Visualisasi statistik kehadiran dan ketidakhadiran pegawai",
      "Integrasi akun Single Sign-On (SSO) untuk keamanan akses"
    ]
  },
  {
    title: "Aplikasi Pendaftaran Mahasiswa Baru Universitas Pattimura Jalur Mandiri",
    desc: "Sistem pendaftaran mahasiswa baru yang memudahkan proses pendaftaran dan pengelolaan data mahasiswa.",
    category: "web",
    techs: ["React", "Node.js", "MongoDB", "Laravel"],
    image: "/img/project/optimized/pmb.webp",
    link: "https://mandiri.pmb.unpatti.ac.id",
    features: [
      "Form pendaftaran yang mudah diisi",
      "Verifikasi data secara otomatis",
      "Dashboard untuk pengelolaan data mahasiswa",
      "Notifikasi melalui email untuk status pendaftaran",
      "Pembayaran online dengan metode virtual account"
    ]
  },
  {
    title: "Sistem Pemilihan Majelis Jemaat GPM Wayame",
    desc: "Sistem yang memiliki 4 sub-sistem yaitu sidata untuk pendataan jemaat, siverval untuk verifikasi dan validasi jemaat pemilihan, sipungut untuk sistem pemungutan suara, dan situng untuk sistem perhitungan suara.",
    category: "web",
    techs: ["PHP", "Laravel", "MySQL", "TailwindCSS", "DaisyUI"],
    image: "/img/project/optimized/sipdp.webp",
    link: null,
    features: [
      "Sistem pendataan jemaat yang efisien",
      "Verifikasi dan validasi data pemilih secara otomatis",
      "Sistem pemungutan suara yang aman dan transparan",
      "Sistem perhitungan suara yang akurat dan cepat",
      "Dashboard untuk pengelolaan data pemilih dan hasil pemungutan suara",
      "Notifikasi melalui email untuk status pemilihan"
    ]
  },
  {
    title: "Perpustakaan Digital SMA Kristen YPKPM Ambon - Solusi Cerdas untuk Akses Buku Modern",
    desc: "Sistem perpustakaan digital yang memudahkan akses dan pengelolaan koleksi buku secara online.",
    category: "web",
    techs: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    image: "/img/project/optimized/smakrismart.webp",
    link: "https://github.com/alfreinsco/smakrismart",
    features: [
      "Pencarian buku yang cepat dan mudah",
      "Pengelolaan koleksi buku secara efisien",
      "Fitur peminjaman dan pengembalian buku secara online",
      "Notifikasi untuk pengingat peminjaman",
      "Dashboard untuk statistik peminjaman dan koleksi"
    ]
  },
  {
    title: "Pendaftaran KKN Kebangsaan 2024 - Program Kuliah Kerja Nyata untuk Masyarakat",
    desc: "Sistem pendaftaran KKN yang memudahkan mahasiswa untuk mendaftar dan mengelola data kegiatan KKN.",
    category: "web",
    techs: ["Laravel", "MySQL", "TailwindCSS", "DaisyUI"],
    image: "/img/project/optimized/kkn-kebangsaan2024.webp",
    link: null,
    features: [
      "Form pendaftaran yang user-friendly",
      "Verifikasi data secara otomatis",
      "Dashboard untuk pengelolaan data peserta KKN",
      "Notifikasi melalui email untuk status pendaftaran",
      "Integrasi dengan sistem pembayaran online"
    ]
  },
  {
    title: "Sistem Yudisium - Solusi untuk Proses Yudisium Mahasiswa",
    desc: "Sistem yudisium yang memudahkan mahasiswa untuk mengelola dan memantau proses yudisium mereka.",
    category: "web",
    techs: ["Laravel", "MySQL", "TailwindCSS", "DaisyUI"],
    image: "/img/project/optimized/sisyu.webp",
    link: null,
    features: [
      "Form pendaftaran yudisium yang mudah digunakan",
      "Verifikasi data mahasiswa secara otomatis",
      "Dashboard untuk pengelolaan data yudisium",
      "Notifikasi melalui email untuk status yudisium",
      "Integrasi dengan sistem akademik universitas"
    ]
  },
  {
    title: "Sistem Penyuratan - Solusi untuk Proses Penyuratan",
    desc: "Sistem penyuratan yang memudahkan pengguna untuk mengelola dan memantau proses penyuratan mereka.",
    category: "web",
    techs: ["Laravel", "MySQL", "TailwindCSS", "DaisyUI"],
    image: "/img/project/optimized/sispen.webp",
    link: null,
    features: [
      "Form pendaftaran penyuratan yang mudah digunakan",
      "Verifikasi data penyuratan secara otomatis",
      "Dashboard untuk pengelolaan data penyuratan",
      "Notifikasi melalui email untuk status penyuratan",
      "Integrasi dengan sistem administrasi universitas"
    ]
  },
  {
    title: "Sistem CDC Teknik Mesin - Solusi untuk Proses CDC",
    desc: "Sistem CDC yang memudahkan pengguna untuk mengelola dan memantau proses teknik mesin mereka.",
    category: "web",
    techs: ["Laravel", "MySQL", "TailwindCSS", "DaisyUI"],
    image: "/img/project/optimized/cdc-mesin.webp",
    link: null,
    features: [
      "Form pendaftaran CDC yang mudah digunakan",
      "Verifikasi data CDC secara otomatis",
      "Dashboard untuk pengelolaan data CDC",
      "Notifikasi melalui email untuk status CDC",
      "Integrasi dengan sistem administrasi teknik mesin"
    ]
  },
  {
    title: "Sistem Permintaan Ambulance - Solusi untuk Permintaan Ambulance",
    desc: "Aplikasi mobile yang memudahkan pengguna untuk mengajukan permintaan ambulance dengan cepat dan efisien.",
    category: "app",
    techs: ["Flutter", "Firebase", "Dart"],
    image: "/img/project/optimized/ambulance.webp",
    link: null,
    features: [
      "Form permintaan ambulance yang mudah digunakan",
      "Pelacakan lokasi ambulance secara real-time",
      "Notifikasi status permintaan melalui aplikasi",
      "Integrasi dengan sistem kesehatan lokal",
      "Dukungan 24/7 untuk pengguna"
    ]
  }
];
const stats = {
  "projectsCompleted": 75,
  "happyClients": 40,
  "yearsExperience": 6,
  "awardsWon": 6,
  "descriptions": {
    "projectsCompleted": "Website, dashboard, aplikasi internal, dan sistem informasi.",
    "happyClients": "Individu, UMKM, organisasi, dan institusi.",
    "yearsExperience": "Web, UI/UX, backend, frontend, dan deployment.",
    "awardsWon": "Kolaborasi proyek dan pengembangan layanan digital."
  }
};
const developerActivity = {
  githubUsername: "alfreinsco",
  githubContributionsUrl: "https://ghchart.rshah.org/0575f5/alfreinsco",
  githubStatsUrl: "https://github-readme-stats.vercel.app/api?username=alfreinsco&theme=radical&hide_border=false&include_all_commits=true&count_private=true",
  githubStreakUrl: "https://streak-stats.demolab.com/?user=alfreinsco&theme=transparent&hide_border=true&ring=10c7ee&fire=0575f5&currStreakLabel=0575f5&sideLabels=142331&dates=64748b&currStreakNum=142331&sideNums=142331",
  githubTopLanguagesUrl: "https://github-readme-stats.vercel.app/api/top-langs/?username=alfreinsco&theme=radical&hide_border=false&include_all_commits=true&count_private=true&layout=compact",
  githubProfileUrl: "https://github.com/alfreinsco",
  wakatimeUsername: "alfreinsco",
  // Ambil URL ini dari WakaTime: Share > Embeddable Charts > Coding Activity > Last Year > SVG.
  // Format URL biasanya seperti:
  // https://wakatime.com/share/@username/uuid.svg
  wakatimeActivityUrl: "https://wakatime.com/share/@alfreinsco/4fc52e3a-eb40-459b-95af-d770589b6648.svg",
  wakatimeLanguagesUrl: "https://wakatime.com/share/@alfreinsco/547dfd57-9739-4e8f-9be7-00cafccfe625.svg",
  wakatimeProfileUrl: "https://wakatime.com/@alfreinsco"
};
const siteData = {
  profile,
  skills,
  experience,
  education,
  services,
  portfolio,
  stats,
  developerActivity
};
function getData() {
  return siteData;
}
function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("semua");
  const [activeSection, setActiveSection] = useState("beranda");
  const [isVisible, setIsVisible] = useState({
    stats: false,
    services: false,
    portfolio: false,
    activity: false
  });
  const data = getData();
  useEffect(() => {
    var _a, _b, _c;
    document.title = "Marthin Alfreinsco Salakory | Software Engineer & Full Stack Developer";
    const description = "Portofolio Marthin Alfreinsco Salakory, Software Engineer dan Full Stack Developer asal Ambon yang berfokus pada sistem informasi kampus, repository digital, dashboard admin, Laravel, React, Next.js, dan REST API.";
    (_a = document.querySelector('meta[name="description"]')) == null ? void 0 : _a.setAttribute("content", description);
    (_b = document.querySelector('link[rel="canonical"]')) == null ? void 0 : _b.setAttribute("href", "https://alfreinsco.vercel.app/");
    (_c = document.querySelector('meta[property="og:url"]')) == null ? void 0 : _c.setAttribute("content", "https://alfreinsco.vercel.app/");
    if (window.location.hash) {
      const section = document.getElementById(window.location.hash.replace("#", ""));
      section == null ? void 0 : section.scrollIntoView({ behavior: "smooth" });
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const stats2 = document.getElementById("stats");
      const services2 = document.getElementById("layanan");
      const portfolio2 = document.getElementById("portofolio");
      const activity = document.getElementById("aktivitas");
      if (stats2 && isElementInViewport(stats2)) setIsVisible((prev) => ({ ...prev, stats: true }));
      if (services2 && isElementInViewport(services2)) setIsVisible((prev) => ({ ...prev, services: true }));
      if (portfolio2 && isElementInViewport(portfolio2)) setIsVisible((prev) => ({ ...prev, portfolio: true }));
      if (activity && isElementInViewport(activity)) setIsVisible((prev) => ({ ...prev, activity: true }));
      const sections = [
        { id: "beranda", element: document.getElementById("beranda") },
        { id: "tentang", element: document.getElementById("tentang") },
        { id: "layanan", element: document.getElementById("layanan") },
        { id: "portofolio", element: document.getElementById("portofolio") },
        { id: "aktivitas", element: document.getElementById("aktivitas") },
        { id: "kontak", element: document.getElementById("kontak") }
      ];
      let currentSection = "beranda";
      sections.forEach((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8;
  };
  return /* @__PURE__ */ jsxs("div", { className: "font-sans", children: [
    /* @__PURE__ */ jsx(Header, { isScrolled, activeSection }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(HomeSection, { profile: data.profile }),
      /* @__PURE__ */ jsx(StatsSection, { isVisible: isVisible.stats, stats: data.stats }),
      /* @__PURE__ */ jsx(AboutSection, { profile: data.profile, experience: data.experience, education: data.education }),
      /* @__PURE__ */ jsx(ServicesSection, { isVisible: isVisible.services, services: data.services }),
      /* @__PURE__ */ jsx(
        PortfolioSection,
        {
          isVisible: isVisible.portfolio,
          activeCategory,
          setActiveCategory,
          portfolioItems: data.portfolio
        }
      ),
      /* @__PURE__ */ jsx(DeveloperActivitySection, { activity: data.developerActivity }),
      /* @__PURE__ */ jsx(ContactSection, { profile: data.profile })
    ] }),
    /* @__PURE__ */ jsx(Footer, { profile: data.profile }),
    /* @__PURE__ */ jsx(ScrollToTopButton, { isScrolled })
  ] });
}
const categories = [
  { key: "semua", label: "Semua" },
  { key: "web", label: "Website" },
  { key: "app", label: "Aplikasi" },
  { key: "design", label: "Desain" }
];
const getCategoryLabel = (category) => {
  if (category === "web") return "Website";
  if (category === "app") return "Aplikasi";
  return "Desain";
};
const getProjectImages = (project) => {
  var _a;
  const images = ((_a = project.images) == null ? void 0 : _a.length) ? project.images : [project.image];
  return images.filter(Boolean);
};
function ProjectImageSlider({ project, index }) {
  const images = getProjectImages(project);
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-64 overflow-hidden lg:min-h-full", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: images[0],
        alt: project.title,
        loading: "lazy",
        decoding: "async",
        className: "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none bg-gradient-to-t from-[#142331]/70 via-transparent to-transparent" }),
    /* @__PURE__ */ jsxs("span", { className: "absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0575f5] shadow-lg backdrop-blur", children: [
      "#",
      String(index + 1).padStart(2, "0")
    ] }),
    images.length > 1 && /* @__PURE__ */ jsxs("span", { className: "absolute bottom-4 right-4 rounded-full bg-[#142331]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur", children: [
      images.length,
      " gambar"
    ] })
  ] });
}
function ModalImageGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(0);
  }, [images, title]);
  const showImage = (direction) => {
    setActiveIndex((currentIndex) => {
      if (direction === "next") return (currentIndex + 1) % images.length;
      return (currentIndex - 1 + images.length) % images.length;
    });
  };
  if (!images.length) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-[220px] w-full items-center justify-center border-b border-cyan-100 bg-slate-100 text-sm font-bold text-slate-500 sm:h-[300px] md:h-[420px]", children: "Gambar proyek belum tersedia" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden border-b border-cyan-100 bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "h-[240px] sm:h-[320px] md:h-[460px]", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: images[activeIndex],
        alt: `${title} ${activeIndex + 1}`,
        loading: "lazy",
        decoding: "async",
        className: "h-full w-full bg-slate-950 object-contain"
      }
    ) }),
    images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => showImage("prev"), className: "absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:left-4 sm:p-3", "aria-label": "Gambar sebelumnya", children: "‹" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => showImage("next"), className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-black text-[#142331] shadow-xl backdrop-blur transition hover:bg-white sm:right-4 sm:p-3", "aria-label": "Gambar berikutnya", children: "›" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-1/2 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-2xl bg-[#142331]/75 p-2 backdrop-blur sm:bottom-4 sm:max-w-[90%]", children: images.map((image, index) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setActiveIndex(index), className: `h-12 w-16 overflow-hidden rounded-xl border transition sm:h-14 sm:w-20 ${activeIndex === index ? "border-cyan-300 ring-2 ring-cyan-300/60" : "border-white/20 hover:border-white/80"}`, "aria-label": `Tampilkan gambar ${index + 1}`, children: [
        /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
          "Gambar ",
          index + 1
        ] }),
        /* @__PURE__ */ jsx("img", { src: image, alt: `${title} thumbnail ${index + 1}`, className: "h-full w-full object-cover" })
      ] }, image)) })
    ] })
  ] });
}
function Portfolio() {
  const data = getData();
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copyStatus, setCopyStatus] = useState("idle");
  const [isScrolled] = useState(true);
  useEffect(() => {
    var _a, _b, _c, _d;
    document.title = "Daftar Proyek | Marthin Alfreinsco Salakory";
    const description = "Daftar proyek Marthin Alfreinsco Salakory, Software Engineer dan Full Stack Developer asal Ambon untuk sistem kampus, website, aplikasi, dashboard admin, Laravel, React, REST API, dan deployment server.";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription == null ? void 0 : metaDescription.setAttribute("content", description);
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical == null ? void 0 : canonical.setAttribute("href", "https://alfreinsco.vercel.app/portofolio");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    ogUrl == null ? void 0 : ogUrl.setAttribute("content", "https://alfreinsco.vercel.app/portofolio");
    (_a = document.querySelector('meta[property="og:title"]')) == null ? void 0 : _a.setAttribute("content", "Daftar Proyek | Marthin Alfreinsco Salakory");
    (_b = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _b.setAttribute("content", description);
    (_c = document.querySelector('meta[name="twitter:title"]')) == null ? void 0 : _c.setAttribute("content", "Daftar Proyek | Marthin Alfreinsco Salakory");
    (_d = document.querySelector('meta[name="twitter:description"]')) == null ? void 0 : _d.setAttribute("content", description);
  }, []);
  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };
  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };
  const copyPortfolioPrompt = async () => {
    const prompt = `Buatkan saya portofolio profesional untuk kebutuhan melamar kerja berdasarkan data berikut. Fokuskan pada nilai bisnis, impact, tech stack, tanggung jawab, dan hasil yang relevan untuk recruiter. Tulis dalam bahasa Indonesia yang profesional dan ringkas. Susun menjadi: ringkasan profil, highlight skill, daftar proyek unggulan, deskripsi tiap proyek dengan problem-solution-impact, dan versi singkat untuk CV/LinkedIn.

Data proyek:
${JSON.stringify(data.portfolio, null, 2)}`;
    await navigator.clipboard.writeText(prompt);
    setCopyStatus("copied");
    window.setTimeout(() => setCopyStatus("idle"), 1800);
  };
  const stats2 = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      count: category.key === "semua" ? data.portfolio.length : data.portfolio.filter((item) => item.category === category.key).length
    }));
  }, [data.portfolio]);
  const projects = useMemo(() => {
    const keyword = searchQuery.trim().toLowerCase();
    return data.portfolio.filter((item) => {
      const categoryMatch = activeCategory === "semua" || item.category === activeCategory;
      const searchMatch = !keyword || [
        item.title,
        item.desc,
        item.category,
        ...item.techs,
        ...item.features
      ].join(" ").toLowerCase().includes(keyword);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, data.portfolio, searchQuery]);
  return /* @__PURE__ */ jsxs("div", { className: "font-sans bg-[#f7fbff] text-[#142331]", children: [
    /* @__PURE__ */ jsx(Header, { isScrolled, activeSection: "portofolio" }),
    /* @__PURE__ */ jsxs("main", { className: "min-h-screen pb-16", children: [
      /* @__PURE__ */ jsx("section", { className: "px-4 pb-6 pt-28 md:px-8 md:pt-36", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "section-eyebrow mb-3", children: "Portofolio" }),
          /* @__PURE__ */ jsx("h1", { className: "section-title text-3xl font-black md:text-4xl", children: "Daftar Proyek" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-500", children: "Cari dan filter proyek sesuai kebutuhan." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: copyPortfolioPrompt,
            className: "w-fit rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-500 shadow-sm transition hover:border-cyan-100 hover:text-[#0575f5]",
            children: copyStatus === "copied" ? "Prompt disalin" : "Copy prompt portfolio"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "px-4 md:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl", children: /* @__PURE__ */ jsx("div", { className: "glass-card rounded-[2rem] p-4 md:p-5", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "portfolio-search", className: "sr-only", children: "Cari proyek portofolio" }),
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "portfolio-search",
              type: "search",
              value: searchQuery,
              onChange: (event) => setSearchQuery(event.target.value),
              placeholder: "Cari proyek, teknologi, fitur...",
              className: "w-full rounded-2xl border border-cyan-100 bg-white px-12 py-3.5 text-gray-800 outline-none transition focus:border-[#10c7ee] focus:ring-4 focus:ring-cyan-100"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((category) => (() => {
          var _a;
          const count = ((_a = stats2.find((item) => item.key === category.key)) == null ? void 0 : _a.count) || 0;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(category.key),
              "aria-pressed": activeCategory === category.key,
              className: `rounded-full px-4 py-2 text-sm font-bold transition ${activeCategory === category.key ? "bg-gradient-to-r from-[#10c7ee] to-[#0575f5] text-white shadow-lg shadow-cyan-500/20" : "bg-white text-gray-700 hover:bg-cyan-100"}`,
              children: [
                category.label,
                " ",
                /* @__PURE__ */ jsxs("span", { className: "ml-1 opacity-80", children: [
                  "(",
                  count,
                  ")"
                ] })
              ]
            },
            category.key
          );
        })()) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "px-4 pt-10 md:px-8 md:pt-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-bold text-[#0575f5]", children: [
              projects.length,
              " proyek ditemukan"
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-[#142331] md:text-3xl", children: "Daftar Proyek" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "/", className: "hidden rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-bold text-[#0575f5] shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50 sm:inline-flex", children: "Kembali ke Beranda" })
        ] }),
        projects.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-5", children: projects.map((project, index) => /* @__PURE__ */ jsxs("article", { className: "group grid overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-xl shadow-[#142331]/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15 lg:grid-cols-[320px_1fr]", children: [
          /* @__PURE__ */ jsx(ProjectImageSlider, { project, index }),
          /* @__PURE__ */ jsxs("div", { className: "flex min-h-[300px] flex-col p-5 md:p-7", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-[#0575f5]", children: getCategoryLabel(project.category) }),
              project.techs.slice(0, 5).map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600", children: tech }, tech))
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black leading-snug text-[#142331] md:text-2xl", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base", children: project.desc }),
            /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-2 sm:grid-cols-2", children: project.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2 rounded-2xl bg-cyan-50/70 p-3 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#10c7ee]" }),
              /* @__PURE__ */ jsx("span", { children: feature })
            ] }, feature)) }),
            /* @__PURE__ */ jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => openProjectDetail(project),
                className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40",
                children: [
                  "Lihat Detail",
                  /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }) })
                ]
              }
            ) })
          ] })
        ] }, project.title)) }) : /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-dashed border-cyan-200 bg-white p-10 text-center shadow-xl shadow-[#142331]/5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-[#142331]", children: "Tidak ada proyek ditemukan" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-gray-600", children: "Coba gunakan kata kunci atau kategori lain." })
        ] })
      ] }) })
    ] }),
    selectedProject && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 block h-dvh overflow-y-auto bg-[#142331]/75 p-3 backdrop-blur-md sm:p-4",
        onClick: closeProjectDetail,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative mx-auto my-3 flex w-full max-w-5xl flex-col rounded-[1.5rem] bg-white shadow-2xl shadow-[#142331]/40 sm:my-4 sm:rounded-[2rem]",
            onClick: (event) => event.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#10c7ee]/25 blur-3xl" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0575f5]/20 blur-3xl" }),
              (() => {
                const modalImages = getProjectImages(selectedProject);
                return /* @__PURE__ */ jsx(ModalImageGallery, { images: modalImages, title: selectedProject.title });
              })(),
              /* @__PURE__ */ jsxs("div", { className: "relative min-w-0 bg-gradient-to-br from-[#142331] via-[#16344a] to-[#0575f5] p-5 text-white sm:p-6 md:p-8", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: closeProjectDetail,
                    className: "absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white/80 shadow-lg backdrop-blur transition hover:bg-white hover:text-[#142331]",
                    "aria-label": "Tutup modal",
                    children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black text-cyan-100 backdrop-blur", children: getCategoryLabel(selectedProject.category) }),
                /* @__PURE__ */ jsx("h3", { className: "break-words pr-10 text-2xl font-black leading-tight md:text-3xl", children: selectedProject.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-4xl text-sm leading-6 text-cyan-50/90 md:text-base", children: selectedProject.desc }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: selectedProject.techs.slice(0, 5).map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur", children: tech }, tech)) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative min-w-0 p-5 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.85fr_1.15fr]", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-cyan-100 bg-cyan-50/60 p-5", children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-sm font-black uppercase tracking-wide text-[#0575f5]", children: "Teknologi" }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: selectedProject.techs.map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-full bg-white px-3 py-1 text-sm font-bold text-[#0575f5] shadow-sm", children: tech }, tech)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5", children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-sm font-black uppercase tracking-wide text-[#142331]", children: "Kategori" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg font-black text-[#0575f5]", children: getCategoryLabel(selectedProject.category) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#142331]/5 md:p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-black text-[#142331]", children: "Fitur Utama" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: selectedProject.features.map((feature) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-gray-600", children: [
                    /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#10c7ee]" }),
                    /* @__PURE__ */ jsx("span", { children: feature })
                  ] }, feature)) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "relative border-t border-cyan-100 bg-white/90 p-4 backdrop-blur md:p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", children: [
                /* @__PURE__ */ jsx("button", { type: "button", onClick: closeProjectDetail, className: "rounded-full border border-slate-200 bg-white px-5 py-2.5 font-bold text-slate-700 transition hover:bg-slate-50", children: "Tutup" }),
                selectedProject.link && /* @__PURE__ */ jsxs("a", { href: selectedProject.link, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10c7ee] to-[#0575f5] px-5 py-2.5 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40", children: [
                  "Kunjungi Proyek",
                  /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4 4a2 2 0 012-2h4a1 1 0 110 2H6v10h8v-4a1 1 0 112 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm9-1a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 11-2 0V5.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 01-1-1z", clipRule: "evenodd" }) })
                ] })
              ] }) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(Footer, { profile: data.profile }),
    /* @__PURE__ */ jsx(ScrollToTopButton, { isScrolled })
  ] });
}
function render(route) {
  const page = route === "/portofolio" ? /* @__PURE__ */ jsx(Portfolio, {}) : /* @__PURE__ */ jsx(Home, {});
  return renderToString(page);
}
export {
  render
};
