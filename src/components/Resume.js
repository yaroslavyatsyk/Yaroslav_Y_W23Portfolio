import React from "react";
export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Resume &amp; Cover Letter
          </h1>

          <p>To download the resume and/or cover letter, please use the links below.</p>

          <a className="text-indigo-400 leading-relaxed" href="https://www.dropbox.com/scl/fi/y55bxqzzfs998x93bk73f/Yaroslav-Yatsyk.-.NET-Developer.pdf?rlkey=et5jn1l19no3a0auzwyyz8eol&dl=1" download={true}><strong>Download Resume</strong></a>
<br/>
          <a className="text-indigo-400 leading-relaxed" href="https://www.dropbox.com/scl/fi/aoongv43hpn9i2igd2kse/Yaroslav-Yatsyk-Cover-Letter.docx?dl=1&rlkey=mvrok0r3o06c8x4261feqh85i" download><strong>Download Cover Letter</strong></a>

          </div>
        
      </div>
    </section>
  );
}