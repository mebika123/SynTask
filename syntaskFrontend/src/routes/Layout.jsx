import React, { useEffect, useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import { useAuth } from '../context/AuthContext'


function Layout() {
  const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();

  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user || user.role != 'admin') navigate("/login")
  return (
    <div className='flex'>
      <Sidebar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="md:w-4/5 w-full md:ms-auto">
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className='py-3 px-7'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout