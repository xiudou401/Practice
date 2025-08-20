'use client';

import React, { useState } from 'react';
import AuthForm from '../AuthForm';

export default function Login() {
  const [error, setError] = useState('');
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}
    </main>
  );
}
