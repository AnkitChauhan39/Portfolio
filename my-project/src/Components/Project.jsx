import React, { useState } from 'react'
import dev from '../assets/devImage.png'
import ecoSathi from '../assets/Screenshot 2024-10-04 150408.png'
import sphere from '../assets/SphereImage.png'
import Card from './Card'

const Project = () => {

  const [visible,setvisible] = useState({
    name : "DEV-AUCTION",
    image: dev , 
    decription :"A Full stack web application build to connect Potential buyers with the authentic developer" , 
    tags : ["ReactJS","NodeJs","Express","MongoDB","Render"] 
  }) ; 
  
  const projects = [
    {
      name : "DEV-AUCTION",
      image: dev , 
      decription :"A full-stack project that connects developers with buyers, ensuring fair compensation for innovative projects. DevAuction enables developers to auction their projects, ensuring fair compensation. Buyers place bids with the highest bidder receiving the source code" , 
      tags : ["ReactJS","NodeJs","Express","MongoDB","Render"]  
    },
    {
      name : "Eco-Sathi",
      image: ecoSathi , 
      decription :"EcoSathi is an innovative platform designed to bridge the gap between local ragpickers and users, making it easy to schedule waste collection services. Our mission is to create a seamless and efficient system that benefits both the community and the environment." , 
      tags : ["ReactJS","NodeJS","Express","Google-maps-API"] , 
    },
    {
      name : "Arithimatic sphere Alogrithm",
      image: sphere, 
      decription :"Analyzing arithmetic sphere algorithm with Python libraries and 3D visualization tools, prioritizing accuracy and performance. The analysis focuses on applications in sphere generation, computer graphics, virtual reality, image processing, mathematical modeling, and data visualization." , 
      tags : ["Python","numpy","matplotlib"] , 
    }
  ]

  return (
    <div className='mt-[100px] w-[1100px] mx-auto ' >
      <div className='text-[40px] text-white mb-4' >
        Projects
      </div>
      <div className='h-[6px] flex'>
        <div className='w-[70%] bg-blue-500 rounded-l-full  h-full' ></div>
        <div className='w-[30%] bg-yellow-300 rounded-r-full h-full' ></div>
      </div>
      <div className='mt-[50px]' >
        <div className='flex justify-around ' >
          <div className='rounded-full h-[125px] w-[125px] overflow-hidden ' >
            <img className='h-full w-full object-cover rounded-full' src={dev}></img>
          </div>
          <div className='rounded-full h-[125px] w-[125px] overflow-hidden ' >
            <img className='h-full w-full object-cover rounded-full' src={ecoSathi}></img>
          </div>
          <div className='rounded-full h-[125px] w-[125px] overflow-hidden ' >
            <img className='h-full w-full object-cover rounded-full' src={sphere}></img>
          </div>
        </div>
        <div className='border-4 mt-[50px] h-[400px] ' >
          <Card project={visible}/>
        </div>
      </div>
    </div>
  )
}

export default Project
