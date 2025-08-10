export const metadata = {
  title: "Private Acquisition Office",
  description: "Discreet luxury sourcing & lifestyle management for Dubai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/app/globals.css" />
        {children}
      </body>
    </html>
  );
}
