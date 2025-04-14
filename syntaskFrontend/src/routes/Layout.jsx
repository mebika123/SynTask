import React, { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'


function Layout() {
  const [navOpen,setNavOpen]=useState(true);
  return (
    <div className='flex'>
      <Sidebar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="md:w-4/5 w-full">
        <Header navOpen={navOpen} setNavOpen={setNavOpen}/>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout