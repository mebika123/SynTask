import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const ActiveProjectCard = () => {
    return (
        <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 ">
            <div className="flex justify-between items-center mb-3">
                <h5>Mobile App Redesign</h5>
                <span class="inline-flex items-center rounded-md bg-[#E5E7EB] px-2 py-1 text-xs font-medium text-[#4F46E5] ring-1 ring-red-600/10 ring-inset">In Progress</span>
            </div>
            <p className="text-[#6B7280] mb-3">Redesigning the mobile app interface forbetter user experience</p>
            <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-[#9CA3AF]">Progress</p>
                <p className="text-xs">75%</p>
            </div>
            <div className="w-full bg-[#E5E7EB] h-2 rounded-sm mb-3">
                <div className="absoluet top-0 bottom-0 left-0 w-3/4 bg-[#4F46E5] h-2 rounded-sm"></div>
            </div>
            <div className="flex justify-between items-center mb-3">
                <div className='border border-white'>
                    <img src="/bg-img.png" alt="" className='h-5 min-w-5 w-5 rounded-full' />
                </div>
                <div className="text-[#6B7280]">
                    <p className="text-sm">Due Mar 25, 2025</p>
                </div>
            </div>
        </div>
    )
}

export default ActiveProjectCard