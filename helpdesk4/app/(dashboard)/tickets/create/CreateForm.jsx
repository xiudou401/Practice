'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default async function CreateForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const newTicket = { title, body, priority };

  const handleSubmit = async (e) => {
    const res = await fetch('http://localhost:4000/tickets', {
      method: 'post',
      body: JSON.stringify(newTicket),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? <span>Add...</span> : <span>Add ticket</span>}
      </button>
    </form>
  );
}
