import Link from "next/link";

export function BlogHeader() {
  return (
    <div className="flex items-center justify-between pb-4 mb-6 border-b">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <Link
        href="/rss.xml"
        className="text-sm text-muted-foreground hover:underline"
      >
        RSS
      </Link>
    </div>
  );
}
