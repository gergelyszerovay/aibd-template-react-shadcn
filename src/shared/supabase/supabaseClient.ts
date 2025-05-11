import { createClient } from '@supabase/supabase-js';
import type { Database } from './Database';

const supabaseUrl = import.meta.env['VITE_SUPABASE_URL'] as string;
const supabaseAnonKey = import.meta.env['VITE_SUPABASE_ANON_KEY'] as string;

console.log('Initializing Supabase client with URL:', supabaseUrl.slice(0, 10) + '...');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing!');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
  global: {
    headers: {
      'x-application-name': 'my-app',
    },
  },
});
