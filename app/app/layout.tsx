import "./globals.css";

export const metadata = {
  title: "Silken Falcon",
  description: "Discreet access to rare luxury goods and experiences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-zinc-100">{children}</body>
    </html>
  );
}
