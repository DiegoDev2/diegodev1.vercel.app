"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
};

export function BlogTable({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Filter posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 text-sm border rounded-md border-muted"
      />
      <Table>
        <TableCaption>A list of published posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">User</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Excerpt</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((post) => (
            <TableRow key={post._id}>
              <TableCell>
                <Image
                  src="https://github.com/diegodev2.png"
                  alt="PFP"
                  width={30}
                  height={30}
                  unoptimized
                  className="rounded-full border-2 border-muted border-green-400"
                />
              </TableCell>
              <TableCell>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {post.excerpt}
              </TableCell>
              <TableCell className="text-right">
                {new Date(post.publishedAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total: {filtered.length} posts</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
