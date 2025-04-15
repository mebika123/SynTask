import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const Card = () => {
    return (
        <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border-l-4 border-l-[#EF4444] rounded-md p-3 bg-white">
            <div className="flex justify-between items-center mb-3">
                <h5>Update API Documentation</h5>
                <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">Urgent</span>
            </div>
            <div className="w-full bg-[#E5E7EB] h-2 rounded-sm mb-3">
                <div className="absoluet top-0 bottom-0 left-0 w-3/4 bg-[#EF4444] h-2 rounded-sm"></div>
            </div>
            <div className="flex justify-between items-center mb-3">
                <div className="flex gap-1 items-center text-[#6B7280]">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="text-sm">Due Date</p>
                </div>
                <div>
                    <img src="/bg-img.png" alt="" className='h-5 min-w-5 w-5 rounded-full' />
                </div>
            </div>

        </div>
    )
}

export default Card