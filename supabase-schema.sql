create table if not exists public.site_settings (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);

alter table public.site_settings enable row level security;

drop policy if exists "Public read site settings" on public.site_settings;
create policy "Public read site settings"
on public.site_settings
for select
to anon
using (true);

drop policy if exists "Public insert site settings" on public.site_settings;
create policy "Public insert site settings"
on public.site_settings
for insert
to anon
with check (true);

drop policy if exists "Public update site settings" on public.site_settings;
create policy "Public update site settings"
on public.site_settings
for update
to anon
using (true)
with check (true);
