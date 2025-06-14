import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";

const p = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      <head></head>
      <body cz-shortcut-listen="true" className={p.className}>
        <Header />
        {children}
        <Analytics />:
      </body>
    </html>
  );
}
