import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "d0xtwzoe",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
