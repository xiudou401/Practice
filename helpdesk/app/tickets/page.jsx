import React, { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';

export default function Tickets() {
  return (
    <main>
      <h2>Tickets</h2>
      <p>
        <small>Currently open tickets.</small>
      </p>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
