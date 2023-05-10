import React from "react";
export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Resume
            <br className="hidden lg:inline-block" />
          </h1>

          <a className="text-indigo-400 leading-relaxed" href="https://www.dropbox.com/s/vcqjjfrpqubtnjm/Yaroslav%20Yatsyk.%20C%23%20Developer.%20Resume.pdf?dl=1" download={true}><strong>Download Resume</strong></a>



          </div>
        
      </div>
    </section>
  );
}