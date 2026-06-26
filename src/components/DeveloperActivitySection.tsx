interface DeveloperActivitySectionProps {
  activity: {
    githubUsername: string;
    githubContributionsUrl: string;
    githubStatsUrl: string;
    githubStreakUrl: string;
    githubTopLanguagesUrl: string;
    githubProfileUrl: string;
    wakatimeUsername: string;
    wakatimeActivityUrl: string;
    wakatimeLanguagesUrl: string;
    wakatimeProfileUrl: string;
  };
}

export default function DeveloperActivitySection({
  activity,
}: DeveloperActivitySectionProps) {
  const hasWakatimeEmbed = Boolean(
    activity.wakatimeActivityUrl &&
    !activity.wakatimeActivityUrl.endsWith("/last_year.svg"),
  );
  const hasWakatimeLanguages = Boolean(activity.wakatimeLanguagesUrl);

  return (
    <section
      id="aktivitas"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-cyan-50/70"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className="section-eyebrow mb-3">Aktivitas Developer</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-black text-center">
            Coding Activity Last Year
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#10c7ee] to-[#0575f5] mt-3 md:mt-4 rounded-full"></div>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 text-center max-w-3xl px-2">
            Ringkasan aktivitas coding dari WakaTime dan kontribusi GitHub
            selama satu tahun terakhir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#0575f5]">WakaTime</p>
                <h3 className="text-xl font-black text-[#142331]">
                  Activity Last Year
                </h3>
              </div>
              <a
                href={activity.wakatimeProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]"
              >
                @{activity.wakatimeUsername}
              </a>
            </div>
            {hasWakatimeEmbed ? (
              <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-white p-3 shadow-inner">
                <img
                  src={activity.wakatimeActivityUrl}
                  alt="WakaTime activity last year"
                  className="min-h-64 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-cyan-200 bg-cyan-50/70 p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg shadow-cyan-500/10">
                  ⏱️
                </div>
                <h4 className="text-lg font-black text-[#142331]">
                  Tambahkan Share URL WakaTime
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Buat chart publik dari WakaTime, pilih Coding Activity Last
                  Year format SVG, lalu tempel URL-nya di file data.
                </p>
                <div className="mt-4 rounded-2xl bg-white p-3 text-left font-mono text-xs text-gray-600">
                  src/data/developerActivity.ts → wakatimeActivityUrl
                </div>
                <a
                  href="https://wakatime.com/share/embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-[#0575f5] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#045fd0]"
                >
                  Buat Embed WakaTime
                </a>
              </div>
            )}
          </div>

          <div className="glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#0575f5]">WakaTime</p>
                <h3 className="text-xl font-black text-[#142331]">
                  Languages Last Year
                </h3>
              </div>
              <a
                href={activity.wakatimeProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]"
              >
                Languages
              </a>
            </div>
            {hasWakatimeLanguages ? (
              <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-white p-3 shadow-inner">
                <img
                  src={activity.wakatimeLanguagesUrl}
                  alt="WakaTime languages over the last year"
                  className="min-h-64 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-cyan-200 bg-cyan-50/70 p-6 text-center text-sm text-gray-600">
                Tambahkan URL SVG languages di{" "}
                <span className="font-mono">src/data/developerActivity.ts</span>
                .
              </div>
            )}
          </div>

          <div className="glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#0575f5]">GitHub</p>
                <h3 className="text-xl font-black text-[#142331]">
                  GitHub Streak
                </h3>
              </div>
              <a
                href={activity.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]"
              >
                View Profile
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/50 to-white p-4 shadow-inner">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#10c7ee]/20 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#0575f5]/15 blur-3xl"></div>
              <a
                href={activity.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex justify-center overflow-x-auto rounded-2xl bg-white/85 p-3 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:shadow-cyan-500/20"
              >
                <img
                  src={activity.githubStreakUrl}
                  alt="GitHub Streak"
                  className="min-h-48 w-full max-w-xl object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-5 md:p-7 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/15">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#0575f5]">GitHub</p>
                <h3 className="text-xl font-black text-[#142331]">
                  Contributions Last Year
                </h3>
              </div>
              <a
                href={activity.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#142331] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0575f5]"
              >
                @{activity.githubUsername}
              </a>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-cyan-100 bg-white p-4 shadow-inner">
              <img
                src={activity.githubContributionsUrl}
                alt="GitHub contributions in the last year"
                className="min-h-36 min-w-[720px] object-contain"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Grafik kontribusi mengikuti data publik GitHub dari username{" "}
              {activity.githubUsername}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
