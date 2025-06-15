import { BlogClient } from "@/components/ui/BlogClient";
import { Geist } from "next/font/google";

const g = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function BlogPage() {
  return (
    <main className={`w-full py-36 mx-auto ${g.className}`}>
      <section className="section-down-gradient" />
      <BlogClient />
    </main>
  );
}
