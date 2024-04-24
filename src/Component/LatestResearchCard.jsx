import React from 'react'
import { Link } from 'react-router-dom'
const LatestResearchCard = ({image,For,link,content}) => {
  return (
    <Link to={link}>
    <div className='flex flex-col  justify-between gap-[0.9rem] shadow-[0px_0px_5px_#808080]  relative lg:w-[20rem] xl:w-[25rem]  md:w-fit  '>
    <img src={image} alt="" className='xl:w-[25rem] h-[20rem] md:w-[45rem] md:h-[25rem]  xl:h-[15rem] object-cover  ' />
    <p className='text-[1rem] font-semibold text-start  md:w-[45rem] lg:w-[18rem] pl-1 xl:w-[25rem] text-black line-clamp-4 p-2 pt-0'>{content}</p>
    <button className='p-[0.3rem]  px-[1.3rem] rounded-[0.4rem] bg-[#4BAF47]  text-white border-none absolute top-[6rem] left-[2rem] sm:top-[13rem] sm:left-[8rem] md:top-[10rem] md:left-[14rem] lg:top-[6rem] lg:left-[5rem] xl:top-[11rem]  '>{For}</button>
    </div>
    </Link>
  )
}

export default LatestResearchCard
