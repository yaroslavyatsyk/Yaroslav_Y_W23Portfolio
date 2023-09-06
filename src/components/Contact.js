import React from "react";

export default function Contact() {
 
  return (
   
    <section id="contact" className="relative">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="text-center mb-5">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Let's Connect!
        </h1>
        </div>
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
        
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
                  
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1">
                Toronto, Canada, Ontario
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="mailto:Yaroslav.Yatsyk@hotmail.com">
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
     <a className="text-indigo-400 leading-relaxed" href="https://www.linkedin.com/in/yaroslavyatsyk"><i class="fa fa-linkedin" style={{marginRight: 10 + 'px'}}></i></a>
 <a className="text-indigo-400 leading-relaxed" href="https://github.com/yaroslavyatsyk"><i class="fa fa-github" style={{marginLeft: 10 + 'px'}}></i></a>

      </footer>
    </section>
   
  );
}
