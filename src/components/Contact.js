import React from "react";

export default function Contact() {
 
  return (
    <section id="contact" className="relative">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" style={{height: '500px'}}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.655427863761!2d-79.41082089999999!3d43.676135599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349c7b2e07d1%3A0x78fafe8ff1bee19d!2s160%20Kendal%20Ave%2C%20Toronto%2C%20ON%20M5T%202T9!5e0!3m2!1sen!2sca!4v1678768888901!5m2!1sen!2sca"
          />
        </div>
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                160 Kendal Avenue. <br />
                Toronto, Canada, Ontario, M5T 2T9
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
