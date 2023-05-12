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
            Here are some of the projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4" style={{borderRadius: '70%'}}>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative" style={{borderRadius: '70%'}}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                  height={500}
                  width={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>

                  {project.download != null && 
                    <a className="text-indigo-400 leading-relaxed" href={project.download} download={true}><strong>Try it</strong></a>

                    
                  }      
                    
                </div>
              </div>
            </a>
          ))}
        </div>

      
        
      </div>
    </section>
  );
}
