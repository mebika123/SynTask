import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const CountCard = () => {
    return (
        <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border-l-4 border-l-[#444def] rounded-md p-3 bg-white">
            <div className="flex justify-between items-center mb-3">
                <h5>Total Project Assigned</h5>
                <p className="text-4xl">22</p>
            </div>
        </div>
    )
}

export default CountCard