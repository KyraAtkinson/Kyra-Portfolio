import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src='https://images.unsplash.com/photo-1673134696707-fd4dc7e800d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80'
        alt='picture of grey curtain and chair'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold shadow-lg text-grey-800 shadow-cyan-900'>
            Hi, my name is Kyra Atkinson!
          </h1>
          <h2 className='flex sm:text-4xl text-3xl pt-4 shadow-lg text-grey-800 shadow-cyan-900'>
            <TypeAnimation
              sequence={[
                "I am a Web Developer.",
                2000,
                "I am a Coder.",
                2000,
                "I am a Critical Thinker.",
                1000,
                "I am an Ambitious Worker.",
                1000,
                "I am a Quick Learner.",
                1000,
              ]}
              wrapper='span'
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "4px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-9 max-w-[100px] w-full'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a
                  className='flex justify-between items-center w-full text-gray-300'
                  href='https://www.linkedin.com/in/kyra-atkinson/'>
                  Linkedin <FaLinkedin size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a
                  className='flex justify-between items-center w-full text-gray-300'
                  href='https://github.com/KyraAtkinson'>
                  Github <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
