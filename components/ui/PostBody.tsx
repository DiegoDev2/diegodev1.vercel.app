"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Geist, Geist_Mono } from "next/font/google";
import { Clock, Calendar } from "lucide-react";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200"],
  variable: "--font-geist-mono",
});

type Props = {
  title: string;
  publishedAt: string;
  value: PortableTextBlock[];
};

const CodeBlock = ({ language, code }: { language: string; code: string }) => (
  <SyntaxHighlighter
    language={language}
    style={atomDark}
    showLineNumbers
    wrapLines
    customStyle={{
      borderRadius: 0,
      padding: "1rem",
      fontSize: "0.9rem",
      fontFamily: "var(--font-geist-mono)",
      backgroundColor: "#000000",
      margin: "1rem 0",
      border: "1px  solid #222",
    }}
  >
    {code.trim()}
  </SyntaxHighlighter>
);

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={value?.asset?.url}
        alt={value.alt || "Post image"}
        className="border border-white/10 my-4 w-full"
        style={{ borderRadius: 0 }}
      />
    ),
    codeBlock: ({ value }) => (
      <CodeBlock language={value.language || "text"} code={value.code || ""} />
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1
        className={`${geist.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`${geist.className} text-2xl sm:text-3xl font-semibold mb-3`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`${geist.className} text-xl sm:text-2xl font-semibold mb-2`}
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className={`${geist.className} mb-4 leading-relaxed text-white`}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={`${geist.className} border-l-4 border-white/20 pl-4 italic text-white/80 my-4`}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className={`${geist.className} font-bold`}>{children}</strong>
    ),
    em: ({ children }) => (
      <em className={`${geist.className} italic`}>{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        className={`${geist.className} text-white underline hover:text-white/70`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className={`${geist.className} list-disc ml-5 mb-4`}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className={`${geist.className} list-decimal ml-5 mb-4`}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className={`${geist.className} mb-1`}>{children}</li>
    ),
    number: ({ children }) => (
      <li className={`${geist.className} mb-1`}>{children}</li>
    ),
  },
};

export function PostBody({ title, publishedAt, value }: Props) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className={`relative text-[#EDEDED] tracking-tight py-16 border border-white/15 bg-black px-6 md:px-16 lg:px-40 ${geist.variable} ${geistMono.variable}`}
      style={{ borderRadius: 0, maxWidth: "100%", width: "100%" }}
    >
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <div className="flex gap-8 md:gap-32 lg:gap-64 px-4 md:px-16">
          <hr className="w-px h-full bg-neutral-800 border-dotted" />
          <hr className="w-px h-full bg-neutral-800 border-dotted" />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto leading-relaxed">
        <div className="flex justify-center mb-4">
          <div className={`${geist.className} flex items-center gap-1 text-sm`}>
            <Link
              href="/blog"
              className="text-white/40 hover:text-white transition-colors hover:underline"
            >
              Blog
            </Link>
            <span className="text-white/50">/</span>
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors hover:underline"
            >
              Portafolio
            </Link>
          </div>
        </div>

        <h1
          className={`${geist.className} text-[#EDEDED] tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4`}
        >
          {title}
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Image
            src="https://github.com/diegodev2.png"
            alt="Diegodev2"
            width={30}
            height={30}
            className="rounded-full border border-white/10"
          />
          <div className="text-center flex flex-col sm:flex-row items-center gap-2">
            <p className="font-semibold font-[var(--font-geist)]">DiegoDev2</p>
            <p className={`${geist.className} text-white/60 text-sm`}>
              SWD-SRE
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-white/60 text-sm py-10 font-[var(--font-geist-mono)] gap-2">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>2 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{formattedDate}</span>
          </div>
        </div>

        <article
          className={`relative z-10 max-w-full text-white ${geist.className}`}
        >
          <PortableText value={value} components={components} />
        </article>
      </div>
    </div>
  );
}
