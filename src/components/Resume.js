import React from "react";
export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Resume
          </h1>

          <p>To download the resume, please use the link below.</p>
          <br></br>
          <p>Thank you!</p>
          <br></br>
          <p>Resume format: PDF</p>
          <a className="text-indigo-400 leading-relaxed" href="https://www.dropbox.com/scl/fi/y55bxqzzfs998x93bk73f/Yaroslav-Yatsyk.-.NET-Developer.pdf?rlkey=et5jn1l19no3a0auzwyyz8eol&dl=1" download={true}><strong>Download Resume</strong></a>

          </div>
        
      </div>
    </section>
  );
}