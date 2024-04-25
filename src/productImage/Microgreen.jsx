import React, { useEffect } from 'react'
import product from '../assets/productImg/mircogreen.jpeg'
import { Link } from 'react-router-dom'
const Microgreen = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <div>
      <div className='flex flex-col-reverse w-[100vw] items-start justify-center lg:flex-row lg:gap-[2rem] lg:pt-2 lg:pb-3 xl:gap-[4rem]'>
      <div className= 'flex flex-col gap-2  p-[1rem]'>
        <h1 className='text-[1.2rem] text-center text-[#803136] font-bold'>Nutrient Rich MICROGREEN SAUCES</h1>
        <div className='flex flex-col gap-3 pl-1 lg:w-[40rem] xl:w-[44rem] '>
          <p className='sm:text-[1.1rem] sm:font-normal'> Indulge in our Nutrient-Rich Microgreen Sauces, where the extraordinary meets the everyday. Through innovative techniques, we've unlocked the remarkable potential of microgreens, infusing each savory sauce with an unparalleled concentration of essential vitamins, minerals, and antioxidants. Harnessing the power of nature's miniature powerhouses, our sauces boast up to 100 times the nutrient value of their mature counterparts, delivering a potent dose of goodness with every delectable dollop.</p>
          <p>
          These sauces aren't just culinary delights; they're wellness elixirs, designed to nourish both body and soul. With each spoonful, you savor not only a burst of flavor but also a wealth of health benefits, promoting vitality and vitality. Whether drizzled over salads, used as a dip, or incorporated into your favorite dishes, our Nutrient-Rich Microgreen Sauces elevate every meal to new heights of taste and nutrition..
          </p>
          <p>Embrace the future of food with our microgreen-infused creations, where health, flavor, and sustainability converge in perfect harmony. Experience the difference of our sauces and taste the extraordinary in every bite.</p>
        </div>
        <Link to={"/shop"}><button className='px-[4rem] p-[0.4rem]  rounded-[0.3rem] bg-[#321863] text-white  hover:bg-white hover:text-black border border-[#321863] ease-in duration-300 w-fit'>MAKE ORDER</button>
       </Link>
      </div> 
       <img src={product} className='w-full lg:w-[20rem] xl:w-[30rem]' alt="BuchaDrink" />
    </div>
     
    </div>
  )
}

export default Microgreen
