import React, { useEffect } from 'react'
import wine from '../assets/img/wineBottle.jpg'
const Wine = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col-reverse w-[100vw] items-start justify-center lg:flex-row lg:gap-[2rem] lg:pt-2 lg:pb-3 xl:gap-[4rem]'>
      <div className= 'flex flex-col gap-2 '>
        <h1 className='text-[1.2rem] text-center text-[#803136] font-bold'>What is Micogreens-Infuenced Wines</h1>
        <div className='flex flex-col gap-3 pl-1 lg:w-[40rem] xl:w-[44rem]'>
          <p className='sm:text-[1.1rem] sm:font-normal'>Elevate your wine experience to new heights with our groundbreaking Microgreens-Influenced Wines, where innovation and sustainability converge in a harmonious fusion. Infused with the delicate flavors and nutrients of microgreens, our wines offer a sensory journey unlike any other, inviting you to explore a realm of taste and terroir previously uncharted.</p>
          <p>
          Each sip of our Microgreens-Influenced Wines is a celebration of innovation and craftsmanship, a testament to our commitment to pushing the boundaries of winemaking. By merging the worlds of agriculture and viticulture, we've created wines that not only tantalize the palate but also nourish the body with the goodness of microgreens
          </p>
          <p>Indulge in the unique flavors and textures of our Microgreens-Influenced Wines, and embark on a journey of discovery where tradition meets innovation in perfect harmony. With every bottle, we invite you to raise a glass to the future of wine, where sustainability, flavor, and creativity intertwine to create an unforgettable experience</p>
        </div>
        <button className='px-[4rem] p-[0.4rem]  rounded-[0.3rem] bg-[#321863] text-white  hover:bg-white hover:text-black border border-[#321863] ease-in duration-300 w-fit'>SHOP</button>
      </div> 
       <img src={wine} className='w-full lg:w-[20rem] xl:w-[25rem]' alt="BuchaDrink" />
    </div>

    </div>
  )
}

export default Wine
