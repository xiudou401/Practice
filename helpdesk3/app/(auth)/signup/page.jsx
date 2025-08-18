'use client';

import React, { useState } from 'react';
import AuthForm from '../AuthForm';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const supabase = createClient();
  const router = useRouter();
  const [error, setError] = useState('');
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp(
      { email, password },
      {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      }
    );

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push('/verify');
    }
  };
  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
