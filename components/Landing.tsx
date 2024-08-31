import { Pixelify_Sans } from "next/font/google";
import { Inter } from "next/font/google";

const pixelify_Sans = Pixelify_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <div className={`min-h-screen text-white flex flex-col items-center justify-center ${inter.className}`}>
     <div className="py-9">
        <img
        src="/megumi.jpeg" 
        alt="Avatar"
        className="rounded-full  justify-center w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
        />
    </div>
     
      <div className="text-center mt-4">
        <h1 className={`text-3xl md:text-5xl lg:text-5xl font-bold text-blue-500 mt-4 ${pixelify_Sans.className}`}>
          Howdy! I'm /DiegoDev1/
        </h1>
        <h2 className={`text-xl md:text-2xl lg:text-xl mt-2 ${pixelify_Sans.className}`}>
          Aspiring IT Security Engineer. fifteen years | Terminal tools developer | Network hacking
        </h2>
        <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
          <span className="px-4 py-2 bg-neutral-800/90 rounded-full text-sm">He/Him</span>
          <span className="px-4 py-2 bg-neutral-800/90 rounded-full text-sm">INTJ</span>
        </div>
      </div>
      <div className="bg-neutral-800/90 p-4 mt-8 rounded-lg max-w-xs sm:max-w-md lg:max-w-2xl text-center">
        <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold ${pixelify_Sans.className}`}>About me</h3>
        <p className={`mt-2 text-sm md:text-base lg:text-lg font-extralight ${inter.className}`}>
          I'm a passionate fullstack developer with a deep love for anime and all things tech. My favorite programming language is Go, but I also dive into various other technologies with enthusiasm. I have a strong interest in cybersecurity and ethical hacking, constantly exploring new ways to secure systems and uncover vulnerabilities. When I'm not coding, you can find me engrossed in the latest anime series or experimenting with new security tools. Let's create something amazing together, whether it's crafting secure systems or building powerful applications!
        </p>
      </div>
    </div>
  );
}
