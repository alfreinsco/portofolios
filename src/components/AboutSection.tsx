"use client";

import { useState } from "react";

interface AboutSectionProps {
  profile: any;
  experience: any[];
  education: any[];
}

export default function AboutSection({
  profile,
  experience,
  education,
}: AboutSectionProps) {
  const [cvPromptStatus, setCvPromptStatus] = useState<"idle" | "copied">(
    "idle",
  );

  const professionalSkills = [
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    { name: "React.js", url: "https://react.dev/", icon: "/img/icons/react.svg" },
    { name: "Next.js", url: "https://nextjs.org/", icon: "/img/icons/nextjs.svg" },
    { name: "Node.js", url: "https://nodejs.org/", icon: "/img/icons/node.svg" },
    {
      name: "Express.js",
      url: "https://expressjs.com/",
      icon: "https://cdn.simpleicons.org/express/000000",
    },
    {
      name: "HTML/CSS",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
      icon: "https://cdn.simpleicons.org/html5/E34F26",
    },
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "PHP", url: "https://www.php.net/", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Laravel", url: "https://laravel.com/", icon: "/img/icons/laravel.svg" },
    {
      name: "CodeIgniter",
      url: "https://codeigniter.com/",
      icon: "https://cdn.simpleicons.org/codeigniter/EF4223",
    },
    { name: "Flutter", url: "https://flutter.dev/", icon: "/img/icons/flutter.svg" },
    { name: "Dart", url: "https://dart.dev/", icon: "https://cdn.simpleicons.org/dart/0175C2" },
    {
      name: "UI/UX Design",
      url: "https://www.interaction-design.org/literature/topics/ux-design",
      icon: "https://cdn.simpleicons.org/figma/F24E1E",
    },
    { name: "Figma", url: "https://www.figma.com/", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    {
      name: "Git & GitHub",
      url: "https://github.com/",
      icon: "https://cdn.simpleicons.org/github/181717",
    },
    {
      name: "REST API",
      url: "https://restfulapi.net/",
      icon: "https://cdn.simpleicons.org/swagger/85EA2D",
    },
    {
      name: "Database Design",
      url: "https://www.postgresql.org/docs/current/ddl.html",
      icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    {
      name: "MySQL/PostgreSQL",
      url: "https://www.postgresql.org/",
      icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com/",
      icon: "https://cdn.simpleicons.org/firebase/FFCA28",
    },
    { name: "Docker", url: "https://www.docker.com/", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    {
      name: "AWS/Netlify/Vercel",
      url: "https://vercel.com/",
      icon: "https://cdn.simpleicons.org/vercel/000000",
    },
  ];

  const handleCopyCvPrompt = async () => {
    const prompt = `Buatkan CV profesional dalam bahasa Indonesia berdasarkan profil berikut. Susun dengan format ringkas, ATS-friendly, dan cocok untuk melamar posisi Full Stack Developer atau UI/UX Designer. Sertakan ringkasan profil, keahlian utama, pengalaman, pendidikan, proyek relevan, tools/teknologi, dan versi singkat untuk LinkedIn.

Profil:
${JSON.stringify(profile, null, 2)}

Pengalaman:
${JSON.stringify(experience, null, 2)}

Pendidikan:
${JSON.stringify(education, null, 2)}`;

    await navigator.clipboard.writeText(prompt);
    setCvPromptStatus("copied");
    window.setTimeout(() => setCvPromptStatus("idle"), 2000);
  };

  return (
    <section
      id="tentang"
      className="py-20 md:py-24 px-4 md:px-8 bg-gradient-to-br from-white to-cyan-50/70"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <span className="section-eyebrow mb-3">Tentang</span>
          <h2 className="section-title text-3xl md:text-4xl font-black text-center">
            Mengenal Saya Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden flex-shrink-0 border-8 border-white shadow-2xl shadow-[#142331]/20 z-10 relative">
                <img
                  src="/img/marthin1.jpeg"
                  alt="Foto Profil"
                  width={320}
                  height={320}
                  className="object-cover -translate-y-40"
                />
              </div>
              <div className="absolute w-full h-full top-5 left-5 border-8 border-[#0575f5] rounded-2xl -z-10"></div>

              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-cyan-100 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0575f5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
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
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Full Stack Developer & UI/UX Designer
            </h3>
            <p className="mb-4 text-gray-600">
              Halo! Saya adalah seorang pengembang web profesional dengan
              pengalaman lebih dari 5 tahun dalam industri teknologi. Saya
              menggabungkan keahlian teknis dengan pemahaman mendalam tentang
              desain UI/UX untuk menciptakan aplikasi yang tidak hanya berfungsi
              dengan baik, tetapi juga indah secara visual.
            </p>
            <p className="mb-6 text-gray-600">
              Saya berdedikasi untuk membangun aplikasi yang berkualitas dan
              selalu berusaha untuk belajar teknologi baru. Pendekatan saya
              berfokus pada pengguna, memastikan setiap proyek yang saya
              kerjakan tidak hanya memenuhi kebutuhan bisnis tetapi juga
              memberikan pengalaman yang luar biasa bagi pengguna akhir.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0575f5]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Nama: <span className="font-medium">Alfreinsco</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0575f5]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Email:{" "}
                  <span className="font-medium">alfreinsco@gmail.com</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0575f5]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Pendidikan:{" "}
                  <span className="font-medium">Teknik Informatika</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0575f5]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Lokasi: <span className="font-medium">Ambon, Indonesia</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0575f5]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Freelance: <span className="font-medium">Tersedia</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0575f5]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  Bahasa:{" "}
                  <span className="font-medium">Indonesia, Inggris</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopyCvPrompt}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:border-cyan-200 hover:bg-cyan-50 hover:text-[#0575f5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M4 13.5V16h12v-2.5M6.5 7.5 10 4m0 0 3.5 3.5M10 4v9"
                  />
                </svg>
                {cvPromptStatus === "copied"
                  ? "Prompt CV disalin"
                  : "Buat prompt CV"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Keahlian Profesional
          </h3>
          <div className="rounded-3xl border border-cyan-100 bg-white/80 p-6 shadow-lg shadow-cyan-900/5">
            <div className="flex flex-wrap justify-center gap-3">
              {professionalSkills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka website resmi ${skill.name}`}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50/80 px-4 py-2 text-sm font-medium text-[#0575f5] transition-all hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-white hover:shadow-md hover:shadow-cyan-900/10"
                >
                  <img
                    src={skill.icon}
                    alt=""
                    className="h-4 w-4 rounded-sm object-contain"
                    loading="lazy"
                  />
                  {skill.name}
                </a>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
              Keahlian yang digunakan secara fleksibel sesuai kebutuhan proyek,
              mulai dari perancangan antarmuka, pengembangan aplikasi, integrasi
              API, hingga pengelolaan database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
