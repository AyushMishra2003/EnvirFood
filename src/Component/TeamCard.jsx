import React from 'react'
import { Link } from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
const TeamCard = ({image,name,profession}) => {
  return (
    <div className=' w-[19rem] relative sm:w-[28rem]  lg:w-[20rem] lg:h-[20rem] xl:w-[20rem]  flex gap-[2rem] h-[20rem] rounded overflow-hidden '>
       <img src={image} alt="" className='object-cover w-full h-full' />
       <div className='bg-[#e1e1e0] flex flex-col  w-full absolute bottom-0 items-center'>
         <p className='text-[1rem] font-bold text-black text-center  w-fit' >{name}</p>
         <p className='text-[#4BAF47] text-[1rem] font-semibold  text-center w-fit'>{profession}</p>
       </div>
    </div>
  )
}

export default TeamCard
