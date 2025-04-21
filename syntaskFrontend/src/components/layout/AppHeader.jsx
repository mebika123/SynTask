import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'


const AppHeader = ({ navOpen, setNavOpen }) => {
   const {logout } = useAuth();
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     await logout();
     navigate('/login');
   };
  return (
    <div className='flex justify-between items-center md:justify-end p-3 border-b border-b-[#E5E7EB]'>
      <div className='flex items-center gap-4 md:hidden'>
        <FontAwesomeIcon icon={faBars} onClick={()=>setNavOpen(!navOpen)} />
        <Link to="" className=" text-[#4F46E5]">
          <h4 className="text-lg font-bold">SynTask</h4>
        </Link>
      </div>
      <form action="" method='POST' onSubmit={handleSubmit}>
      <button className='rounded-lg bg-[#4F46E5] text-white py-2 px-5'>Log Out</button>
      </form>
    </div>
  )
}

export default AppHeader