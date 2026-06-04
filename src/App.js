import React from "react";
import Main from "./components/Main";
import Contact from "./components/Contact";

import Projects from "./components/Projects";
import Skills from "./components/Skills";

import AboutMe from "./components/About";
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
    <span class="slider round"></span>
    </label>
      <Main />
      <AboutMe/>
      <Projects />
      <Skills background = {switcher} />
      
      <Contact />

     
    </main>
   


  );
}
else {
  return (
    <main className="bg-white-900 body-font text-black">
      <label class="switch">
    <input type="checkbox" id="switch" onClick={handleSwitch}/>
    <span class="slider round"></span>
    </label>
      <Main />
      <AboutMe/>
      <Projects />
      <Skills />
      
      <Contact />

     
    </main>
  );
}
}
