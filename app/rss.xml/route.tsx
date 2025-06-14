import { sanityClient } from "@/lib/sanity.client";
import { Feed } from "feed";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      title, slug, excerpt, publishedAt
    }`,
  );

  const siteUrl = "https://diegodev1.vercel.app";
  const feed = new Feed({
    title: "DiegoDev Blog",
    description: "Personal blog",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    updated: new Date(posts[0]?.publishedAt || new Date()),
    author: {
      name: "Dieguito.k8s",
      link: siteUrl,
    },
    copyright: `All rights reserved ${new Date().getFullYear()}, Dieguito.k8s`,
  });

  posts.forEach((post: any) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug.current}`,
      link: `${siteUrl}/blog/${post.slug.current}`,
      description: post.excerpt,
      date: new Date(post.publishedAt),
    });
  });

  return new NextResponse(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
