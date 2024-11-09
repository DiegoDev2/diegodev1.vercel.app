import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[100%] max-w-[1100px] border border-neutral-800 bg-[#1a1a1a] bg-opacity-70 backdrop-blur-lg rounded-2xl px-8 py-2 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/Icon.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
      </div>

      <nav className="flex gap-10 font-extralight text-base text-gray-400">
        <a href="#home" className="hover:text-white transition-color">Home</a>
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#resume" className="hover:text-white transition-colors">Resume</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>
    </header>
  );
}
