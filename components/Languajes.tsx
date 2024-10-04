import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodejs",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "kubernetes",
  "astro",
  "tailwindcss",
  "c",
  "cplusplus",
  "go",
  "rust",

];

export function IconCloudDemo() {
  return (
    <div className="relative text-white flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs}/>
    </div>
  );

}
export default IconCloudDemo;
