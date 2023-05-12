import React from "react";

export default function Contact() {
 
  return (
   
    <section id="contact" className="relative">
       <h1 class = "justify-center">Contact Information</h1>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
      
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
               <br />
                Toronto, Canada, Ontario
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                Yaroslav.Yatsyk@hotmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">647-891-1161</p>
            </div>
          </div>
          </div>

      <footer className="text-center mb-20" style={{margin: 'auto',height:'100px', paddingRight: '10px',paddingTop: '10px'}}>
      LinkedIn: <a className="text-indigo-400 leading-relaxed" href="https://www.linkedin.com/in/yaroslavyatsyk"><strong>LinkedIn</strong></a>
<br/>
GitHub: <a className="text-indigo-400 leading-relaxed" href="https://github.com/yaroslavyatsyk"><strong>GitHub</strong></a>
      </footer>
    </section>
   
  );
}
