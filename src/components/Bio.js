import React from "react";

export default function Bio() {
  return (
    <section id="bio">
      <div className="container px-5 py-5 mx-auto">
        <div className="card p-5">
          <div className="card-body mb-5">
            <h1 className="card-title title-font sm:text-4xl text-3xl mb-5 font-medium text-white text-center">
              Bio
              <br className="hidden lg:inline-block" />
            </h1>
            <img
              className="card-img-top object-center rounded mx-auto"
              alt="yaroslav"
              src="../profile.jpeg"
              width={400}
              height={300}
              style={{ borderRadius: "70%" }}
            />
            <p className="card-text mb-10 leading-relaxed">
              My name is Yaroslav Yatsyk and I am a graduation student pursuing
              an Ontario College Advanced Diploma in Computer Programming and
              Analysis at Casa Loma Campus. As a full-time student, I have
              completed 5 semesters of the program and am currently enrolled in
              the sixth semester. My studies have given me a strong foundation
              in IT essentials, computing logic, web development, object-oriented
              programming, database management, and agile software development.
              <br />
              As I approach graduation, I am excited to apply my skills and
              knowledge to a professional setting. I am eager to take on new
              challenges and contribute to the field of computer technology. My
              portfolio showcases some of my projects and achievements throughout
              my academic journey, and I look forward to expanding it as I
              continue to grow in my career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
