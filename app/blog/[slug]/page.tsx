import { sanityClient } from "@/lib/sanity.client";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/ui/PostBody";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
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
