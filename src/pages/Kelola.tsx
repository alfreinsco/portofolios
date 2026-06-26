import { FormEvent, useEffect, useMemo, useState } from 'react';
import { DatabaseType, getData } from '../utils/data';
import { loadSiteData, saveSiteData } from '../utils/siteData';

type SectionKey = keyof DatabaseType;
type SaveStatus = 'idle' | 'loading' | 'success' | 'error';
type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

type MenuItem = {
  key: SectionKey;
  label: string;
  description: string;
};

type DynamicFieldProps = {
  label: string;
  value: JsonValue;
  depth?: number;
  onChange: (value: JsonValue) => void;
};

const menuItems: MenuItem[] = [
  { key: 'profile', label: 'Profil & Kontak', description: 'Nama, bio, kontak, avatar, sosial media' },
  { key: 'skills', label: 'Keahlian', description: 'Programming, design, dan skill lain' },
  { key: 'experience', label: 'Pengalaman', description: 'Riwayat pekerjaan atau project' },
  { key: 'education', label: 'Pendidikan', description: 'Riwayat pendidikan' },
  { key: 'services', label: 'Layanan', description: 'Daftar layanan yang ditawarkan' },
  { key: 'portfolio', label: 'Portofolio', description: 'Project, teknologi, gambar, fitur' },
  { key: 'testimonials', label: 'Testimonial', description: 'Ulasan klien atau partner' },
  { key: 'stats', label: 'Statistik', description: 'Angka proyek, klien, pengalaman' },
];

const labelize = (label: string) => label
  .replace(/([A-Z])/g, ' $1')
  .replace(/_/g, ' ')
  .replace(/^./, (char) => char.toUpperCase());

const createEmptyValue = (sample?: JsonValue): JsonValue => {
  if (Array.isArray(sample)) {
    return sample.length > 0 ? createEmptyValue(sample[0]) : '';
  }

  if (sample && typeof sample === 'object') {
    return Object.fromEntries(
      Object.entries(sample).map(([key, value]) => [key, createEmptyValue(value)]),
    ) as JsonObject;
  }

  if (typeof sample === 'number') return 0;
  if (typeof sample === 'boolean') return false;
  return '';
};

const cloneValue = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

