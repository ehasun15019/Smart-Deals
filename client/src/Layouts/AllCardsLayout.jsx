import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const AllCardsLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className='w-10/12 mx-auto'>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default AllCardsLayout
