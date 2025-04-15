import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar,faEllipsis } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = () => {
    return (
        <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-md p-3">
            <div className="flex justify-between items-center mb-3">
                <div>
                    <span class="inline-flex items-center rounded-xl bg-[#faf2f2] px-2 mr-2 py-1 text-xs font-medium text-[#EF4444] ring-1 ring-red-600/10 ring-inset">Pending</span>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
            <h5>Website Redesign</h5>
            <p className="text-[#6B7280] mb-3">Complete overhaul of company website with new design system</p>
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
                <div className="flex gap-1 items-center text-[#6B7280]">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="text-sm">Due Date</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard