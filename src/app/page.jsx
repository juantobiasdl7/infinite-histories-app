import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { SupabaseClient } from '@supabase/supabase-js';



export default async function Home() {

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = new SupabaseClient(supabaseUrl, supabaseAnonKey);

  const {data: words} = await supabase.from('words').select('*').order('id', {ascending: true});

  return (
    <pre>{JSON.stringify(words, null, 2)}</pre>
  );
}
