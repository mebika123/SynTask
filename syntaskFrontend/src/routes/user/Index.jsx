import React from 'react'
import ActiveProjectCard from '../../components/ui/cards/ActiveProjectCard'
import CountCard from '../../components/ui/cards/CountCard'

const Index = () => {
  return (
    <div>
    <div className="flex justify-between items-center flex-wrap gap-3 ">
      <div className="">
        <h5 className="font-bold text-2xl">Home</h5>
        <p className="text-xs text-[#9CA3AF]">Welcome back,User</p>
      </div>
    </div>

    <div className="flex items-center gap-4 my-4 flex-wrap">
      <div className="flex-grow">
        <CountCard />
      </div>
      <div className="flex-grow">
        <CountCard />
      </div>
      <div className="flex-grow">
        <CountCard />
      </div>
      <div className="flex-grow">
        <CountCard />
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

export default Index