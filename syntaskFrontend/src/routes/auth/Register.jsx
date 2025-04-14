import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-screen flex'>
      <div className="w-1/2 bg-gradient flex items-center">
        <div className="text-white ms-12 text-lg ">
          <h4 className="font-bold text-4xl mb-3">SynTask</h4>
          <p>Smart Task and Project Management Platform</p>
          <ul className='list-disc mt-5 list-inside'>
            <li>Advanced API Infrastructure</li>
            <li>User-friendly Interface</li>
            <li>Powerful Integrations</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#E5E7EB] px-28">
        <div className="w-full">
          <h4 className="font-bold mb-2 text-3xl text-center text-[#111827]">Create your account</h4>
          <p className="mb-6 text-center text-[#4B5563]">Start managing your tasks efficiently</p>
          <form action="">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <label htmlFor="firstName" className='text-[#374151]'>First Name</label>
                <input type="text" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
              </div>
              <div>
                <label htmlFor="lastName" className='text-[#374151]'>Last Name</label>
                <input type="text" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
              </div>
              <div className='col-span-2'>
                <label htmlFor="email" className='text-[#374151]'>Email</label>
                <input type="email" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
              </div>
              <div className='col-span-2'>
                <label htmlFor="password" className='text-[#374151]'>Password</label>
                <input type="password" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
              </div>
              <div className='col-span-2'>
                <label htmlFor="confirmPassword" className='text-[#374151]'>Confirm Password</label>
                <input type="password" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
              </div>
              <div className='col-span-2'>
                <input type="submit" value="Sign Up" className='w-full rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
              </div>
            </div>
          </form>
          <p className="text-[#4B5563] text-center mt-5">Already have an account? <Link to='/login' className='text-[#4F46E5]'>Log in</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Register