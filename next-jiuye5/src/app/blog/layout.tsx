export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-10 max-w-xl mx-auto ">{children}</div>;
}
