import React from 'react'
import heroimg from "../assets/AdobeStock_601171862_Preview.jpeg"

const Hero = () => {
  return (
    <div className='mt-[60px] flex flex-col justify-center items-center'>
        <div className=' flex justify-center mt-[60px] items-center' >
            <img src={heroimg} alt="" className=' w-[300px] h-[300px] rounded-full object-cover shadow-[0_0_100px_rgba(255,255,255,0.1)]'/>
        </div>
        <div className=' text-white p-10 w-[500px] flex justify-center items-center flex-col gap-2 ' >
            <div className='text-[28px]' >Hey</div>
            <div className='text-[40px] font-bold '>I'm Ankit Chauhan</div>
            {/* <div className='text-[12px] text-red-700 '> Aspiring </div> */}
            <div className='text-[24px] font-semibold ' >Software Developer <span className=' text-red-500 ' >Engineer</span></div>
            <div className='text-center text-[18px]  '>
            A Computer Science and Engineering student at NIT Silchar, with a solid foundation in software development and problem-solving. My experience spans internships and leadership roles, blending technical skills with team management. I'm seeking SWE, SDE, or data analyst opportunities to contribute and grow.
            </div>
        </div>
        <div className='flex gap-[70px]'>
            <div className='bg-[#24272C] px-8 py-3 text-[18px] shadow-[2px_2px_4px_#1B1B1B,-2px_-2px_4px_#1B1B1B] rounded-2xl  flex justify-center items-center text-white' > Learn More </div>
            <div className='bg-[#24272C] px-8 py-3 text-[18px] shadow-[2px_2px_4px_#1B1B1B,-2px_-2px_4px_#1B1B1B] rounded-2xl  flex justify-center items-center text-white' > Contact me </div>
        </div>
    </div>
  )
}

export default Hero
