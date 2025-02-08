import React,{ useState } from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import {
  frameworks,
  databases,
  others,
  programmingLanguages,
  tools,
  frontend
} from "../data";

export default function Skills() {
  // State to track which category is open
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // List of skill categories
  const sections = [
    { title: "Programming Languages", items: programmingLanguages },
    { title: "Frameworks", items: frameworks },
    { title: "Databases", items: databases },
    { title: "Tools", items: tools },
    { title: "Other", items: others },
    { title: "Frontend", items: frontend },
  ];

  return (
    <section id="skills">
      <div className="container px-5 py-5 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-5">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-small mb-4">
            Skills, Programming Languages, Tools &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            This is a list of skills, tools, languages, and technologies that is updated over time.
          </p>
        </div>

        {/* Accordion Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            {/* Accordion Header Button */}
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full text-left px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none flex justify-between items-center"
            >
              <h3 className="text-lg font-medium">{section.title}</h3>
              <span className={`transform transition-transform ${openSection === section.title ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all overflow-hidden duration-300 ${
                openSection === section.title ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {section.items.map((item) => (
                  <div key={item} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                      <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font font-medium text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}