import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Yaroslav Yatsyk.
            .NET Developer | Software Developer
          </h1>
          <p className="mb-8 leading-relaxed">
          Hi, I’m Yaroslav — a software developer with a strong passion for software development and building software applications for personal and business goals.

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Let's make things great together!</a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check out my projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
