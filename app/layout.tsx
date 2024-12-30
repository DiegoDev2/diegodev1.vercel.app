import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
        <Analytics />:
      </body>
    </html>
  );
}
