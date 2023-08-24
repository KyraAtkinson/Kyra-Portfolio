import React from "react";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project4Img from "../assets/project4.png";

const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full md:h-screen text-gray-900 bg bg-gray-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-900 text-gray-900 '>
            Projects
          </p>
          <p className='py-4'>
            These are some projects I have created using HTML, CSS, JavaScript,
            React, Tailwind, Node and PostgreSQL.
          </p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${project1Img})` }}
            className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Stranger's Things
              </span>
              <div className='pt-8 tex-center'>
                <a href='https://kyraandanthonyproject.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href=' https://github.com/kyra-and-ant/strangers-things'>
                  <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project2Img})` }}
            className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Adventure Time
              </span>
              <div className='pt-8 tex-center'>
                <a href='https://adventuretimesite.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/orgs/Capstone-Kyra/repositories'>
                  <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project4Img})` }}
            className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Kyra's Portfolio
              </span>
              <div className='pt-8 tex-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/KyraAtkinson/Kyra-Portfolio'>
                  <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
