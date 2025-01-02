import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";



const p = Poppins( {
   weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], 
   subsets: [ 'latin' ],
  
  } );

export const metadata = {
  title: "DiegoDev1",
  description: "DiegoDev1 Portafolio",
  image: "/LOGOPNGG.png",
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
      <body className={p.className}>
        {children}
        <Analytics />:
      </body>
    </html>
  );
}
