import React from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>DashBoard Layout</h2>
      {children}
    </div>
  );
}
