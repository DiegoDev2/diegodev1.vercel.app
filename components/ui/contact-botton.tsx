export default function ContactButton() {
  return (
  <div className="py-4">
       <a
      href="mailto:diegodev2.proton.me"
      className="relative inline-flex items-center justify-center gap-2 px-4 py-4 text-base font-medium text-black bg-blue-200 transition-all duration-300 transform group hover:bg-blue-300"
      style={{ maxWidth: "fit-content" }}
    >
      {/* Texto del Botón */}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        Let&apos;s collaborate
      </span>

      {/* Flecha */}
      <span
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  </div>
   
  );
}
