import React from "react";

const About = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-grey-800 inline border-b-4 border-cyan-900'>
        About
      </h1>
      <br />
      <br />

      <h2 className='text-2xl font-bold text-center  text-cyan-900'>
        A driven Web Developer with excellent design and coding skills.
      </h2>
      <br />
      <br />
      <br />

      <p className='text-2xl font-bold text-center  text-gray-600'>
        I have a deep passion for technology and more specifically coding.
        Writing clean code and making sure that I have a fully responsive
        website is what I am most passionate about.
        <br />
        <br />
        <br />I have a Certificate of Web Development Immersive from Fullstack
        Academy, a Liberal Studies degree from North Carolina A&T State
        University, and experience with customer service. I look forward to
        applying my transferable skills into the technical field.
      </p>
    </div>
  );
};

export default About;
