import Image from 'next/image';

export default function Header() {
  return (
    <div className="absolute w-full h-screen">
      <video 
        autoPlay 
        muted 
        loop 
        className="relative top-[-340px] bg-fixed rotate-180 opacity-65 left-0 w-full h-full z-[0] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Contenido del header */}
      <div className="absolute">
        <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[9999999]">
          <div className="container mx-auto px-5 md:px-10 relative z-[999999]">
            <div className="flex justify-between items-center h-16">
              <a className="flex items-center" href="/">
                <span className="font-bold ml-2 hidden md:block text-gray-300">DiegoDev1</span>
              </a>

              <div className="w-full sm:w-[500px] h-full flex flex-row items-center justify-center z-[99999]">
                {/* Menú móvil */}
                <div className="w-full relative flex-col flex items-center md:hidden">
                  <div className="w-[200px] block md:hidden border-t-[#7042f861] border-r-[#7042f861] border-l-[#7042f861] text-center border-b-[#7042f861] bg-[#0300145e] px-4 py-2 text-gray-200 transition-all duration-300 ease-in-out ">
                    Menu
                  </div>
                </div>

                {/* Menú principal centrado */}
                <div className="hidden gap-x-6 md:flex sm:flex items-center justify-center w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 flex-row">
                  <a className="cursor-pointer" href="/about">
                    About me
                  </a>
                  <a className="cursor-pointer" href="/experience">
                    Experience
                  </a>
                  <a className="cursor-pointer" href="/projects">
                    Projects
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
