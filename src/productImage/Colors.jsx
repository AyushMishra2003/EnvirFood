import React, { useEffect } from 'react'
import color from '../assets/productImg/colors.jpeg'
const Colors = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='flex flex-col-reverse w-[100vw] items-start justify-center lg:flex-row lg:gap-[2rem] lg:pt-2 lg:pb-3 xl:gap-[4rem]'>
      <div className= 'flex flex-col gap-2 '>
        <h1 className='text-[1.2rem] text-center text-[#803136] font-bold'>What is Plant Based Colors </h1>
        <div className='flex flex-col gap-3 pl-1 lg:w-[40rem] xl:w-[44rem]'>
          <p className='sm:text-[1.1rem] sm:font-normal'>  Embrace the vivid spectrum of nature with our Plant-Based Colors, bidding farewell to artificial dyes and welcoming the vibrant hues derived from fruits, vegetables, and botanical sources. These natural colorants infuse products with visual appeal, from tantalizing foods and beverages to luxurious cosmetics and textiles, all while honoring our pledge to sustainability and eco-friendliness.</p>
          <p>
          Crafted with care and precision, our plant-based colors are a testament to our dedication to quality and purity. Free from synthetic additives and harmful chemicals, they offer a safe and sustainable alternative for those seeking to embrace a more natural lifestyle.
          </p>
          <p>Join us in celebrating the beauty of nature with our Plant-Based Colors, where every shade tells a story of sustainability, creativity, and a deep reverence for the world around us. Let your products shine with the vibrant colors of the earth, and make a statement that echoes our commitment to a brighter, greener future.</p>
        </div>
      </div> 
       <img src={color} className='w-full lg:w-[20rem] xl:w-[30rem]' alt="BuchaDrink" />
    </div>
  )
}

export default Colors
