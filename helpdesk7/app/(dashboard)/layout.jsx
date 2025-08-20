import NavBar from '../components/NavBar';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <NavBar />
      <body>{children}</body>
    </html>
  );
}
