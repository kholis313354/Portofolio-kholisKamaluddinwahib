import React from "react";
import html from "../../src/assets/html.png"
import css from "../../src/assets/css.png"
import javascript from "../../src/assets/javascript.png"
import react from "../../src/assets/react.png"
import tailwind from "../../src/assets/tailwind.png"
import node from "../../src/assets/node.png"
import Typewriter from "typewriter-effect";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaGitAlt, FaGithub, FaFigma, FaAngular, FaPhp, FaLaravel, FaBootstrap, FaSass, FaNpm, FaCode } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiFirebase, SiVercel, SiNetlify, SiJest, SiCypress } from 'react-icons/si';


const Skills = ({theme}) => {
  return (
    <div name ="Skills" className={theme? "min-h-screen w-full bg-[#ffffff] p-5" : "min-h-screen w-full bg-[#0a192f] p-5"}>

   {/* About Container */}
      <div className={theme? "flex justify-center text-[#000000] font-bold flex-col px-4" : "flex justify-center text-[#ccd6f6] flex-col px-4"}>



        <div className="text-center ">
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
          <h1 className="border-b-2 border-pink-600 inline text-4xl font-bold">Skillz</h1>
          </AnimationOnScroll>
   
          <p className=" mx-auto mt-3 text-xl max-w-[600px] font-mono text-green-500">
                 <Typewriter 
                  options={{
                 strings: ["This is the Technology I am good at." ],
                 autoStart: true,
                loop: true,
                 }}
                />
             </p>


        </div>

       {/* Frontend Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Frontend Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <img src={html} alt="" className="h-12 w-12"></img>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">HTML5</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <img src={css} alt="" className="h-12 w-12"></img>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">CSS3</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <img src={javascript} alt="" className="h-12 w-12"></img>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">JavaScript</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <img src={react} alt="" className="h-12 w-12"></img>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">React</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <img src={tailwind} alt="" className="h-12 w-12"></img>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">Tailwind</p>  
            </div>


          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Backend Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <img src={node} alt="" className="h-12 w-12"></img>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">Node.js</p>  
            </div>


            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <FaPhp className="h-12 w-12"></FaPhp>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">PHP</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-red-500 to-red-700 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <FaLaravel className="h-12 w-12"></FaLaravel>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">Laravel</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <FaCode className="h-12 w-12"></FaCode>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">CodeIgniter 4</p>  
            </div>
          </div>
        </div>

        {/* Database & Tools */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">Database & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">


            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <SiMysql className="h-12 w-12"></SiMysql>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">MySQL</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <SiFirebase className="h-12 w-12"></SiFirebase>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">Firebase</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <FaGitAlt className="h-12 w-12"></FaGitAlt>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">Git</p>  
            </div>

            <div className="m-3 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 duration-300 cursor-pointer rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 text-white">  
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
                <FaFigma className="h-12 w-12"></FaFigma>
              </AnimationOnScroll>
              <p className="mt-2 text-sm font-semibold">Figma</p>  
            </div>


          </div>
        </div>







      </div>

    </div>
  );
};

export default Skills;
