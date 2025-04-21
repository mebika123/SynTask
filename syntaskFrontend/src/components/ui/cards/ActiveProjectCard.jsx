import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const ActiveProjectCard = ({project}) => {
    return (
        <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 ">
            <div className="flex justify-between items-center mb-3">
                <h5>{project.title}</h5>
                <span className={`inline-flex items-center rounded-xl  px-2 mr-2 py-1 text-xs font-medium  ring-inset ring-1
                        ${project.status == 'pending' ? ' ring-red-600/10 text-red-600 bg-red-200 ' :
                            project.status == 'active' ? ' ring-blue-600/10 text-blue-600 bg-blue-200' :
                                ' ring-green-600/10 text-green-600 bg-green-200'
                        }`}>
                        {project.status}</span>
            </div>
            <p className="text-[#6B7280] mb-3">Redesigning the mobile app interface forbetter user experience</p>
            <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-[#9CA3AF]">Progress</p>
                <p className="text-xs">75%</p>
            </div>
            <div className="w-full bg-[#E5E7EB] h-2 rounded-sm mb-3">
                <div className="absoluet top-0 bottom-0 left-0 w-3/4 bg-[#4F46E5] h-2 rounded-sm"></div>
            </div>
        </div>
    )
}

export default ActiveProjectCard