import React, { useState } from 'react'

import { FaBars , FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';



import {Link} from "react-scroll"

const Navbar = ({theme,lightChange}) => {

    const [nav,setNav] = useState(true)


    function handlechange(){
        setNav(prev => !prev)
    }

   

  return (
    // Navbar container


    <div className= {theme? ( 'p-4 w-full h-30 bg-white font-bold shadow-box-shadow text-black flex justify-between sticky bottom-0 top-0 z-20') : ('p-4 w-full h-30 bg-[#0a192f] text-gray-400 flex justify-between sticky bottom-0 top-0 z-20' ) } >
      <div className='flex items-center'>
      <h1 className= {theme? 'text-4xl mt-3 text-black font-extrabold font-signature' : 'text-4xl mt-3 text-white font-extrabold font-signature'}> MR.Kholis</h1>
              {theme? <img className='ml-5 cursor-pointer' src='/images/on.png' width={55} alt='/'  onClick={lightChange} /> 
              : <img className='ml-5 cursor-pointer' src='/images/off.png' width={55} alt='/' onClick={lightChange}  /> }  

              {theme? <img className='ml-2 p-0 cursor-pointer' src='/images/lightbulb.png' alt='/'  width={45}/> : null}


{/* <BsLightbulbOff size={35} className='ml-5 mt-2 cursor-pointer' onClick={lightChange}/> */}
      </div>
            
         {/* Desktop Devices */}
       <div className='pr-5 pt-4 cursor-pointer mr-5 hidden md:flex'>
           <ul className='flex text-xl'>

           <Link to="Main" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600 hover:overline '>Home</li>
            </Link>
                    
            <Link to="About" spy={true} smooth={true} offset={50} duration={900} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600 hover:overline'>About</li>
            </Link>

            <Link to="Skills" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600 hover:overline'>Skills </li>
            </Link>

            <Link to="Work" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600 hover:overline'>Projeck</li>
            </Link>

            <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600 hover:overline'>Contact</li>
            </Link>

            </ul>  
       </div>  


    {/* mobile Devices */}
       <ul className={ nav ? 'hidden' : 'flex flex-col h-screen cursor-pointer text-3xl justify-center items-center font-bold text-red-500 mx-auto  md:hidden'}>

             
           <Link to="Main"  offset={50} duration={500}  onClick={handlechange} >
                      <li className='mb-10  hover:text-blue-600 hover:overline'>Home</li>
            </Link>
                    
            <Link to="About"   offset={50} duration={900}  onClick={handlechange} >
                      <li className='mb-10  hover:text-blue-600 hover:overline'>About</li>
            </Link>

            <Link to="Skills" offset={50} duration={500}  onClick={handlechange} >
                      <li className='mb-10  hover:text-blue-600 hover:overline'>Skills </li>
            </Link>

            <Link to="Work" smooth={true} offset={50} duration={500} onClick={handlechange} >
                      <li className='mb-10  hover:text-blue-600 hover:overline'>Projeck</li>
            </Link>

            <Link to="Contact" offset={50} duration={500}   onClick={handlechange}>
                      <li className='mb-10   hover:text-blue-600 hover:overline'>Contact</li>
            </Link>





            </ul>


  {/* hamburger */}
  <div className='m-3 cursor-pointer md:hidden ' onClick={handlechange}>
      { nav ? <FaBars size={25} className='hover:scale-125'/> : <ImCross size={25}/> }
 </div>




{/* Social Icons */}
  <div className=' md:flex fixed flex-col top-[40%] left-0 '> 
     
       <ul >
    

       <li className=' w-[160px] h-[60px] flex items-center justify-between bg-blue-500 ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='https://www.linkedin.com/in/kholis-kamaluddin-wahib-5b536018a/' target='_blank' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4'> 
             LinkedIn <FaLinkedin size={45}/> 
              </a> 
        </li>

        <li className='w-[160px] h-[60px]  flex items-center justify-between bg-purple-800 ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='https://github.com/kholiskamal' target='_blank' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4'> 
             Github <FaGithub size={45}/> 
              </a> 
        </li>

        <li className='w-[160px] h-[60px]  flex items-center justify-between bg-pink-700 ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='https://www.instagram.com/khol_lis312/' target='_blank' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4'> 
             Intagram <FaInstagram size={45}/> 
              </a> 
        </li>
       

        <li className='w-[160px] h-[60px]  flex items-center justify-between bg-green-600 ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='https://api.whatsapp.com/send/?phone=%2B6282289659204&text&type=phone_number&app_absent=0' target='_blank' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4 '> 
             Whatshap <FaWhatsapp size={45}/> 
              </a> 
        </li>
  

       </ul>
  </div>


    </div>

    
  )
}

export default Navbar
