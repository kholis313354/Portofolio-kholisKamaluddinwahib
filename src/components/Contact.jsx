import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Contact = ({theme}) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    <div name='Contact' className={theme? 'w-full min-h-screen bg-[#ffffff] text-white flex justify-center items-center p-16' : 'w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-16'}>
        <form method='POST' action="https://getform.io/f/cb4a0874-2222-4683-8977-323b0671c68b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 max-w-[600px]'>
            <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                <p className={theme? 'text-4xl font-bold inline border-b-4 border-pink-600 text-black' : 'text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'}>Contact</p>
                </AnimationOnScroll>
                <p className={theme ? 'text-black font-bold py-4 max-w-[400px]' : 'text-gray-300 py-4 max-w-[400px]'}> / / Send me a message below and send me an email  </p>
            </div>
            <input className={theme? 'bg-[#ccd6f6] text-black p-2 placeholder:text-black placeholder:font-bold' : 'bg-[#ccd6f6] p-2'} type="text" placeholder='Name' name='name' required />
            <input className={theme ? 'my-4 p-2 bg-[#ccd6f6] text-black  placeholder:text-black placeholder:font-bold'  : 'my-4 p-2 bg-[#ccd6f6]'} type="email" placeholder='Email' name='email' required/>
            <textarea className={theme? 'bg-[#ccd6f6] p-2  text-black  placeholder:text-black placeholder:font-bold' : 'bg-[#ccd6f6] p-2'} name="message" rows="10" placeholder='Message' required></textarea>
            <AnimationOnScroll animateIn="animate__swing">
            <button className={theme? 'text-black border-2 border-black hover:bg-blue-400 hover:text-black font-bold px-4 py-3 my-8 mx-auto flex items-center'
            :  'text-white border-2 hover:bg-yellow-600 hover:text-black font-bold px-4 py-3 my-8 mx-auto flex items-center'}>
            Send
            </button>
            </AnimationOnScroll>
        </form>
    </div>


</AnimationOnScroll>

  


  )
}

export default Contact