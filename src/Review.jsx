import React from 'react'
import OurProduct from './Hooks/OurProduct';
import ProductCard from './Component/ProductCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const responsive = {
  0: { items: 1},
  640: { items: 2 },
  768: { items: 2 },
  1024: { items: 2 },
};


const items = OurProduct.map((val, ind) => {
   return (
      <div key={ind + 1} className='flex gap-2'>
          <ProductCard image={val.image} text={val.text} To={val.to}/>
      </div>
  )
})

const Review = () => {
  return (
    <div className='w-[17rem]  sm:w-[39rem] md:w-[40rem] lg:w-[55rem] flex flex-col items-center justify-center  '>
    <AliceCarousel
        mouseTracking
        autoPlayInterval={1200}
        animationDuration={1200}
        infinite
        disableButtonsControls
        // disableDotsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
    />
</div>
  )
}

export default Review
