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
            Greetings, and thank you for visiting my online portfolio. My name is Yaroslav Yatsyk, and I recently graduated from the Computer Programming & Analysis Program at George Brown College.

<br/>
I specialize as a C# .NET Developer with a fervor for crafting user-friendly, easily navigable, and maintainable software. Recognized as a dedicated team player, I thrive on tackling new challenges and transforming them into efficient solutions. My enthusiasm for learning extends to embracing new skills and technologies.

<br/>
I am currently seeking a position where I can leverage my expertise to develop software that enhances user experiences and simplifies daily tasks. Additionally, I am eager to join a team that fosters professional growth and provides opportunities to acquire new skills and knowledge.
 <br/>
              <br />  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
