export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <header className="h-90 w-full bg-green-500">t</header> */}
      {children}
    </>
  );
}
