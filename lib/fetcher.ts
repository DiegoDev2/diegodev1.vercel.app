export const fetcher = async (query: string) => {
  const res = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};
