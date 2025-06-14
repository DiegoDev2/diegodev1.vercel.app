import { sanityClient } from "@/lib/sanity.client";
import { BlogClient } from "@/components/ui/BlogClient";
import { Geist } from "next/font/google";

const g = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function BlogPage() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, category
    }`,
  );

  return (
    <main className={`w-full py-36 mx-auto ${g.className}`}>
      <section className="section-down-gradient" />
      <BlogClient posts={posts} />
    </main>
  );
}
