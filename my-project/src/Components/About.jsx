import React from 'react'

const About = () => {
  return (
    <div className=' mt-[140px] flex justify-center gap-[100px] items-center ' >
        <div className='border-4 w-[400px] h-[400px] rounded-2xl object-cover shadow-[5px_5px_50px_rgba(0,0,0,0.3),-5px_5px_15px_rgba(0,0,0,0.2),0px_-5px_25px_rgba(255,255,255,0.2)]'  >

        </div>
        <div className='flex flex-col gap-4 w-[400px]  text-white' >
          <div className=' text-[32px] font-semibold ' >About me</div>
          <div className='text-[19px]' >
              I am actively seeking opportunities to apply my 
              acquired skills and knowlodge to real-world projects . 
              My educational background has equipped me with solid foundation
              in Full stack development and programming lanuages such as C++ 
              , python and javascript . Additionally , i have gained practical
              experience through hands-on projects , both independently and colaboratively
          </div>
        </div>
      
    </div>
  )
}

export default About
