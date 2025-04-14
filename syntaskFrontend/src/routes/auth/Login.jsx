import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen flex'>
      <div className="w-1/2 bg-[url('bg-img.png')] flex items-center text-center justify-center bg-cover bg-no-repeat">
        <div className="text-white text-lg ">
          <h4 className="font-bold text-4xl mb-3">Welcome to SynTask</h4>
          <p>Manage your tasks and projects efficiently</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#E5E7EB] px-28">
        <div className="w-full">
          <h4 className="font-bold mb-2 text-3xl text-center text-[#111827]">Sign in to SynTask</h4>
          <p className="mb-6 text-center text-[#4B5563]">Start managing your tasks efficiently</p>
          <form action="">
            <div className="text-sm grid grid-cols-1 gap-3 ">
              <div className=''>
                <label htmlFor="email" className='text-[#374151]'>Email Address</label>
                <input type="email" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
              </div>
              <div className=''>
                <label htmlFor="password" className='text-[#374151]'>Password</label>
                <input type="password" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <input type="checkbox" name="remember" id="" />
                  <label htmlFor="remember" className='text-[#374151] ms-2'>Remember me</label>
                </div>
                <Link to="" className='text-[#4F46E5]'>Forget your password?</Link>
              </div>
              <div className=''>
                <input type="submit" value="Sign In" className='w-full rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
              </div>
            </div>
          </form>
          <p className="text-[#4B5563] text-center mt-5">Don't have an account? <Link to='/register' className='text-[#4F46E5]'>Register Now</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login