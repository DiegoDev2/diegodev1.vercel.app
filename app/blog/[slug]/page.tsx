import { sanityClient } from "@/lib/sanity.client";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/ui/PostBody";
import { type Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title }`,
    { slug },
  );

  return {
    title: post?.title ?? "Post",
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      publishedAt
    }`,
    { slug },
  );

  if (!post) return notFound();

  return (
    <main className="max-w-[1100px] mx-auto px-4 py-12">
      <PostBody
        title={post.title}
        publishedAt={post.publishedAt}
        value={post.body}
      />
    </main>
  );
}
