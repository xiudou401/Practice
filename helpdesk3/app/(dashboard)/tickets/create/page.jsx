'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Create() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = { title, body, priority };
    const res = await fetch(`http://localhost:4000/tickets`, {
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
        Priority:
        <select
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          value={priority}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </label>
      {isLoading ? (
        <span>Adding...</span>
      ) : (
        <span>
          <button className="btn-primary">Add ticket</button>
        </span>
      )}
    </form>
  );
}
