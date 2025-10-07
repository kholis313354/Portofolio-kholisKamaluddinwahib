import React, { useEffect } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import boy2 from "../../src/assets/kholis-agpais.jpeg";
import Typewriter from "typewriter-effect";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OP from "../../src/assets/OP.gif"
import Kholis from '../assets/Kholis-cv.pdf';




const Main = ({ theme }) => {

  useEffect(() => {
    toast.info('Welcome! portofolio Kholis', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, [])

  return (
    <div name="Main"
      className={theme ? ("p-15 md:pl-36 md:flex min-h-screen min-w-full shadow-box-shadow bg-[#ffffff] justify-center items-center ") : ("p-20 md:pl-36  md:flex min-h-screen min-w-full bg-[#0a192f] shadow-box-shadow justify-center items-center ")}
    >
      <div className={theme ? ("text-black mb-48  font-bold shadow-box-shadow p-5 rounded-2xl text-sm sm:text-3xl ") : ("text-[#ffffff] -md-28 text-sm sm:text-2xl ")} >
        <p className="text-green-600 text-xs md:text-xl">Hi, my name is</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl" >
          Kholis Kamaluddin Wahib
        </h1>
        {/* alert component */}
        <ToastContainer limit={1} className="text-sm " />

        <h1 className={theme ? " text-xl text-blue-600 font-bolder sm:text-2xl md:text-4xl font-mono"
          : " text-xl text-green-500 sm:text-2xl md:text-4xl font-mono"}>
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "React, Node.js, MongoDB", "UI/UX Designer", "</> Passionate Coder !!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>


        <p className="max-w-[600px] mt-4 text-sm md:text-xl">
        saya seorang programer full stack webdev (Fromework PHP codeigniter4 & Laravel) yang menyukai desain yang bersih, sederhana & unik. Saya juga menikmati membuat identitas merek, ikon, & karya ilustrasi.
        </p>


        <p className="font-serif text-xl font-bold text-red-600 mt-2 sm:text-2xl md:text-4xl flex items-center">
          <Typewriter
            options={{
              strings: ["Code is Poetry"],
              autoStart: true,
              loop: true,
            }}
          />
          <img src={OP} alt="" className="w-11 rounded-lg ml-4 shadow-box-shadow" />
        </p>



        {/* <a href="/assets/hello.txt" download="my_file.txt"> */}
        <a href={Kholis} download>
          <button
            class="group bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border
         border-blue-500 hover:border-transparent rounded mt-3 flex items-center" >

            Download CV
            <MdArrowRightAlt
              size={30}
              className="group-hover:rotate-90  duration-700"
            />

          </button>
        </a>
        {/* </a> */}
      </div>



      {/* Image */}
      <AnimationOnScroll initiallyVisible={true} duration={2} loop={true} animateIn="animate__swing">
        <div className="w-full max-w-md mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <img 
              src={boy2} 
              alt="Kholis Kamaluddin Wahib" 
              className='w-full h-auto object-cover aspect-[4/3] rounded-2xl' 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </AnimationOnScroll>

    </div>
  );
};

export default Main;
