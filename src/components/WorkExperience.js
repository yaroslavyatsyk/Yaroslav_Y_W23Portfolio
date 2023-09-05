import React from "react";
import { workexperiences } from "../data";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function WorkExperience() {
   return (
    <section id="workexperience">
        <div className="container px-5 py-5 mx-auto">
            <div className="text-center mb-5">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Work Experience
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    There is the list of my work experience.
                </p>
            </div>
          
            <div className="flex flex-wrap justify-center">
                {workexperiences.map((workexperience) => (
                    <div key={workexperience} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white" style={{padding: 10 + 'px'}}>
                                {workexperience.company}
                            </span>
                            <br></br>
                            <span className="title-font font-medium text-white" style={{padding: 10 + 'px'}}>
                                {workexperience.position}
                                </span>
                            <br/> <br/>
                            <span className="title-font font-medium text-white" style={{padding: 10 + 'px'}}>
                                {workexperience.date}
                                </span>
                            <br></br>
                            <span className="title-font font-medium text-white" style={{padding: 10 + 'px'}}>
                                {workexperience.description}
                                </span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );





}
