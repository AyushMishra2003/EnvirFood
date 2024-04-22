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
    <div className='relative flex flex-col w-full overflow-hidden sm:items-center sm:justify-center h-fit z-100 '>
      
      <video src={bgcVideo} className='min-w-[100vw] absolute top-0 left-0  min-h-fit' loop autoPlay playsInline muted></video>
      <div className=' msm:gap-[2rem] gap-1  flex flex-col items-center  text-black z-50 pt-8 msm:pb-[5rem] small:pb-[4rem]  small:flex-col vsmall:pb-[3rem] vvsmall:pb-[3rem] lg:pb-[5rem]'>
         <div className='flex flex-col items-center justify-center font-serif  w-[19rem] msm:w-[22rem] sm:w-[26rem] lg:w-[35rem] gap-3 xl:w-[40rem]'>
            <p className=' xl:text-[2.3rem] font-curve text-[1.1rem] lg:text-[1.9rem] sm:text-[1.5rem] md:text-[1.5rem]'>Innovate your food product with us !</p>
            <p className='lg:text-[1.1rem] text-center sm:text-[1.4rem] text-[1rem] font-semibold '>Advance solution  in Product development & Pilot Manufacturing</p>
         </div>
        {/* <Typewriter text="Welcome to the Environmental Food Research Center" delay={100} infinite  /> */}
        <div className='flex xl:gap-[2rem] msm:gap-[0.5rem] gap-0   text-black xl:items-center items-start justify-center border-t-2 border-b-2  border-[#0000FF] '>
          <div className='flex sm:text-[1.5rem] items-center justify-center text-[1rem]'>
            <img src={reasearch} alt="" className='xl:w-[4rem]' />
            <p className='font-serif'>Research</p>
          </div>
          <div className='flex sm:text-[1.5rem] items-center justify-center gap-1 text-[1rem] '>
            <img src={protoype} alt=""  className='xl:w-[4rem]' />
            <p className='font-serif'>Prototype</p>
          </div>
          <div className='sm:text-[1.5rem] flex items-center justify-center  text-[1rem] font-bold msm:text-[#0000FF]'>
            <img src={marketinglogo} alt="" className='xl:w-[4rem]' />
            <p className='font-serif'>Marketing</p>
          </div>
        </div>
        <p className='text-center text-black xl:text-[1rem] md:text-[1.4rem] text-[1rem]  items-start hidden msm:visible '>Don't Just dream,create!Bring your food product ideas to life with our expert R&D team</p>
      </div>
    </div>
  )
}

export default About
