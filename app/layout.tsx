// app/layout.tsx
import { Noto_Sans } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


const jet = JetBrains_Mono({ subsets: ["latin"] });


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
        <link rel="icon" href="/LOGOPNGG.png" />
      </head>
      <body className={jet.className}>
        {children}
      </body>
    </html>
  );
}
