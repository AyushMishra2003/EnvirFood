import React from 'react'
import aboutus from './assets/productImg/AboutEnvir.jpeg'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div className='flex flex-col  items-center justify-center  lg:flex-row lg:gap-[2rem] pt-[1.5rem]  text-black '>
      <div>
        <img src={aboutus} className='w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[35rem] lg:w-[22rem] lg:h-[22rem] xl:w-[25rem] xl:h-[25rem] rounded-full' alt="" />
      </div>
      <div className='flex flex-col justify-center gap-[1.3rem]   lg:items-start  p-[2rem] lg:w-[38rem] xl:w-[40rem] '>
        <div>
        <p className='text-[#4BAF47] text-start text-[1.2rem] font-bold'>ABOUT US</p>
        <p className='text-[2.2rem]  font-bold sm:text-[2.5rem] text-black '>Environmental Foods</p>
      </div>
      <div className=' flex flex-col gap-[1.2rem] '>
      <p className='text-[1.2rem] font-bold  w-[18rem] msm:w-[22rem] sm:w-[30rem]  lg:w-[32rem] md:w-[37rem] text-black'>Welcome to the <span className='text-[#4BAF47]'>Environmental Foods Research Center</span> where we are dedicated to pioneering sustainable solutions for the food industry we understand the critical intersection between food production, environmental impact, and human health. Our mission is to conduct innovative research, foster collaboration, and provide actionable insights to promote a healthier, more sustainable future for all.</p>
      <div >
        <div className='flex items-center gap-[1rem] text-black'>
           <p className=' border-none rounded-[50%] p-[0.1rem] bg-[#EEC044]'><TiTick className='text-[#ffffff]  text-[1.3rem]'/></p>
           <p className='text-[1.2rem] font-semibold'>Nutrition and Health</p>
        </div>
        <div className='flex items-center gap-[1rem] '>
          <p className=' border-none rounded-[50%] p-[0.1rem] bg-[#eec044]'><TiTick className='text-[#ffffff] text-[1.3rem]'/></p>
           <p className='text-[1.2rem] font-semibold'>Food Waste Reduction</p>
        </div>
        <div className='flex items-center gap-[1rem]'>
           <p className=' border-none rounded-[50%] p-[0.1rem] bg-[#EEC044]'><TiTick className='text-[#ffffff] text-[1.3rem]'/></p>
           <p className='text-[1.2rem] font-semibold'>Sustainable Agriculture</p>
        </div>
      </div>  
      <Link to={"/about"}>
        <button className='p-[0.8rem] items-center justify-center rounded-[0.3rem] bg-[#4BAF47] text-white hover:bg-[#ffffff] hover:text-black border border-[#4BAF47] ease-in duration-300 w-fit'>DISCOVER MORE</button>
      </Link>  
      </div>
      </div>
    </div>
  )
}

export default AboutUs
