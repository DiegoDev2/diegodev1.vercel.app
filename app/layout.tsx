import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import { Inter } from "next/font/google"
import "./globals.css";


const pixelify_Sans = Pixelify_Sans({subsets: ["latin"]});
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DiegoDev1",
  description: "DiegoDev1 Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixelify_Sans.className}>{children}</body>
    </html>
  );
}
