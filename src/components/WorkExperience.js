import React from "react";
import { workexperiences } from "../data";


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
          
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-4 -mx-4 ">
                {workexperiences.map((workexperience) => (
                    <div key={workexperience} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded p-4 h-full items-center flex-auto">
                           
                            <span className="title-font font-medium text-white" style={{padding: 3 + 'px'}}>
                                {workexperience.company}
                            </span>
                            <br></br>
                            <span className="title-font font-medium text-white" style={{padding: 2 + 'px'}}>
                                {workexperience.title}
                                </span>
                            <br/>
                            <span className="title-font font-medium text-white" style={{padding: 2 + 'px'}}>
                                {workexperience.date}
                                </span>
                            <br/>
                            <br/>
                            <span className="title-font font-medium text-white" style={{padding: 2 + 'px'}}>
                                Description:
                                {workexperience.descriptions.map((description) => (
                                    <li key={description} className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" style={{margin: 5 + 'px', textIndent: 8 + 'px'}}>
                                        {description}
                                    </li>
                                ))}

                                </span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );





}
