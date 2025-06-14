import { sanityClient } from "@/lib/sanity.client";
import { BlogTable } from "@/components/ui/BlogTable";
import { BlogHeader } from "@/components/ui/BlogHeader";

export default async function BlogPage() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt
    }`,
  );

  return (
    <main className="max-w-4xl px-4 py-8 mx-auto">
      <BlogHeader />
      <BlogTable posts={posts} />
    </main>
  );
}
