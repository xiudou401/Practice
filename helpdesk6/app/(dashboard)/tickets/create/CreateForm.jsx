'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function CreateForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');

  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newTicket = {
      title,
      body,
      priority,
      user_email: 'mario@netninja.dev',
    };
    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTicket),
    });

    if (res.ok) {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <form onSubmit={handleClick}>
      <label>
        <span>Title:</span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </label>
      <button className="btn-primary">
        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
      </button>
    </form>
  );
}
