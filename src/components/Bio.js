import React from "react";

export default function Bio() {
  return (
    <section id="bio">
      <div className="container px-5 py-5 mx-auto">
        <div className="card p-5">
          <div className="card-body mb-5">
            <h1 className="card-title title-font sm:text-4xl text-3xl mb-5 font-medium text-white text-center">
              Bio
             
            </h1>
            <img
              className="card-img-top object-center rounded mx-auto"
              alt="yaroslav"
              src="https://www.dropbox.com/scl/fi/nkhewyfuj0hm5arjlip5a/IMG_20230615_224953_346.jpg?rlkey=3q1si165c933qn0jcmcbyodsd&raw=1"
              width={400}
              height={400}
              style={{ borderRadius: "70%" }}
            />
            <br/>
            <p className="card-text mb-10 leading-relaxed text-center" style={{maxWidth: '100%'}} >
            My name is Yaroslav Yatsyk, and I am a fresh graduate of the Computer Programming & Analysis Program at George Brown College.
            <br></br>
 I am a C# .NET Developer with a passion for creating software that is user-friendly, easy to use, and maintain.
  <br></br>
I am a good team member who is always driven to take on new challenges and transform them into effective solutions. Also, I am always eager to learn new skills and technologies.
<br></br>
 I am looking for a position where I can apply my skills and knowledge to create software that will help people, make their lives easier, and grow professionally.
 <br/>
              <br />  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
