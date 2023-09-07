import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400">
      <div className="container px-2 py-2 mx-auto text-center lg:px-5">
        <div className="flex flex-col w-full mb-2">
          <CodeIcon className="mx-auto inline-block w-10 mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is the list of the projects.
          </p>
        </div>
        <div className="flex flex-wrap w-full h-full -m-4">
  {projects.map((project) => (
    <a
      href={project.link}
      key={project.image}
      className="sm:w-1/2 w-full p-4">
      <div className="relative w-full h-full" style={{ borderRadius: '70%' }}>
        <img
          alt="gallery"
          className="w-full h-full object-cover object-center rounded"
          src={project.image}
          style={{ borderRadius: '70%',
          filter: 'brightness(70%)'
        }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-900 bg-opacity-50 hover:bg-opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {project.subtitle}
          </h2>
          <h1 className="title-font text-lg font-large text-white mb-3">
            {project.title}
          </h1>
          <p className="leading-relaxed text-center font-large text-white mb-3">{project.description}</p>
        </div>
      </div>
    </a>
  ))}
</div>


      
        
      </div>
    </section>
  );
}
