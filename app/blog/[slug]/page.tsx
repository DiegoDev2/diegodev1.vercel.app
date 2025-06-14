import { sanityClient } from "@/lib/sanity.client";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/ui/PostBody";
import { type Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title }`,
    { slug: params.slug },
  );

  return {
    title: post?.title ?? "Post",
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      publishedAt
    }`,
    { slug: params.slug },
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
