import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import NavBar from '../components/NavBar';

export default async function DashboardLayout({ children }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <NavBar user={user} />
      {children}
    </>
  );
}
