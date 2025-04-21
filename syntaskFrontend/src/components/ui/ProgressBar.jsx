import React from 'react'

const ProgressBar = ({total,completed}) => {
  return (
    <>
    <div className="flex justify-between items-center mb-1">
        <p className="text-xs text-[#9CA3AF]">Progress</p>
        <p className="text-xs">{completed/total*100}%</p>
    </div>
    <div className="w-full bg-[#E5E7EB] h-2 rounded-sm mb-3">
        <div className='bg-[#4F46E5] h-2 rounded-sm'   style={{ width: `${(completed / total) * 100}%` }}></div>
    </div>
</>
  )
}

export default ProgressBar