import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity.client";

export async function POST(req: Request) {
  const { query } = await req.json();

  const posts = await sanityClient.fetch(query);

  return NextResponse.json(posts);
}
