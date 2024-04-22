import React from 'react'
import { TiTick } from "react-icons/ti";
import img from '../assets/img/Home.jpg'
import Typewriter from '../Hooks/Typewriter';
import reasearch from '../assets/img/researchlogo.png'
import protoype from '../assets/img/prototype.png'
import marketinglogo from '../assets/img/marketinglogo.png'
import bgcVideo from '../assets/img/bgcVideo.mp4'
const About = () => {
  return (
    <div className='flex flex-col items-center w-[100%] h-fit md:h-[95vh]  gap-[2.5rem] '>
      {/* <video src={bgcVideo} alt='' className='min-w-[100vw] absolute top-0 left-0 h-fit ' loop playsInline muted>

      </video> */}
      <video src={bgcVideo} className='min-w-[100vw] absolute top-[5.7rem] left-0 h-fit lg:w-full' loop autoPlay playsInline muted></video>
      <div className=' gap-[2rem] py-[2rem]  lg:pt-[8rem] flex flex-col items-center z-50 text-black'>
        {/* <p className=' text-white text-[2.5rem]  ont-mono'>Be Natural</p> */}
         <div className='flex flex-col items-center justify-center font-serif  w-[19rem] msm:w-[22rem] sm:w-[26rem] lg:w-[35rem] gap-3 xl:w-[40rem]'>
            <p className=' xl:text-[2.3rem] font-curve text-[1.1rem] lg:text-[1.9rem] sm:text-[1.5rem] md:text-[1.5rem]'>Innovate your food product with us !</p>
            <p className='  xl:text-[1.2rem] text-center sm:text-[1.4rem] text-[1rem] '>Advance solution  in Product development & Pilot Manufacturing</p>
         </div>
        {/* <Typewriter text="Welcome to the Environmental Food Research Center" delay={100} infinite  /> */}
        <div className='flex sm:flex-row flex-col xl:gap-[2rem] gap-[0.5rem] text-black xl:items-center items-start justify-center border-t-2 border-b-2 p-[0.2rem]  '>
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
        <p className='text-center text-black xl:text-[1.2rem] w-[20rem] msm:w-[22rem] sm:w-[30rem] md:text-[1.4rem]  items-start font-bold '>Don't Just dream,create!Bring your food product ideas to life with our expert R&D team</p>
      </div>
    </div>
  )
}

export default About
