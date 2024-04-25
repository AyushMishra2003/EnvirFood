import React, { useEffect } from 'react'

const Order = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const labelStyle = "text-[0.85rem] tracking-wide text-[#cfcfdb]"

    const inputStyle = ' min-w-[19rem] w-[80vw] sm:w-[24rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-red outline-none  text-[0.95rem] tracking-wide resize-none bg-white text-black'
    const main = 'font-[350] text-[0.93rem] tracking-wide text-white list-disc'
    const paraMain = 'flex flex-col items-start justify-center gap-2 p-2 pl-4'
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] p-[1rem] gap-[2rem]'>
          <h1 className='text-[2rem] text-[#22A018] font-bold'>Make  Order</h1>
          <form  className='flex flex-col lg:flex-row items-start justify-center gap-4 w-fit  bg-[#207912c7] p-[2rem] py-[2rem]  sm:p-4 rounded-md shadow-sm shadow-light  '>
<div className='flex flex-col gap-[1.2rem]'>

<input className={inputStyle} type="text" placeholder='Enter name...' name='fullName' />
<input className={inputStyle} type="email" placeholder='Enter email...' name='email'
     />
<input className={inputStyle} type="number" placeholder='Enter number...' name='phoneNumber'
     />
{/* <input className={inputStyle} type="text" placeholder='Enter product name...' name='productName'  /> */}

<div className="flex flex-col items-start justify-center gap-[0.5px]">
    <label htmlFor='category' className={labelStyle}>
        Choose Product
    </label>

    <select className={inputStyle}
        name='category'
         >
        <option name="category" value="" >Select</option>
        <option name="category" value="Sole Proprietorship" >Probiotic Kombucha</option>
        <option name="category" value="Limited Liability Partnerships">Lab Based Safron</option>
        <option name="category" value="Limited Liability Company" >Natural Wine</option>
        <option name="category" value="Farmer Producer Company">Natural Colors</option>
        <option name="category" value="Corporation" >Natural Perfume</option>
    </select>
</div>
</div>
<div className='flex flex-col gap-3'>
<div className="flex flex-col items-start justify-center gap-[0.5px]">
    <label htmlFor='category' className={labelStyle}>
        Product Quanity
    </label>

    <select className={inputStyle}
        name='category'
         >
        <option name="category" value="" >Select</option>
        <option name="category" value="Sole Proprietorship" >1 Box</option>
        <option name="category" value="Limited Liability Partnerships">2 Box</option>
        <option name="category" value="Limited Liability Company" >3 Box</option>
        <option name="category" value="Farmer Producer Company">4 Box</option>
        <option name="category" value="Corporation" >5 Box</option>
        <option name="category" value="Corporation" >6 Box</option>
        <option name="category" value="Corporation" >7 Box</option>

    </select>
</div>

<div className="flex flex-col items-start justify-center gap-[0.5px]">
    <label htmlFor="recruitment"
        className={labelStyle}
    ><span className='mr-1 text-red'>*</span>
        Enter message
    </label>
    <textarea type="text" required
        className={`${inputStyle} p-[5px] h-[6em] resize-none`}
        name='message'
        id='message'
        placeholder='Enter message'/>
</div>
<button type='submit' className='p-[6px] w-full px-4 text-black rounded bg-blue tracking-wide  hover:bg-red-500 transition-all duration-300  bg-white'>Submit</button>
</div>


</form>
    </div>
  )
}

export default Order
