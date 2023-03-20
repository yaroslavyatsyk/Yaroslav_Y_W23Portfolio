import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Yaroslav Yatsyk
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#bio" className="mr-5 hover:text-white">
            Bio
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills & Technologies
          </a>
          <a href="#resume" className="mr-5 hover:text-white">
            Resume
          </a>
          <a href="#cover" className="mr-5 hover:text-white">
            Cover Letter
          </a>
          <a href="#capstone" className="mr-5 hover:text-white">
            Capstone Project
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
