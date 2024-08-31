// app/layout.tsx
import { Pixelify_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";


const pixelify_Sans = Pixelify_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DiegoDev1",
  description: "DiegoDev1 Portafolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gojo.webp" />
      </head>
      <body className={pixelify_Sans.className}>
        {children}
      </body>
    </html>
  );
}
