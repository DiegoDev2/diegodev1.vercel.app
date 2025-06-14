"use client";

import { useState } from "react";
import { BlogHeader } from "./BlogHeader";
import { BlogTable } from "./BlogTable";
import { LenisProvider } from "./LenisProvider";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  category?: string;
};

export function BlogClient({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filtered = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All Posts" || post.category === activeCategory;
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <LenisProvider />
      <BlogHeader
        query={query}
        setQuery={setQuery}
        active={activeCategory}
        setActive={setActiveCategory}
      />
      <BlogTable posts={filtered} />
    </>
  );
}
