import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Particles from '@/components/ui/particles';
export default function SocialSection() {
  return (
    <section className="relative flex items-center justify-center h-[600px] w-full text-center">
        <Particles 
      size={0.001}
      quantity={50}
      className="absolute h-auto top-0 left-0 w-full" />
      <Image
        src="/BonusStep.png"
        alt="Bonus Step"
        width={1920}
        height={1080}
        className="absolute bottom-0 left-0 w-full h-full object-cover opacity-80 rotate-180 z-0"
        style={{ objectPosition: 'bottom' }}
        unoptimized
      />
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-5xl text-white font-normal leading-tight">
          Let's <span className="italic" style={{ fontFamily: "Noto Sans" }}>Create</span>, <br />your next big idea!
        </h1>
        
        {/* Íconos de redes sociales */}
        <div className="flex gap-10">
          <a
            href="https://instagram.com/diegodev1.go"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com/diegodev5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com/DiegoDev2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
