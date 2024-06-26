import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useTeamData from './Hooks/TeamData';
import TeamCard from './Component/TeamCard';


const responsive = {
  0: { items: 1},
  640: { items: 2 },
  768: { items: 3 },
  1024: { items: 3 },
};


const items = useTeamData.map((val, ind) => {
  return (
     <div key={ind + 1} className='flex gap-1 '>
         <TeamCard image={val.image} name={val.name} profession={val.profession}/>
     </div>
 )
})


const Review = () => {
  return(
    <div className='w-[18rem]  sm:w-[32rem] md:w-[46rem] lg:w-[63rem] flex gap-1 '>
    <AliceCarousel
        mouseTracking
        autoPlayInterval={1200}
        animationDuration={1200}
        infinite
        disableButtonsControls
        disableDotsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
    />
 </div>
  )
}

export default Review
