import React, { useEffect } from 'react'
import Review from './Review'
import Team from './Team'
import contact from './assets/img/social.jpg'
import { Link } from 'react-router-dom'
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaQuoteLeft } from "react-icons/fa";
import misson from './assets/productImg/Aboutenvi.jpeg'
import FoodProduct from './FoodProduct'
const AboutUsPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='flex flex-col items-center justify-center'>
       <div className='pt-[0.9rem] flex flex-col items-center justify-center gap-[2rem] w-[100vw] p-[1rem] '>
        <h1 className='text-[2rem] font-bold text-green-600 w-fit  border-b '>Our Misson</h1>
        <div className='flex lg:flex-row flex-col items-center gap-[1.5rem] '>
             <img src={misson} alt="MissonImage" className='lg:w-[25rem] lg:h-[25rem] rounded-full' />
              <div className=' lg:w-[30rem] lg:h-fit p-[0.6rem] relative'>
                <p className='font-serif font-medium'>Welcome to the Environmental Foods Research Center, where our vision transcends mere sustenance. We dream of a world where food production harmonizes seamlessly with nature, a world where each meal not only nourishes the body but also nurtures our planet.Envision with us a future where agricultural practices are a testament to sustainability, where every harvest minimizes environmental impact, preserves biodiversity, and champions the fight against climate change. In this future, food security is not just a goal but a guarantee, and human well-being flourishes alongside thriving ecosystems.Join us as we embark on a journey to revolutionize the way we grow, harvest, and consume food. Together, let's pave the path towards a brighter, greener tomorrow—one bite at a time..</p>
                <FaQuoteLeft className='text-[1.7rem] text-[#3CB815] absolute top-[-1rem] left-[-1rem]'/>
              </div>  
            
         </div>
       </div>
      <div className='flex flex-wrap items-center justify-center lg:flex-row p-[1rem] '>
        <div className='flex flex-col gap-[2rem] items-center lg:w-[20rem] '>
          <div className='flex gap-[0.2rem] items-center'>
          <FiTarget className='text-[2rem] text-red-600 sm:text-[2.5rem]' />   
             <p className='font-bold text-[1.6rem] sm:text-[1.9rem]'>What we do</p>
          </div>
          <div className='flex flex-col gap-3 font-normal'>
            <div className='flex flex-col items-start'>
              <p className='font-bold text-[1rem]'>Sustainable:</p>
              <p className='lg:w-[50rem]'> We're dedicated to pioneering agricultural practices that work in harmony with nature. From regenerative farming techniques to organic cultivation methods, we're committed to minimizing environmental impact while maximizing yields.</p>
            </div>
            <div className='flex flex-col items-start gap-3 '>
              <p className='font-bold text-[1rem]'>Nutrition and Health:</p>
              <p className='lg:w-[50rem]'>Our research delves into the nutritional value of foods and their impact on human health. We strive to uncover the secrets of wholesome, nourishing diets that not only sustain life but enhance it.</p>
            </div>
            <div className='flex flex-col items-start gap-3 '>
              <p className='font-bold text-[1rem]'>Climate Resilience</p>
              <p className='lg:w-[50rem]'> In the face of a changing climate, we're at the forefront of developing resilient food systems. Through innovative approaches and strategic planning, we're working to ensure that communities can withstand the challenges of a warming world while still enjoying access to nutritious, sustainable food</p>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <p className='font-bold text-[1rem]'>Food Systems Innvotation</p>
              <p className='lg:w-[50rem]'> We're not content with the status quo. Our team is constantly pushing the boundaries of innovation in food production, distribution, and consumption. Whether it's through technology, policy reform, or community engagement, we're always seeking new ways to build a better food future for all</p>
            </div>
          </div>
        </div>   
      </div>
      <Team/>
      
    </div>
  )
}

export default AboutUsPage
