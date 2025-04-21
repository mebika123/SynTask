import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AppHeader from '../components/layout/AppHeader'
import AppSidebar from '../components/layout/AppSideBar'

const AppLayout = () => {
      const [navOpen, setNavOpen] = useState(false);
        const navigate = useNavigate();
    
      const { user, loading } = useAuth();
    
      if (loading) return <p>Loading...</p>;
    
      if (!user) navigate("/login")
    return (
      <div className='flex'>
        <AppSidebar navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className="md:w-4/5 w-full bg-[#f8f9fb] md:ms-auto">
          <AppHeader navOpen={navOpen} setNavOpen={setNavOpen} />
          <div className='py-3 px-7'>
            <Outlet />
          </div>
        </div>
      </div>
    )
}

export default AppLayout