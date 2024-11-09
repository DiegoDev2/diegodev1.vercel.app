import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[100%] max-w-[1100px] border border-neutral-800 bg-[#1a1a1a] bg-opacity-70 backdrop-blur-lg rounded-2xl px-8 py-3 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/LOGOJAP.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>

      <nav className="flex gap-10 font-extralight text-base text-gray-400">
        <a href="#home" className="hover:text-white transition-color">Home</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="mailto:diegodev2@proton.me" className="hover:text-white transition-colors">Contact</a>
      </nav>
    </header>
  );
}
