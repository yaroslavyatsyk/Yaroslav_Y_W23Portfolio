import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";

import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Bio from "./components/Bio";
import {useState} from 'react';
import './index.css';


export default function App() {
const[switcher, setSwitcher] = useState(true);

const handleSwitch = () => {
  setSwitcher(!switcher);
}

if(switcher){
  return (
   <main className="bg-gray-900 body-font text-white">
    <label class="switch">
    <input type="checkbox" id="switcher" onClick={handleSwitch}/>
    <span class="slider"></span>
    </label>
      <About />
      <Bio/>
      <Projects />
      <Skills />
      
      <Contact />

     
    </main>
   


  );
}
else {
  return (
    <main className="bg-white-900 body-font text-black">
      <label class="switch">
    <input type="checkbox" id="switch" onClick={handleSwitch}/>
    <span class="slider"></span>
    </label>
      <About />
      <Bio/>
      <Projects />
      <Skills />
      
      <Contact />

     
    </main>
  );
}
}
