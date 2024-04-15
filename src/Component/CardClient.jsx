import React from 'react'

const CardClient = ({image}) => {
  return (
    <div className='flex items-center justify-center '>
       <img src={image} alt="" className='h-[5rem]' />
    </div>
  )
}

export default CardClient
