"use client";

import React, { useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  Position,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import gsap from "gsap";

// Nodos con sus logos
const nodes: Node[] = [
  {
    id: "devops",
    data: { label: "DevOps" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "docker",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/docker.svg"
            alt="Docker"
            className="h-8 w-8 mb-2"
          />
          Docker
        </div>
      ),
    },
    position: { x: 200, y: 100 },
  },
  {
    id: "kubernetes",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/kubernetes.svg"
            alt="Kubernetes"
            className="h-8 w-8 mb-2"
          />
          Kubernetes
        </div>
      ),
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "web",
    data: { label: "Web Development" },
    position: { x: 0, y: 300 },
  },
  {
    id: "javascript",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg"
            alt="JavaScript"
            className="h-8 w-8 mb-2"
          />
          JavaScript
        </div>
      ),
    },
    position: { x: 200, y: 400 },
  },
  {
    id: "typescript",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg"
            alt="TypeScript"
            className="h-8 w-8 mb-2"
          />
          TypeScript
        </div>
      ),
    },
    position: { x: 400, y: 400 },
  },
  {
    id: "systems",
    data: { label: "Systems" },
    position: { x: 0, y: 600 },
  },
  {
    id: "go",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/go.svg"
            alt="Go"
            className="h-8 w-8 mb-2"
          />
          Go
        </div>
      ),
    },
    position: { x: 200, y: 700 },
  },
  {
    id: "cplus",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/cplusplus.svg"
            alt="C++"
            className="h-8 w-8 mb-2"
          />
          C++
        </div>
      ),
    },
    position: { x: 600, y: 700 },
  },
  {
    id: "html",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/html5.svg"
            alt="HTML5"
            className="h-8 w-8 mb-2"
          />
          HTML5
        </div>
      ),
    },
    position: { x: 600, y: 300 },
  },
  {
    id: "css",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/css3.svg"
            alt="CSS3"
            className="h-8 w-8 mb-2"
          />
          CSS3
        </div>
      ),
    },
    position: { x: 600, y: 400 },
  },
  {
    id: "tailwindcss",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tailwindcss.svg"
            alt="TailwindCSS"
            className="h-8 w-8 mb-2"
          />
          TailwindCSS
        </div>
      ),
    },
    position: { x: 800, y: 400 },
  },
  {
    id: "nextjs",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nextdotjs.svg"
            alt="Next.js"
            className="h-8 w-8 mb-2"
          />
          Next.js
        </div>
      ),
    },
    position: { x: 800, y: 200 },
  },
  {
    id: "git",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg"
            alt="GitHub"
            className="h-8 w-8 mb-2"
          />
          GitHub
        </div>
      ),
    },
    position: { x: 800, y: 600 },
  },
  {
    id: "terraform",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/terraform.svg"
            alt="Terraform"
            className="h-8 w-8 mb-2"
          />
          Terraform
        </div>
      ),
    },
    position: { x: 1000, y: 300 },
  },
  {
    id: "github-actions",
    data: {
      label: (
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/githubactions.svg"
            alt="GitHub Actions"
            className="h-8 w-8 mb-2"
          />
          GitHub Actions
        </div>
      ),
    },
    position: { x: 1000, y: 500 },
  },
];

const edges: Edge[] = [
  { id: "e1", source: "devops", target: "docker", animated: true },
  { id: "e2", source: "docker", target: "kubernetes", animated: true },
  { id: "e3", source: "web", target: "javascript", animated: true },
  { id: "e4", source: "javascript", target: "typescript", animated: true },
  { id: "e5", source: "systems", target: "go", animated: true },
  { id: "e6", source: "go", target: "docker", animated: true },
  { id: "e7", source: "go", target: "cplus", animated: true },
  { id: "e8", source: "go", target: "html", animated: true },
  { id: "e9", source: "javascript", target: "html", animated: true },
  { id: "e10", source: "html", target: "css", animated: true },
  { id: "e11", source: "css", target: "tailwindcss", animated: true },
  { id: "e12", source: "nextjs", target: "typescript", animated: true },
  { id: "e13", source: "git", target: "go", animated: true },
  { id: "e14", source: "terraform", target: "git", animated: true },
  { id: "e15", source: "github-actions", target: "terraform", animated: true },
];

export default function Skills() {
  useEffect(() => {
    // Animación para los nodos cuando lleguen a la sección
    gsap.from(".react-flow__node", {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".react-flow__node",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="h-screen w-full text-white  justify-center items-center py-20">
      <h2 className=" text-xl font-light px-6 text-center py-5">Advancing Skills in Web, DevOps, and Systems Engineering</h2>
      <div className="h-full w-full px-20">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background color="#00000000" />
          <Controls style={{ display: "none" }} />

        </ReactFlow>
      </div>
    </div>
  );
}
