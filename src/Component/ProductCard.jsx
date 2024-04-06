import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
const ProductCard = ({image,text,To}) => {
  return (
    <div className='flex flex-col items-center justify-center '>
       <Link to={To}>
       <div className='relative flex flex-col items-center justify-center'>
       <img src={image} className='w-[20rem] h-[10rem] sm:w-[25rem] sm:h-[25rem]  lg:w-[40rem] lg:h-[20rem] xl:w-[40rem] xl:h-[20rem] md:w-[30rem] md:h-[30rem] object-cover ' alt="" />
       <div className=' lg:w-[20rem] w-[10rem]  flex flex-col items-center  p-[1rem] rounded-[0.5rem] bg-[#FFFFFFF] absolute  cursor-pointer hover:bg-[#FF8E00]  bg-[#bfc2b8] '>
         <p className='lg:text-[2rem] text-[1.2rem] text-black text-center'>{text}</p>
         <button className='lg:p-[0.1rem] px-[0.2rem] lg:px-[2rem] flex lg:items-center gap-[1rem] rounded-md bg-[#4BAF47] text-white  '>
            <p className=''>View Detail</p>
            <FaLongArrowAltRight />
         </button>
       </div>
       </div>
       </Link>
    </div>
  )
  }

export default ProductCard
