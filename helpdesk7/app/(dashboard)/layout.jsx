import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import NavBar from '../components/NavBar';

export default async function DashboardLayout({ children }) {
  const allCookies = cookies().getAll();
  console.log('server cookies:', allCookies);
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log('server user:', user);

  return (
    <>
      <NavBar user={user} />
      {children}
    </>
  );
}
