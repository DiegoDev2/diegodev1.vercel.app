import { ChevronRight } from "lucide-react";

export default function ContactButton() {
  return (
    <div className="flex items-center gap-2 px-2 py-2 bg-[#232324] border border-solid border-gray-600 rounded-full transition-all duration-300 shadow-lg">
    <a
      href="mailto:diegodev2@proton.me"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 bg-[#232324] border border-solid border-gray-600 rounded-full hover:bg-[#424244] transition-all duration-300 shadow-lg"
      style={{
        background: "linear-gradient(rgb(50, 50, 51) 0%, rgb(60, 60, 64) 100%)",
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 0.12px 0.6px, rgba(0, 0, 0, 0.5) 0px 1px 5px",
        borderRadius: "30px",
      }}
    >
      <span className="text-white font-medium">Get in Touch</span>
    </a>
</div>
  );
}
