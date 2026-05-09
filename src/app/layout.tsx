import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "galaxyvim",
  description: "A modern Neovim configuration built for productivity and a clean development experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
