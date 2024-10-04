import React from 'react'
import { FaGithub } from "react-icons/fa";

const Card = ({project}) => {


  return (
    <div className='p-4 bg-[#2e5ee212] ' >
        <div className=' shadow-2xl w-full h-[400px] rounded-2xl overflow-hidden '>
            <img className='h-full w-full object-cover ' src={project.page}></img>
        </div>
        <div className='p-4' >
            <div className='text-white text-[32px] font-semibold ' >{project.name}</div>
            <div className='text-[#cecbcbac]' >{project.decription}</div>
        </div>
        <div className='p-4 flex gap-10  items-center'>
            <button className='p-4 shadow-2xl rounded-2xl bg-red-900 text-white w-[150px] font-semibold text-[18px] ' > LIVE LINK </button>
            <FaGithub className='text-[50px] text-white ' />
        </div>
    </div>
  )
}

export default Card
