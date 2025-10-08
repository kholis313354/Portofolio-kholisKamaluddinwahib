import React from "react";
import ponpes from "../assets/projects/1.png";
import Typewriter from "typewriter-effect";
import parfum from "../assets/projects/2.png"
import game from "../assets/projects/game.png"




const Work = ({theme}) => {
  return (
    <div name="Work" className={theme? "min-h-screen bg-[#ffffff] text-black p-5" : "min-h-screen bg-[#0a192f] p-5"}>
         {/*Work container */}
      <div className="text-[#ccd6f6] pl-4 ">
             
         {/* Text container */}
            <div className="text-center">
            <h1 className={theme? "font-bold text-4xl text-black border-b-4 inline-block border-pink-600" : "font-bold text-4xl border-b-4 inline-block border-pink-600"}>MY PROJECK</h1>
            <p className=" mx-auto mt-3 text-xl max-w-[600px] font-mono text-green-500">
                 <Typewriter 
                  options={{
                 strings: ["Check Out Some of My Latest Projects" ],
                 autoStart: true,
                loop: true,
                 }}
                />
             </p>
          
            </div>




           {/*---------------------------------- Grid Container ---------------------------------------------------*/}

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center pl-7">


        {/* 1card - E-Commerce Platform */}
   <div className= {theme? "m-3 p-4 flex flex-col text-black items-center justify-center shadow-lg hover:shadow-2xl scale-95 hover:scale-100 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 duration-300 cursor-pointer rounded-xl border-2 border-transparent hover:border-blue-400"
   : "m-3 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl scale-95 hover:scale-100 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 duration-300 cursor-pointer rounded-xl border-2 border-transparent hover:border-blue-400"} >  
               <img src={ponpes} alt="" className="h-32 w-full object-cover rounded-lg mb-3"></img>

               <h3 className="m-2 p-2 font-bold text-lg flex items-center gap-2 text-center">🏢 OrmaOne (Satu aplikasi untuk semua kebutuhan Ormawa)</h3>
               
               <p className="p-2 font-semibold text-center text-sm bg-gray-100 dark:bg-gray-700 rounded px-3 py-1">Bootstrap, SQL, codeigniter4 , Firebase API</p>
               
               <p className="p-2 text-sm text-center text-gray-600 dark:text-gray-300">diperlukan suatu sistem informasi terintegrasi yang mampu mengatasi kendala administratif dan meningkatkan transparansi dalam pengelolaan Ormawa. Salah satu solusi yang dapat diterapkan adalah dalam permasalahan tersebut penulis membuat penelitian dengan judul sistem informasi berbasis web bernama "OrmaOne", yang mencakup fitur e-voting, pendataan anggota ormawa digital, serta pembuatan e-sertifikat otomatis guna mendukung operasional Ormawa secara lebih efektif.</p>
                      
                      {/* buttons */}
                <div className="flex items-center justify-center mt-3 gap-2">

                 <a href="https://ormaone.com/" target="_blank">                        
                  <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-all duration-200 hover:scale-105">
                    🌐 Live Demo
                  </button> 
                    </a> 

                  <a href="https://github.com/kholis313354/Ormaone_mobile" target="_blank">
                    <button type="button" className="text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-all duration-200 hover:scale-105">
                      📁 Code
                    </button>
                  </a>
                </div>
            
             </div>





   {/* 2card - Task Management App */}
   <div className= {theme? "m-3 p-4 flex flex-col text-black items-center justify-center shadow-lg hover:shadow-2xl scale-95 hover:scale-100 hover:text-white hover:bg-gradient-to-br hover:from-green-600 hover:to-teal-600 duration-300 cursor-pointer rounded-xl border-2 border-transparent hover:border-green-400"
   : "m-3 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl scale-95 hover:scale-100 hover:bg-gradient-to-br hover:from-green-600 hover:to-teal-600 duration-300 cursor-pointer rounded-xl border-2 border-transparent hover:border-green-400"}>  
               <img src={game} alt="" className="h-32 w-full object-cover rounded-lg mb-3"></img>
                      
               <h3 className="m-2 p-2 font-bold text-lg flex items-center gap-2 text-center">📋 Task Management App</h3>
               
               <p className="p-2 font-semibold text-center text-sm bg-gray-100 dark:bg-gray-700 rounded px-3 py-1">React, Redux, Firebase, Material-UI</p>
               
               <p className="p-2 text-sm text-center text-gray-600 dark:text-gray-300">Modern task management application with real-time collaboration, drag-and-drop functionality, and team features.</p>

                      {/* buttons */}
                <div className="flex items-center justify-center mt-3 gap-2">

                 <a href="https://tugas-game-tebak-kata.netlify.app/" target="_blank">                        
                  <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-all duration-200 hover:scale-105">
                    🚀 Live Demo
                  </button> 
                    </a> 

                  <a href="https://github.com/kholis313354/TUGAS-JS-UAS" target="_blank">
                    <button type="button" className="text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-all duration-200 hover:scale-105">
                      📁 Code
                    </button>
                  </a>
                </div>
            
             </div>



             {/* 3card - Weather Dashboard */}
   <div className= {theme? "m-3 p-4 flex flex-col text-black items-center justify-center shadow-lg hover:shadow-2xl scale-95 hover:scale-100 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 duration-300 cursor-pointer rounded-xl border-2 border-transparent hover:border-purple-400"
   : "m-3 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl scale-95 hover:scale-100 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 duration-300 cursor-pointer rounded-xl border-2 border-transparent hover:border-purple-400"}>  
               <img src={parfum} alt="" className="h-32 w-full object-cover rounded-lg mb-3"></img>
               
               <h3 className="m-2 p-2 font-bold text-lg flex items-center gap-2 text-center">PT.Boltz indonesia</h3>
               
               <p className="p-2 font-semibold text-center text-sm bg-gray-100 dark:bg-gray-700 rounded px-3 py-1">React, API Integration, Chart.js, Geolocation</p>
               
               <p className="p-2 text-sm text-center text-gray-600 dark:text-gray-300">Management GA & Security.</p>
                      
                      {/* buttons */}
                <div className="flex items-center justify-center mt-3 gap-2">

                 <a href="https://boltzindonesia.com/" target="_blank">                        
                  <button type="button" className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-all duration-200 hover:scale-105">
                    🌐 Live Demo
                  </button> 
                    </a> 

                  <a href="https://boltzindonesia.com/login" target="_blank">
                    <button type="button" className="text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-all duration-200 hover:scale-105">
                      📁 Code
                    </button>
                  </a>
                </div>
            
             </div>





        
               
           

          
           



   {/* 6card  */}
   




           </div>

     </div>

    </div>
  );
};

export default Work;
