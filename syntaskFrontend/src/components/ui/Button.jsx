import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text,path}) => {
  return (
    <Link to={path} className='rounded-lg bg-[#4F46E5] text-white py-2 px-5'>{text}</Link>
  )
}

export default Button