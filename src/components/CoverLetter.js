import React from "react";
export default function Cover() {
  return (
    <section id="cover">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Cover Letter
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" >
          Note: The cover letter can be changed accordingly to company's needs and requirements.
          Here is presented the basis version
          </p>
          <a href="/Yaroslav Yatsyk Cover Letter.docx" download>Download Cover Letter</a>
          </div>
      </div>
    </section>
  );
}