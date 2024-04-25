import React, { useEffect } from 'react'
import product1 from '../assets/productImg/perfume.jpeg'
const Perfume = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
    <div className='flex flex-col-reverse w-[100vw] items-start justify-center lg:flex-row lg:gap-[2rem] lg:pt-2 lg:pb-3 xl:gap-[4rem]'>
      <div className= 'flex flex-col gap-2 '>
        <h1 className='text-[1.2rem] text-center text-[#803136] font-bold'>What is Plant Based Perfume </h1>
        <div className='flex flex-col gap-3 pl-1 lg:w-[40rem] xl:w-[44rem]'>
          <p className='sm:text-[1.1rem] sm:font-normal'> Transport yourself to a realm of natural beauty with our Plant-Based Perfume collection. Enriched with botanical ingredients, our fragrances offer a sustainable alternative to conventional perfumes derived from animal products or synthetic chemicals. Each scent is a harmonious blend of nature's finest essences, meticulously crafted to evoke the sensory delights of the natural world.</p>
          <p>
          Our commitment to sustainability extends beyond ingredients to encompass every aspect of our perfume-making process. From ethically sourced botanicals to eco-friendly packaging, we strive to minimize our environmental footprint while maximizing your olfactory pleasure.
          </p>
          <p>Indulge in the essence of nature with our Plant-Based Perfumes, where each fragrance is a celebration of biodiversity and the interconnectedness of all living things. With every spritz, immerse yourself in the beauty of the natural world and rediscover your connection to the environment.</p>
        </div>
        <button className='px-[4rem] p-[0.4rem]  rounded-[0.3rem] bg-[#321863] text-white  hover:bg-white hover:text-black border border-[#321863] ease-in duration-300 w-fit'>SHOP</button>
      </div> 
      <button className='px-[4rem] p-[0.4rem]  rounded-[0.3rem] bg-[#321863] text-white  hover:bg-white hover:text-black border border-[#321863] ease-in duration-300 w-fit'>SHOP</button>
       <img src={product1} className='w-full lg:w-[20rem] xl:w-[25rem]' alt="BuchaDrink" />
    </div>
   </div> 
  )
}

export default Perfume
