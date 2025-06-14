"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Geist, Geist_Mono } from "next/font/google";
import { Clock, Calendar } from "lucide-react";

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
      <h1 className="text-4xl font-bold mb-2 text-center">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-white font-[var(--font-geist-mono)]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-white/20 pl-4 italic text-white/80 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold font-[var(--font-geist)]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic font-[var(--font-geist)]">{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-white underline hover:text-white/70"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-5 mb-4 font-[var(--font-geist)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-5 mb-4 font-[var(--font-geist)]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-1 font-[var(--font-geist)]">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-1 font-[var(--font-geist)]">{children}</li>
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
      className={`relative py-16 border border-white/10 bg-black px-40 text-white ${geist.variable} ${geistMono.variable}`}
      style={{ borderRadius: 0, maxWidth: "100%", width: "100%" }}
    >
      <div className="absolute top-[-16px] left-[-16px] text-white text-4xl select-none">
        +
      </div>
      <div className="absolute bottom-[-16px] right-[-16px] text-white py-16 font-thin text-4xl select-none">
        +
      </div>

      <h1 className="text-4xl font-semibold text-center mb-4">{title}</h1>

      <div className="flex items-center justify-center gap-4 mb-8">
        <Image
          src="https://github.com/diegodev2.png"
          alt="Diegodev2"
          width={30}
          height={30}
          className="rounded-full border border-white/10"
        />
        <div className="text-center flex items-center gap-2">
          <p className="font-semibold font-[var(--font-geist)]">DiegoDev2</p>
          <p className="text-white/60 text-sm font-[var(--font-geist-mono)]">
            SWD-SRE
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center text-white/60 text-sm py-10 font-[var(--font-geist-mono)]">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>2 min read</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{formattedDate}</span>
        </div>
      </div>

      <article className="relative z-10 max-w-full  font-[var(--font-geist-mono)] text-white">
        <PortableText value={value} components={components} />
      </article>
    </div>
  );
}
