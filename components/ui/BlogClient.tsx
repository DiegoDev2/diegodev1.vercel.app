"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import { BlogHeader } from "./BlogHeader";
import { BlogTable } from "./BlogTable";
import { LenisProvider } from "./LenisProvider";
import { Skeleton } from "@/components/ui/skeleton";
import { fetcher } from "@/lib/fetcher";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  category?: string;
};

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, excerpt, publishedAt, category
}`;

function SkeletonRow() {
  return (
    <div className="flex items-center gap-4 py-2 px-2 md:px-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="h-4 w-[120px]" />
      <Skeleton className="h-4 w-[200px] hidden md:block" />
      <Skeleton className="h-4 w-[80px] ml-auto" />
    </div>
  );
}

export function BlogClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [hasWaited, setHasWaited] = useState(false);

  const { data: posts, error } = useSWR<Post[]>(query, fetcher, {
    refreshInterval: 5000,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasWaited(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const filtered = posts?.filter((post) => {
    const matchesCategory =
      activeCategory === "All Posts" || post.category === activeCategory;
    const matchesQuery = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  if (error) {
    return (
      <div className="text-red-500 text-center py-10">
        Error al cargar los posts.
      </div>
    );
  }

  const shouldShowSkeleton = !hasWaited || !posts;

  return (
    <>
      <LenisProvider />
      <BlogHeader
        query={searchQuery}
        setQuery={setSearchQuery}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      {shouldShowSkeleton ? (
        <div className="space-y-4 px-4 md:px-8">
          {[...Array(5)].map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </div>
      ) : (
        <BlogTable posts={filtered!} />
      )}
    </>
  );
}
