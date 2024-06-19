import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";

import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Bio from "./components/Bio";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Bio/>
      <Projects />
      <Skills />
      
      <Contact />

     
    </main>
  );
}
