// app/layout.tsx
import { Noto_Sans } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({ subsets: ["latin"] });
const inter = Inter_Tight({ subsets: ["latin"] });

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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
