import React, { useEffect } from 'react'
import {ReactDOM} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ContactPage from './ContactPage'
import Kambucha from './Kambucha'
import AboutUsPage from './AboutUsPage'
import ComingSoon from './ComingSoon'
import Safron from './productImage/Safron'
import Wine from './productImage/Wine'
import Colors from './productImage/Colors'
import Perfume from './productImage/Perfume'
import Flavour from './productImage/Flavour'
import Microgreen from './productImage/Microgreen'
import Order from './Component/Order'
const App = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
      <div className='flex flex-col items-center justify-between overflow-x-hidden'>
       <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/Kambucha' element={<Kambucha/>}/>
        <Route path='/About' element={<AboutUsPage/>}/>
        <Route path='/coming' element={<ComingSoon/>}/>
        <Route path='/safron' element={<Safron/>}/>
        <Route path='/wine' element={<Wine/>}/>
        <Route path='/color' element={<Colors/>}/>
        <Route path='/perfume' element={<Perfume/>}/>
        <Route path='/flavour' element={<Flavour/>}/>
        <Route path='/microgreen' element={<Microgreen/>}/>
        <Route path='/shop' element={<Order/>}/>
        </Routes>
        <Footer/>
        </div>
  )
}

export default App
