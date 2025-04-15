import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/cards/Card'
import ActiveProjectCard from '../components/ui/cards/ActiveProjectCard'

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="">
          <h5 className="font-bold text-2xl">Dasboard</h5>
          <p className="text-xs text-[#9CA3AF]">Welcome back,User</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to='' className='rounded-lg border border-[#E5E7EB] py-2 px-5'>+ New Task</Link>
          <Button />
        </div>
      </div>
      <form action="">
        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <input type="text" className='w-full md:w-3/6 rounded-lg border border-[#D1D5DB] p-2 mt-1' name='search' />
          <select name='priority' className='rounded-lg border border-[#D1D5DB] p-2 mt-1 md:w-44'>
            <option value="">Default</option>
            <option value="">Default</option>
            <option value="">Default</option>
          </select>
          <select name='status' className='rounded-lg border border-[#D1D5DB] p-2 mt-1 md:w-44'>
            <option value="">Default</option>
            <option value="">Default</option>
            <option value="">Default</option>
          </select>
          <select name='date' className='rounded-lg border border-[#D1D5DB] p-2 mt-1 md:w-44'>
            <option value="">Default</option>
            <option value="">Default</option>
            <option value="">Default</option>
          </select>
        </div>
      </form>
      <h5 className="font-bold text-lg mt-7 mb-4">Recent Tasks</h5>
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <div className="flex-grow">
          <Card />
        </div>
        <div className="flex-grow">
          <Card />
        </div>
      </div>
      <h5 className="font-bold text-lg mt-7 mb-4">Active Project</h5>
      <div className="grid gap-3 mb-4 md:grid-cols-2 lg:grid-cols-3">
        <ActiveProjectCard />
        <ActiveProjectCard />
        <ActiveProjectCard />
      </div>

    </div>
  )
}

export default Home