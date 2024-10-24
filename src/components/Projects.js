import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";



export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-2 py-2 mx-auto text-center lg:px-5">
        <div className="flex flex-col w-full mb-2">
          <CodeIcon className="mx-auto inline-block w-10 mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is the list of school and personal projects.
          </p>
          <br/>
        </div>
        <div className="flex flex-wrap w-full h-full -m-4">
  {projects.map((project) => (
    <a
      href={project.link}
      key={project.video}
      className="sm:w-1/2 w-full p-4">
      <div className="relative w-1000 h-1000 flex-auto" style={{border: 5 + 'px', borderRadius: 10 + 'px', borderColor: 'gray', borderStyle: 'solid', padding: 10 + 'px'}}>
     
     
        <div className="relative inset-0 flex flex-col items-center justify-center p-4 bg-gray-900 bg-opacity-50 hover:bg-opacity-100">
          
          <h1 className="title-font text-lg font-small text-white mb-3">
            {project.title}
          </h1>
          <p className="leading-relaxed text-center font-small text-white mb-3">{project.description}</p>
        
        </div>

         
      {project.video && <video preload="none" loop playsInline autoPlay muted className="w-2000 h-2000 object-cover object-center rounded flex-auto">


<source src={project.video} type="video/mp4"/>

</video>
}
{project.photo &&
  <img src={project.photo} alt="project_photo"></img>
}


      </div>
    </a>
    
  ))}
</div>


      
        
      </div>
    </section>
  );
}
