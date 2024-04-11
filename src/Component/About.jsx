import React from 'react'
import { TiTick } from "react-icons/ti";
import img from '../assets/img/Home.jpg'
import Typewriter from '../Hooks/Typewriter';
import reasearch from '../assets/img/researchlogo.png'
import protoype from '../assets/img/prototype.png'
import marketinglogo from '../assets/img/marketinglogo.png'
const About = () => {
  return (
    <div className='flex flex-col items-center hero-img w-[100%] h-fit gap-[2.5rem]'>
     
      <div className=' gap-[2rem] py-[2rem] xl:py-[5rem] lg:py-[4rem] flex flex-col items-center '>
        {/* <p className=' text-white text-[2.5rem]  ont-mono'>Be Natural</p> */}
         <div className='flex flex-col items-center justify-center font-serif  w-[19rem] msm:w-[22rem] sm:w-[26rem] lg:w-[35rem] gap-3 xl:w-[40rem]'>
            <p className='text-white xl:text-[2.3rem] font-curve text-[1.1rem] lg:text-[1.9rem] sm:text-[1.5rem] md:text-[1.5rem]'>Innovate your food product with us !</p>
            <p className='text-white  xl:text-[1.2rem] text-center sm:text-[1.4rem] text-[1rem] '>Advance solution  in Product development & Pilot Manufacturing</p>
         </div>
        {/* <Typewriter text="Welcome to the Environmental Food Research Center" delay={100} infinite  /> */}
        <div className='flex sm:flex-row flex-col xl:gap-[2rem] gap-[0.5rem] text-white xl:items-center items-start justify-center border-t-2 border-b-2 p-[0.2rem] b '>
          <div className='flex text-[1.5rem] items-center justify-center'>
            <img src={reasearch} alt="" className='xl:w-[4rem]' />
            <p className='font-serif'>Research</p>
          </div>
          <div className='flex text-[1.5rem] items-center justify-center gap-[2rem]'>
            <img src={protoype} alt=""  className='xl:w-[4rem]' />
            <p className='font-serif'>Prototype</p>
          </div>
          <div className='text-[1.5rem] flex items-center justify-center gap-[2rem]'>
            <img src={marketinglogo} alt="" className='xl:w-[4rem]' />
            <p className='font-serif'>Marketing</p>
          </div>
        </div>
        <p className='text-center text-white xl:text-[1rem] w-[20rem] msm:w-[22rem] sm:w-[30rem] md:text-[1.4rem]  items-start'>Don't Just dream,create!Bring your food product ideas to life with our expert R&D team</p>
      </div>
    </div>
  )
}

export default About
