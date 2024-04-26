import React, { useEffect } from 'react'
import flavor from '../assets/productImg/flavorExtract.jpeg'
import { Link } from 'react-router-dom'
const FlavorExtract = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <div className='flex flex-col items-center justify-center '>
    <div className='flex flex-col-reverse w-[100vw] items-start justify-center lg:flex-row lg:gap-[2rem] lg:pt-2 lg:pb-3 xl:gap-[4rem] '>
      <div className= 'flex flex-col gap-2  p-[1rem]'>
        <h1 className='text-[1.2rem] text-center text-[#803136] font-bold'>What is Plant-Based Flavor Extracts </h1>
        <div className='flex flex-col gap-3 pl-1 lg:w-[40rem] xl:w-[44rem]'>
          <p className='sm:text-[1.1rem] sm:font-normal'> Delve into a world of pure flavor with our Plant-Based Flavor Extracts, crafted from nature's finest offerings. Our extracts capture the essence of botanical treasures, delivering intense and authentic flavors that elevate culinary creations to new heights. Versatile and vibrant, these extracts are the perfect addition to a wide array of dishes, from savory to sweet, offering depth and complexity while remaining entirely plant-based..</p>
          <p>
          Drawing inspiration from the rich diversity of plant sources, we meticulously extract each flavor to preserve its natural essence. Whether it's the robust aroma of fresh herbs, the sweet tang of ripe fruits, or the subtle notes of exotic spices, our extracts embody the true essence of nature's bounty.
          </p>
          <p>Experience the culinary possibilities with our Plant-Based Flavor Extracts, where every drop is a testament to quality, purity, and innovation. Enhance your dishes with the unparalleled taste of nature, and discover a world of flavor without compromise.</p>
        </div>
       <Link to={"/shop"}><button className='px-[4rem] p-[0.4rem]  rounded-[0.3rem] bg-[#321863] text-white  hover:bg-white hover:text-black border border-[#321863] ease-in duration-300 w-fit'>MAKE ORDER</button>
       </Link>
      </div> 
       <img src={flavor} className='w-full lg:w-[20rem] xl:w-[30rem]' alt="BuchaDrink" />
    </div>
    </div>
  )
}

export default FlavorExtract
