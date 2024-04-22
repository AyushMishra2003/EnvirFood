import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch,CiUser } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { CiInstagram } from "react-icons/ci";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import logo from '../assets/img/eflogo1.png'
const Header = () => {
  return (
    <div className="text-green-500 bg-black navbar">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <GiHamburgerMenu className='text-[1.5rem]'/>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow  w-[100vw] transition-[2s] flex flex-col items-center gap-[2.5rem]  absolute top-[-2rem] left-[-1rem]  bg-black ">
       <div className='flex justify-center items-center gap-[2rem] '> 
         <Link to={"/"}>
            <img  className='w-[4rem] '  src={logo} alt="ecologo"  />
         </Link>
        <Link>
            <p className='sm:text-[1.3rem] text-[1.2rem] font-a'>Environmental Food Pvt Ltd</p>
        </Link>
        </div> 
        <div className='flex flex-col items-center justify-center '>
        <Link to="/"><li className='border-t w-[100vw] items-center p-2 hover:bg-[#1a1a1a7c]'><a className='text-[1.2rem] '>Home</a></li></Link>
      <Link to={"/Contact"}><li className='text-[1.2rem] border-t border-white w-[100vw] items-center p-2 hover:bg-[#1a1a1a7c]'><a className='text-[1.2rem]'>Contact Us</a></li></Link>
      <Link to={"/About"}><li className='text-[1.2rem] border-t border-white w-[100vw] items-center p-2 hover:bg-[#1a1a1a7c]'><a className='text-[1.2rem]'>About Us</a></li></Link>
      <Link to={"/"}><li className='text-[1rem] border-t border-white w-[100vw] items-center p-2 hover:bg-[#1a1a1a7c]'><a className='text-[1.2rem]'>Application</a></li></Link>
        {/* <li className='border-t border-white w-[100vw] items-center'><a className='text-[1.2rem]'>Application</a></li> */}
        <li className='border-t border-white w-[100vw] items-center p-2 hover:bg-[#1a1a1a7c]'><a className='text-[1.2rem]'>Industry</a></li>
        <li className='border-y  border-white w-[100vw] items-center p-2 hover:bg-[#1a1a1a7c]'><a className='text-[1.2rem]'>Insight</a></li>
        </div>
      </ul>
    </div>
       <div className="flex items-center justify-center gap-3 p-2 rounded-md">
        <Link to={"/"}>
          <img  className='w-[4rem]'  src={logo} alt="ecologo" />
        </Link>
        <Link to={"/"}> 
             <p className='text-[0.9rem] hidden lg:block font-curve font-bold' >Environmental Food Pvt Ltd</p>
        </Link>
       </div>
  </div>

  <div className="hidden navbar-center lg:flex ">
    <ul className="px-1 menu menu-horizontal">
    <Link to={"/"}><li  className='hover:bg-[#1a1a1a7c]'><a className='text-[1rem] '>Home</a></li></Link>
      <li>
        <details>
          <summary className='text-[1rem] text-[#08A05E] hover:bg-[#1a1a1a7c]'>What We Do</summary>
          <ul className="p-2  w-[20rem] flex flex-col items-start bg-black justify-center ">
           <Link to={"/coming"}>
             <li ><a className='text-[1.2rem] text-[#08A05E]'>Food Development</a></li>
           </Link> 
           <Link to={"/coming"}>
             <li><a className='text-[1.2rem] text-[#08A05E]'>Food Manufacturing</a></li>
           </Link>
           <Link to={"/coming"}>
             <li><a className='text-[1.2rem] text-[#08A05E]'>Sea Food Development</a></li>
           </Link >
            <Link to={"/coming"}>
              <li><a className='text-[1.2rem] text-[#08A05E]'>Nutrition Intelligence</a></li>
            </Link>
       
          </ul>
        </details>
      </li>
      <Link to={"/Contact"}><li className='text-[1rem] hover:bg-[#1a1a1a7c]'><a>Contact Us</a></li></Link>
      <Link to={"/About"}><li className='text-[1rem] hover:bg-[#1a1a1a7c]'><a>About Us</a></li></Link>
    </ul>
  </div>
  {/* ICONS -HEADER */}
  <div className="navbar-end  flex gap-[0.4rem]">
    {/* <a className="btn border border-black p-[0.5rem] px-[0.5rem]">Button</a> */}
    {/* <button cla>Log in</button> */}
    <Link to={"https://www.facebook.com/envirfoods/"}  target='blank' className='rounded-full size-[2.2rem] group bg-[#FFFFFF] hover:bg-[#0866ff]  ease-in duration-300 flex items-center justify-center'><FaFacebook className='text-[1.4rem] group-hover:text-white text-[#0866ff]' /></Link>
    <Link to={"https://www.instagram.com/envirfoods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target='blank'  className='size-[2.2rem]  rounded-full group bg-[#FFFFFF] hover:bg-[#c435a7] ease-in duration-300 flex items-center justify-center'><PiInstagramLogoFill className='text-[1.4rem] text-[#c435a7] group-hover:text-white'/></Link>
    <Link className='size-[2.2rem] rounded-full bg-[#FFFFFF] group hover:bg-black ease-in duration-300 flex items-center justify-center'><FaXTwitter className='text-[1.4rem] text-black group-hover:text-white' /></Link>
  </div>
</div>
  )
}

export default Header