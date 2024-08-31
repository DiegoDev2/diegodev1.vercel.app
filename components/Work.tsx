import { FaGithub } from 'react-icons/fa';
import { SiGo, SiAstro, SiTailwindcss } from 'react-icons/si';

const CurrentProject = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white font-pixel">
      <h2 className="text-3xl mb-8">Currently working on</h2>
      <div className="bg-neutral-800/90 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2 rounded-full">
            
            <img src="./logoLatte.png" alt="LattePkg Logo" className="w-24 h-24" />
          </div>
          <h3 className="text-2xl mt-4 mb-2">LattePkg</h3>
          <p className="text-center mb-4">Package manager with a focus on performance and functionality.</p>
          <div className="flex space-x-4">
            <a
              href="https://lattepkg.vercel.app/"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600"
              target='_blank'
            >
              Visit website
            </a>
            <a
              href="https://github.com/CodeDiego15/LattePkg"
              target='_blank'
              className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 flex items-center"
            >
              <FaGithub className="mr-2" />
              Source code
            </a>
          </div>
        </div>
        <div className="mt-6 flex space-x-4 justify-center">
          <div className="flex items-center space-x-2 bg-neutral-700/70 rounded-xl py-1 px-2">
            <SiGo  className="text-blue-500 size-7" />
            <span>Go</span>
          </div>
         </div>
      </div>
    </section>
  );
};

export default CurrentProject;
