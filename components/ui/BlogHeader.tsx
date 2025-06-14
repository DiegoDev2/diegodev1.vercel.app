"use client";

import Link from "next/link";
import { Rss, Search } from "lucide-react";

const categories = [
  "All Posts",
  "Engineering",
  "Devops",
  "Frontend",
  "Self-hosted",
  "v0",
  "Changelog",
  "General",
];

export function BlogHeader({
  query,
  setQuery,
  active,
  setActive,
}: {
  query: string;
  setQuery: (val: string) => void;
  active: string;
  setActive: (val: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-6 mb-10 px-4">
      <div className="flex flex-wrap items-center gap-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm transition rounded-full px-4 py-1 ${
              active === cat
                ? "bg-neutral-100 text-black dark:bg-neutral-200"
                : "text-white hover:text-neutral-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search posts"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-neutral-900 border border-neutral-800 text-sm text-white rounded-full pl-8 pr-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-neutral-700"
          />
        </div>
        <Link
          href="/rss.xml"
          className="p-2 rounded-full hover:bg-neutral-800 transition"
        >
          <Rss className="w-4 h-4 text-neutral-400 hover:text-white" />
        </Link>
      </div>
    </div>
  );
}
