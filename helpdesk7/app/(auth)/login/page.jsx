'use client';

import React, { useReducer, useState } from 'react';
import AuthForm from '../AuthForm';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError('');
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push('/');
    }
  };
  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}
    </main>
  );
}
