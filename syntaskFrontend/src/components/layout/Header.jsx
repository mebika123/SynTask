import React from 'react'
import Button from '../ui/Button'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Header = ({ navOpen, setNavOpen }) => {
  return (
    <div className='flex justify-between items-center md:justify-end p-3 border-b border-b-[#E5E7EB]'>
      <div className='flex items-center gap-4 md:hidden'>
        <FontAwesomeIcon icon={faBars} onClick={()=>setNavOpen(!navOpen)} />
        <Link to="" className=" text-[#4F46E5]">
          <h4 className="text-lg font-bold">SynTask</h4>
        </Link>
      </div>
      <Button />
    </div>
  )
}

export default Header