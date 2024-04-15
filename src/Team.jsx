import React from 'react'
import useTeamData from './Hooks/TeamData'
import TeamCard from './Component/TeamCard'
import { FaAward } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdOutlinePreview } from "react-icons/md";
import Review from './TeamReview';


const Team = () => {
  return (
    <div className='bg-[#24231E] flex  flex-col items-center justify-center gap-[2rem] p-[1rem] w-[100vw] '>
        <div>
        <p className='text-[#4BAF47] text-center font-mono text-[1.4rem] lg:text-[1.8rem] '>Our team</p>
        <h1 className='text-white text-[2rem] font-bold'>Our Dedicated Team</h1>
        </div>
         <Review/>
    </div>
  )
}

export default Team
