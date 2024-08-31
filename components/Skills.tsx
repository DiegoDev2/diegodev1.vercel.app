import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiAstro, SiTailwindcss, SiCplusplus, SiGo, SiPython, SiMarkdown, SiGit, SiGithub, SiReact, SiNextdotjs, SiBun, SiNodedotjs, SiDocker, SiKubernetes, SiVisualstudiocode, SiMacos, SiKalilinux, SiObsstudio, SiVercel, SiAdobephotoshop } from 'react-icons/si';
import { BsTerminal } from 'react-icons/bs';

const SkillsSection: React.FC = () => {
  return (
    <div className="text-white p-10">
      <h2 className="text-center text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Languages */}
        <div className="p-6 rounded-lg bg-neutral-800/90">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <SiHtml5 className="text-red-600" title="HTML" /> <span>HTML</span>
            </div>
            <div className="flex items-center gap-2">
              <SiCss3 className="text-blue-600" title="CSS" /> <span>CSS</span>
            </div>
            <div className="flex items-center gap-2">
              <SiJavascript className="text-yellow-500" title="JavaScript" /> <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="text-blue-500" title="TypeScript" /> <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiCplusplus className="text-blue-800" title="C++" /> <span>C++</span>
            </div>
            <div className="flex items-center gap-2">
              <SiGo className="text-cyan-500" title="Go" /> <span>Go</span>
            </div>
            <div className="flex items-center gap-2">
              <SiPython className="text-yellow-400" title="Python" /> <span>Python</span>
            </div>
            <div className="flex items-center gap-2">
              <SiMarkdown className="text-gray-500" title="Markdown" /> <span>Markdown</span>
            </div>
            
            <div className="flex items-center gap-2">
              <BsTerminal className="text-green-500" title="Shell Script" /> <span>Shell Script</span>
            </div>
          </div>
        </div>
        
        {/* Frameworks and Libraries */}
        <div className="p-6 rounded-lg bg-neutral-800/90">
          <h3 className="text-xl font-semibold mb-4">Frameworks and Libraries</h3>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <SiAstro className="text-orange-500" title="Astro" /> <span>Astro</span>
            </div>
            <div className="flex items-center gap-2">
              <SiBun className="text-amber-100" title="Bun" /> <span>Bun</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-teal-500" title="Tailwind CSS" /> <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2">
              <SiReact className="text-blue-500" title="React" /> <span>React</span>
            </div>
            <div className="flex items-center gap-2">
              <SiNextdotjs className="text-gray-800" title="Next.js" /> <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiNodedotjs className="text-green-500" title="Node.js" /> <span>Node.js</span>
            </div>
          </div>
        </div>
        
        {/* Tools */}
        <div className="p-6 rounded-lg bg-neutral-800/90">
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <SiGit className="text-orange-600" title="Git" /> <span>Git</span>
            </div>
            <div className="flex items-center gap-2">
              <SiGithub className="text-gray-900" title="GitHub" /> <span>GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <SiDocker className="text-blue-400" title="Docker" /> <span>Docker</span>
            </div>
            <div className="flex items-center gap-2">
              <SiKubernetes className="text-blue-600" title="Kubernetes" /> <span>Kubernetes</span>
            </div>
            <div className="flex items-center gap-2">
              <SiVisualstudiocode className="text-blue-600" title="Visual Studio Code" /> <span>Visual Studio Code</span>
            </div>
            <div className="flex items-center gap-2">
              <SiMacos className="text-gray-600" title="macOS" /> <span>macOS</span>
            </div>
            <div className="flex items-center gap-2">
              <SiKalilinux className="text-blue-500" title="Kali Linux" /> <span>Kali Linux</span>
            </div>
            <div className="flex items-center gap-2">
              <SiObsstudio className="text-black" title="OBS Studio" /> <span>OBS Studio</span>
            </div>
            <div className="flex items-center gap-2">
              <SiVercel className="text-black" title="Vercel" /> <span>Vercel</span>
            </div>
            <div className="flex items-center gap-2">
              <SiAdobephotoshop className="text-blue-500" title="Photoshop" /> <span>Photoshop</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SkillsSection;
