import React from "react";

export default function Bio() {
  return (
    <section id="bio">
      <div className="container px-5 py-5 mx-auto">
        <div className="card p-5">
          <div className="card-body mb-5">
            <h1 className="card-title title-font sm:text-4xl text-3xl mb-5 font-medium text-center">
              Bio
             
            </h1>
            <img id="bioimage"
              className="card-img-top object-center rounded mx-auto"
              alt="yaroslav"
              src="https://www.dropbox.com/scl/fi/2fz70ud5g9v7r3rqv32nh/IMG_2560.jpg?rlkey=f1rymoy5hqpxch3ugv6t13bb3&st=l3krfwek&raw=1"
              width={400}
              height={400}
              style={{ borderRadius: "70%" }}
            />
            <br/>
            <p className="card-text mb-10 leading-relaxed text-center" style={{maxWidth: '100%'}} >
           Greetings, and thank you for visiting my online portfolio.
My name is Yaroslav Yatsyk. I hold a Bachelor’s Degree in Computer Science from Lviv Polytechnic National University (Ukraine) and recently graduated from the Computer Programming & Analysis program at George Brown College in Toronto, Ontario, Canada.

I am a dedicated software developer with a strong focus on the .NET technology stack, passionate about building innovative software that enhances everyday life. I’m recognized as a reliable team player who thrives on solving complex problems and delivering efficient, user-centered solutions.

I am actively seeking a position where I can apply my skills to create impactful software, contribute to collaborative teams, and continue growing professionally. I’m especially eager to join a workplace that values continuous learning and supports the development of new skills and technologies.
 <br/>
              <br />  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
