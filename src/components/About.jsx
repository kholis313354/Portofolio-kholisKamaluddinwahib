import React from 'react';
import design from "../../src/assets/bg34.jpg"
import { AnimationOnScroll } from 'react-animation-on-scroll';





const About = ({theme}) => {
  return (



    <div name='About' className= {theme? ' md:text-2xl  w-full min-h-screen  shadow-box-shadow bg-[#ffffff] text-[#000000] font-bold p-20  ' : ' md:text-2xl  w-full min-h-screen bg-[#0a192f] text-[#ccd6f6] p-20  '}>
      <div className='flex flex-col justify-center items-center w-full h-full shadow-box-shadow p-8 rounded-3xl'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'> About </p>
          </div>
          </AnimationOnScroll>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div className='sm:text-right text-4xl '>
              <p className='text-xl sm:text-2xl md:text-4xl'>Halo! Saya Kholis, senang bertemu dengan Anda. Mari jelajahi portfolio saya.</p>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div>
            <AnimationOnScroll animateIn="animate__tada">
               <img src={design} alt='' className='h-13'/>
               </AnimationOnScroll>
              <p className='leading-relaxed text-sm md:text-xl mt-2'>
                Saya adalah seorang Full-Stack Developer dengan passion yang kuat dalam menciptakan 
                aplikasi web yang inovatif dan user-friendly. Dengan pengalaman dalam React, Node.js, 
                dan berbagai teknologi modern, saya berkomitmen untuk memberikan solusi terbaik 
                yang memenuhi kebutuhan klien dan pengguna.
              </p>
              <p className='leading-relaxed text-sm md:text-xl mt-4'>
                Selain coding, saya juga menikmati proses desain UI/UX yang clean dan modern. 
                Saya percaya bahwa kombinasi antara teknologi yang tepat dan desain yang menarik 
                akan menghasilkan produk digital yang luar biasa.
              </p>  
            </div>
            </AnimationOnScroll>
          </div>
      </div>
    </div>
   
  );
};

export default About;