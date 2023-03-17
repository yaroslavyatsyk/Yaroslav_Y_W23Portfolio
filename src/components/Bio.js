import React from "react";

export default function Bio() {
  return (
    <section id="bio">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Bio
            <br className="hidden lg:inline-block" />
          </h1>
          <img
            className="object-center rounded mx-auto"
            alt="yaroslav"
            src="../profile.jpeg"
            width={400}
            height={300}
          />
          <p className="mb-8 leading-relaxed" >
          My name is Yaroslav Yatsyk and I am a graduation student pursuing an Ontario College Advanced Diploma in Computer Programming and Analysis at Casa Loma Campus. As a full-time student, I have completed 5 semesters of the program and am currently enrolled in the sixth semester. My studies have given me a strong foundation in IT essentials, computing logic, web development, object-oriented programming, database management, and agile software development.

In addition to my academic pursuits, I have also been actively involved in extracurricular activities on campus, including coding clubs and hackathons. I am passionate about exploring new technologies and finding innovative solutions to real-world problems.

As I approach graduation, I am excited to apply my skills and knowledge to a professional setting. I am eager to take on new challenges and contribute to the field of computer technology. My portfolio showcases some of my projects and achievements throughout my academic journey, and I look forward to expanding it as I continue to grow in my career.
          </p>

          </div>
          
        
      </div>
    </section>
  );
}