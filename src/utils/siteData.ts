import { DatabaseType, getData } from './data';
import { supabase } from './supabase';

const TABLE_NAME = 'site_settings';
const ROW_ID = 'main';

type SiteSettingsRow = {
  id: string;
  data: DatabaseType;
  updated_at?: string;
};

const hasSupabaseEnv = () => Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

export async function loadSiteData(): Promise<DatabaseType> {
  if (!hasSupabaseEnv()) {
    return getData();
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('data')
    .eq('id', ROW_ID)
    .maybeSingle<Pick<SiteSettingsRow, 'data'>>();

  if (error) {
    console.warn('Gagal mengambil data Supabase, memakai database.json:', error.message);
    return getData();
  }

  return data?.data || getData();
}

export async function saveSiteData(database: DatabaseType): Promise<DatabaseType> {
  if (!hasSupabaseEnv()) {
    throw new Error('Supabase env belum lengkap. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_PUBLISHABLE_KEY.');
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .upsert(
      {
        id: ROW_ID,
        data: database,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'id' },
    )
    .select('data')
    .single<Pick<SiteSettingsRow, 'data'>>();

  if (error) {
    throw new Error(error.message);
  }

  return data.data;
}
