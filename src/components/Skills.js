import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { frameworks, methodologies, programmingLanguages, tools } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-5">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-small  text-white mb-4">
            Skills, Programming Languages, Tools &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            There is the list of skills, tools, languages, and technologies  that is updating time by time.
          </p>
        </div>
        <div className="text-center">
        <h6 className="sm:text-4xl text-3xl font-small  text-white">Programming languages</h6>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {programmingLanguages.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
        <h6 className="sm:text-4xl text-3xl font-small  text-white">Frameworks</h6>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {frameworks.map((framework) => (
            <div key={framework} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {framework}
                </span>
              </div>
            </div>  
          ))}
        </div>
        <div className="text-center">
        <h6 className="sm:text-4xl text-3xl font-small  text-white">Tools</h6>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {tools.map((tool) => (
            <div key={tool} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {tool}
                </span>

                </div>
                </div>
          ))}
          </div>
          <div className="text-center">
          <h6 className="sm:text-4xl text-3xl font-medium  text-white">Methodologies and Concepts</h6>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {methodologies.map((methodology) => (
              <div key={methodology} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {methodology}
                  </span>

                  </div>
                  </div>
            ))}
            </div>
      </div>
    </section>
  );
}
