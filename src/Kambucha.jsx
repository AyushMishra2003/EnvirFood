import React, { useEffect } from 'react'
import packDrink from './assets/img/kamboocha.jpg'
import kamboocha from './assets/img/kamboocha2.png'
import planticon from './assets/img/planticon.png'
import organic from './assets/img/organicicon.jfif'
import packing from './assets/img/packing.jfif'
import Typewriter from './Hooks/Typewriter'
import reason from './assets/img/reason.avif'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom'
const Kambucha = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return(
  <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col  p-[0.4rem] pt-[1.2rem]  md:items-center md:justify-center lg:flex-row  w-[100vw]'>
      <div className='p-[2rem] flex flex-col gap-[1rem] md:items-center md:justify-center md:w-[30rem] lg:items-start '>
        <h1 className='text-[1.5rem] text-[#321895] font-bold sm:text-[2rem]'>What is Kombucha</h1>
        <p className='sm:text-[1.1rem] sm:font-normal'>Kombucha is an ancient fermented tea that has grown in popularity around the world because of its amazing taste and health benefits. This elixir of life is rich in probiotics and antioxidants.</p>
      </div>
       <img src={kamboocha} className='xl:w-[20rem] sm:w-[30rem]' alt="BuchaDrink" />
    </div>
    <div className='flex flex-col items-center justify-center p-[2rem] gap-[3rem]'>
      {/* <Typewriter text="What Make Kombucha Awesome Drink" delay={100} infinite /> */}
      <p className='xl:text-[2.5rem]  text-[2rem] text-center font-bold font-mono'>What Make  <span className='text-red-500'>  Kombucha</span> Awesome Drink <span className='text-[#FFA500]'>Flavour</span></p>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-[2rem]'>
        <div className='border border-[#33f211] lg:w-[20rem] flex flex-col items-center justify-center rounded-[0.5rem] hover:shadow-[5px_10px_5px_#33f211] gap-[0.4rem] ease-in duration-300 pt-[1rem] pb-[1rem] pl-[1rem] cursor-pointer'>
           <img src={planticon} alt="" className='lg:w-[8rem] lg:h-[8rem] rounded-[50%] border border-[#33f211] shadow-[0px_0px_5px_#33f211]' />
           <p className='text-[1.3rem] font-semibold text-[#33f211]'>Plant Based</p>
           <p className=''>Instead of traditional tea leaves, plant-based kombucha may use ingredients such as herbs, flowers, fruits, or even vegetables to infuse flavor into the brew. Common examples include hibiscus, chamomile, ginger, berries, and citrus fruits</p>
        </div> 
        <div className='border border-[#2b11f2] lg:w-[20rem] flex flex-col items-center justify-center rounded-[0.5rem] hover:shadow-[5px_10px_5px_#2b11f2] gap-[0.4rem] ease-in duration-300 pt-[1rem] pb-[1rem] cursor-pointer p-[1rem]'>
           <img src={packing} alt="" className='lg:w-[8rem] lg:h-[8rem] xl:object-cover rounded-[50%] border border-[#2b11f2] shadow-[0px_0x_5px_#2b11f2]' />
           <p className='text-[1.3rem] font-semibold text-[#2b11f2]'>Substainable packaging</p>
           <p className=''> Sustainable packaging options, such as recyclable glass bottles or refillable containers, can be used to package plant-based kombucha. Minimizing single-use plastics and opting for eco-friendly packaging materials reduces the environmental impact of the product.</p>
        </div> 
        <div className='border border-[#f21137] lg:w-[20rem] flex flex-col items-center justify-center rounded-[0.5rem] hover:shadow-[5px_10px_5px_#f21137] gap-[0.4rem] ease-in duration-300 pt-[1rem] pb-[1rem] cursor-pointer p-[1rem]'>
           <img src={organic} alt="" className='lg:w-[8rem] lg:h-[8rem] rounded-[50%] border border-[#f21137] shadow-[0px_0px_5px_#f21137]' />
           <p className='text-[1.3rem] font-semibold text-[rgb(242,17,55)]'>Certified organic</p>
           <p className=''>Overall, certified organic kombucha reflects a commitment to environmental sustainability, supporting organic farming practices, biodiversity conservation, and responsible stewardship of natural resources.</p>
        </div> 
      </div>
    </div>
    <div className='pt-[3rem]  flex flex-col items-center justify-center'>
      <p className='xl:text-[3rem]  text-[2rem] text-center font-bold font-mono'>Try And <span className='text-red-500'>Choose</span> All the <span className='text-[#FFA500]'>Flavour</span></p>
      <div className='flex items-center justify-between gap-[2rem]'>
        <img src={packDrink} alt="" className='lg:w-[30rem]' />
        <div className='xl:w-[30rem] flex flex-col  gap-[2rem] '>
             <h1 className='text-[2.5rem] text-[#321863] font-mono '>Trial Pack</h1>
             <p className='text-[1.2rem] font-normal'>If you're looking to purchase kombucha products, you have several options depending on your location and preferences. Here are some common places where you can buy kombucha</p>
             <Link to={"/shop"}><button className='px-[4rem] p-[0.4rem]  rounded-[0.3rem] bg-[#321863] text-white  hover:bg-white hover:text-black border border-[#321863] ease-in duration-300 w-fit'>MAKE ORDER</button>
       </Link>
        </div>
      </div>
    </div>
     <div className='p-[2rem]  pt-[3rem] w-[100vw] flex flex-col gap-[2rem] pb-[2rem]'>
      <h1 className='text-center font-bold text-[2rem]'>Latest News</h1>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-[2rem]'>
       <div className='flex flex-col xl:gap-[5rem xl:p-[0.3rem] xl:w-[20rem]'>
         <img src={reason} alt="" />
         <h1 className='font-normal text-[1rem] hover:text-red-600 cursor-pointer ease-in duration-200'>Beat the summer heat with a refreshing Kombucha booch!</h1>
       </div>
       <div className= 'flex flex-col gap-[5rem p-[0.3rem] w-[20rem]'>
         <img src={reason} alt="" />
         <h1 className='font-normal text-[1rem] hover:text-red-600 cursor-pointer ease-in duration-200'>Beat the summer heat with a refreshing Kombucha booch!</h1>
       </div>
       <div className='flex flex-col gap-[5rem p-[0.3rem] w-[20rem]'>
         <img src={reason} alt="" />
         <h1  className='font-normal text-[1rem] hover:text-red-600 cursor-pointer ease-in duration-200'>Beat the summer heat with a refreshing Kombucha booch!</h1>
       </div>
     </div>
     </div>
  </div>
)
  }
export default Kambucha
