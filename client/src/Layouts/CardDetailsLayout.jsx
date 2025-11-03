import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const CardDetailsLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className='w-11/12 mx-auto py-6 bg-base-100'>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default CardDetailsLayout