function DynamicField({ label, value, depth = 0, onChange }: DynamicFieldProps) {
  const displayLabel = labelize(label);

  if (Array.isArray(value)) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-black text-slate-900">{displayLabel}</h3>
            <p className="text-sm text-slate-500">Total {value.length} item</p>
          </div>
          <button
            type="button"
            onClick={() => onChange([...value, createEmptyValue(value[0])])}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
          >
            + Tambah Item
          </button>
        </div>

        <div className="space-y-4">
          {value.map((item, index) => (
            <div key={index} className="rounded-3xl border border-white bg-white p-4 shadow-lg shadow-slate-900/5">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-black text-slate-700">Item {index + 1}</span>
                <button
                  type="button"
                  onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}
                  className="rounded-full bg-red-50 px-3 py-1.5 text-sm font-bold text-red-600 transition hover:bg-red-100"
                >
                  Hapus
                </button>
              </div>
              <DynamicField
                label={`${label}-${index}`}
                value={item}
                depth={depth + 1}
                onChange={(nextValue) => onChange(value.map((current, itemIndex) => itemIndex === index ? nextValue : current))}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (value && typeof value === 'object') {
    return (
      <div className={`${depth === 0 ? 'space-y-5' : 'rounded-3xl border border-slate-100 bg-white p-4'} `}>
        {depth > 0 && <h3 className="mb-4 font-black text-slate-900">{displayLabel}</h3>}
        <div className="grid gap-5 sm:grid-cols-2">
          {Object.entries(value).map(([key, childValue]) => {
            const isWide = Array.isArray(childValue) || (childValue && typeof childValue === 'object') || key === 'bio' || key === 'description' || key === 'text' || key === 'desc';

            return (
              <div key={key} className={isWide ? 'sm:col-span-2' : ''}>
                <DynamicField
                  label={key}
                  value={childValue}
                  depth={depth + 1}
                  onChange={(nextValue) => onChange({ ...(value as JsonObject), [key]: nextValue })}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (typeof value === 'boolean') {
    return (
      <label className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <span className="font-bold text-slate-700">{displayLabel}</span>
        <button
          type="button"
          onClick={() => onChange(!value)}
          className={`relative h-7 w-12 rounded-full transition ${value ? 'bg-blue-600' : 'bg-slate-300'}`}
        >
          <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${value ? 'left-6' : 'left-1'}`}></span>
        </button>
      </label>
    );
  }

  const isLongText = String(value ?? '').length > 90 || ['bio', 'description', 'text', 'desc'].includes(label);

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">{displayLabel}</span>
      {isLongText ? (
        <textarea
          value={String(value ?? '')}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      ) : (
        <input
          type={typeof value === 'number' ? 'number' : 'text'}
          value={String(value ?? '')}
          onChange={(event) => onChange(typeof value === 'number' ? Number(event.target.value) : event.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      )}
    </label>
  );
}

export default function Kelola() {
  const initialDatabase = useMemo(() => getData(), []);
  const [database, setDatabase] = useState<DatabaseType>(initialDatabase);
  const [activeSection, setActiveSection] = useState<SectionKey>('profile');
  const [sectionDraft, setSectionDraft] = useState<JsonValue>(() => cloneValue(initialDatabase.profile) as JsonValue);
  const [status, setStatus] = useState<SaveStatus>('idle');
  const [message, setMessage] = useState('');
  const [showJsonPreview, setShowJsonPreview] = useState(false);

  const activeMenu = menuItems.find((item) => item.key === activeSection) || menuItems[0];

  useEffect(() => {
    const loadDatabase = async () => {
      try {
        const data = await loadSiteData();
        setDatabase(data);
        setSectionDraft(cloneValue(data[activeSection]) as JsonValue);
      } catch {
        setMessage('Gagal mengambil data Supabase. Aplikasi memakai database.json sebagai fallback.');
      }
    };

    loadDatabase();
  }, []);

  const changeSection = (section: SectionKey) => {
    setActiveSection(section);
    setSectionDraft(cloneValue(database[section]) as JsonValue);
    setStatus('idle');
    setMessage('');
    setShowJsonPreview(false);
  };

  const handleResetSection = () => {
    setSectionDraft(cloneValue(database[activeSection]) as JsonValue);
    setStatus('idle');
    setMessage('Perubahan pada section ini dibatalkan.');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const nextDatabase = {
        ...database,
        [activeSection]: sectionDraft,
      } as DatabaseType;

      const data = await saveSiteData(nextDatabase);

      setDatabase(data);
      setSectionDraft(cloneValue(data[activeSection]) as JsonValue);
      setStatus('success');
      setMessage(`${activeMenu.label} berhasil disimpan ke Supabase.`);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Gagal menyimpan database.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-80 border-r border-white/70 bg-slate-950 text-white shadow-2xl shadow-slate-950/20 lg:block">
        <div className="flex h-full flex-col p-6">
          <a href="/" className="mb-8 inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-500/20">
              <img src="/img/logo-alfreinsco.png" alt="Alfreinsco" className="h-full w-full object-cover" />
            </span>
            <span>
              <span className="block text-lg font-black">Kelola</span>
              <span className="text-sm text-slate-400">Portfolio Admin</span>
            </span>
          </a>

          <nav className="space-y-2 overflow-y-auto pr-1">
            {menuItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => changeSection(item.key)}
                className={`w-full rounded-2xl px-4 py-3 text-left transition ${activeSection === item.key ? 'bg-white/10 text-white shadow-lg shadow-black/10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
              >
                <span className="flex items-center gap-3 font-semibold">
                  <span className={`h-2.5 w-2.5 rounded-full ${activeSection === item.key ? 'bg-blue-400' : 'bg-slate-700'}`}></span>
                  {item.label}
                </span>
                <span className="mt-1 block pl-5 text-xs text-slate-500">{item.description}</span>
              </button>
            ))}
          </nav>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            Semua menu menyimpan perubahan langsung ke <span className="font-semibold text-white">Supabase</span>, cocok untuk deploy Vercel.
          </div>
        </div>
      </aside>

      <main className="lg:pl-80">
        <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-blue-600">Dashboard Kelola</p>
              <h1 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">Kelola Semua Data Website</h1>
            </div>
            <a href="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
              Lihat Website
            </a>
          </div>
        </header>

        <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 grid gap-3 lg:hidden">
              <label className="text-sm font-bold text-slate-700">Pilih Data</label>
              <select
                value={activeSection}
                onChange={(event) => changeSection(event.target.value as SectionKey)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                {menuItems.map((item) => (
                  <option key={item.key} value={item.key}>{item.label}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
              <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur sm:p-8">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">{activeMenu.label}</span>
                    <h2 className="mt-4 text-2xl font-black text-slate-900">Form Kelola Data</h2>
                    <p className="mt-2 max-w-2xl text-slate-600">Edit data lewat form. Untuk daftar seperti portofolio, gunakan tombol tambah/hapus item.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => setShowJsonPreview((current) => !current)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                      {showJsonPreview ? 'Sembunyikan JSON' : 'Lihat JSON'}
                    </button>
                    <button type="button" onClick={handleResetSection} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">Reset Section</button>
                  </div>
                </div>

                <DynamicField label={activeSection} value={sectionDraft} onChange={setSectionDraft} />

                {showJsonPreview && (
                  <pre className="mt-6 max-h-96 overflow-auto rounded-3xl bg-slate-950 p-5 text-sm leading-6 text-blue-50">
                    {JSON.stringify(sectionDraft, null, 2)}
                  </pre>
                )}

                {message && (
                  <div className={`mt-6 rounded-2xl px-4 py-3 text-sm font-semibold ${status === 'error' ? 'bg-red-50 text-red-700' : status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                    {message}
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button type="submit" disabled={status === 'loading'} className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-bold text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60">
                    {status === 'loading' ? 'Menyimpan...' : `Simpan ${activeMenu.label}`}
                  </button>
                </div>
              </form>

              <aside className="space-y-6">
                <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
                  <p className="text-sm font-bold text-blue-300">Ringkasan Data</p>
                  <div className="mt-5 grid gap-3 text-sm">
                    {menuItems.map((item) => {
                      const value = database[item.key];
                      const total = Array.isArray(value) ? value.length : typeof value === 'object' && value !== null ? Object.keys(value).length : 1;

                      return (
                        <button key={item.key} type="button" onClick={() => changeSection(item.key)} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-white/10">
                          <span className="font-semibold text-slate-200">{item.label}</span>
                          <span className="rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-200">{total}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-6 text-sm text-blue-900">
                  <p className="font-black">Cara Menyimpan</p>
                  <p className="mt-2 leading-relaxed">Buka <span className="font-bold">/kelola</span>, pilih section, ubah field lewat form, lalu klik simpan. Data akan tersimpan online di Supabase.</p>
                </div>

                <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-6 text-sm text-amber-900">
                  <p className="font-black">Tips</p>
                  <p className="mt-2 leading-relaxed">Untuk data daftar seperti portfolio/testimonial, tombol <span className="font-bold">Tambah Item</span> akan membuat item baru mengikuti struktur item pertama.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
