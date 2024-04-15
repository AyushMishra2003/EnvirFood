import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useClientData from './Hooks/useClientData';
import CardClient from './Component/CardClient';

const responsive = {
    0: { items: 2 },
    640: { items: 4 },
    768: { items: 5 },
    1024: { items: 7 },
};


const items = useClientData.map((val, ind) => {
    return (
        <div key={ind + 1} className=''>
            <CardClient image={val.img}/>
        </div>
    )
})


const ClientPage = () => (
    <div className='w-[20rem]  sm:w-[39rem] md:w-[50rem] lg:w-[65rem]  flex flex-col gap-4  mt-10'>
        <h1 className=' text-[#4BAF47] text-center w-full text-[1.5rem] pt-1 font-bold font-cursive'>Our Happy Client</h1>
        {/* <p className='text-[#4BAF47] text-center font-semibold text-[1.2rem] font-curve'>The exceptional quality of our products is best narrated by our clients, who are the true storytellers.</p> */}
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
);


export default ClientPage