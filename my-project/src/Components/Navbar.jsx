import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-around border-white' >
       <div className='bg-[#24272C] px-8 py-3 text-[18px] shadow-[0_0_6px_rgba(255,255,255),-2px_-2px_4px_#1B1B1B] rounded-2xl  flex justify-center items-center text-white transition ease-in-out duration-150 transform hover:scale-105 cursor-pointer' > Contact </div>
       <div className='bg-[#24272C] px-8 py-3 text-[18px] shadow-[0_0_6px_rgba(255,255,255),-2px_-2px_4px_#1B1B1B] rounded-2xl  flex justify-center items-center text-white transition ease-in-out duration-150 transform hover:scale-105 cursor-pointer' > Resume </div>
       <div className='bg-[#24272C] px-8 py-3 text-[18px] shadow-[0_0_6px_rgba(255,255,255),-2px_-2px_4px_#1B1B1B] rounded-2xl  flex justify-center items-center text-white transition ease-in-out duration-150 transform hover:scale-105 cursor-pointer' > About </div>
       <div className='bg-[#24272C] px-8 py-3 text-[18px] shadow-[0_0_6px_rgba(255,255,255),-2px_-2px_4px_#1B1B1B] rounded-2xl  flex justify-center items-center text-white transition ease-in-out duration-150 transform hover:scale-105 cursor-pointer' > Certificate </div>
       <div className='bg-[#24272C] px-8 py-3 text-[18px] shadow-[0_0_6px_rgba(255,255,255),-2px_-2px_4px_#1B1B1B] rounded-2xl  flex justify-center items-center text-white transition ease-in-out duration-150 transform hover:scale-105 cursor-pointer' > Projects </div>
    </div>
  )
}

export default Navbar
