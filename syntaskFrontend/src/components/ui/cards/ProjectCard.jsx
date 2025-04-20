import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProjectCard = ({ data, type }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const deleteData = (id) => {
        const url = type === 'task'
            ? `http://localhost:8000/api/task/delete/${id}`
            : `http://localhost:8000/api/project/delete/${id}`;

        axios.delete(url, { withCredentials: true })
            .then((res) => {
                setIsDeleted(true);
            })
            .catch((err) => {
                alert('Failed to delete. Check console for details.');
            });
    };

    if (isDeleted) return null;


    return (
        <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-md p-3">

            <div className="flex justify-between items-center mb-3 relative">
                <div>
                    <span className={`inline-flex items-center rounded-xl  px-2 mr-2 py-1 text-xs font-medium  ring-inset ring-1
                        ${data.status == 'pending' ? ' ring-red-600/10 text-red-600 bg-red-200 ' :
                            data.status == 'active' ? ' ring-blue-600/10 text-blue-600 bg-blue-200' :
                                ' ring-green-600/10 text-green-600 bg-green-200'
                        }`}>
                        {data.status}</span>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <FontAwesomeIcon icon={faEllipsis} onClick={() => setDropdownOpen(!dropdownOpen)} className='cursor-pointer' />
                {dropdownOpen &&
                    <div className="absolute right-0 top-full bg-white border border-1 z-1 py-2 px-3 w-20">
                        <ul>
                            <li className='mb-1 text-xs'>
                                <Link to={type == 'task' ? '/dashboard/editTask/' + data.id : '/dashboard/editProject/' + data.id}>Edit</Link>
                            </li>
                            <li className='text-xs'>
                                <p onClick={() => deleteData(data.id)}>Delete</p>
                            </li>
                        </ul>
                    </div>
                }
            </div>
            <Link to={type == 'task' ? '/dashboard/taskDetails/' + data.id : '/dashboard/projectDetails/' + data.id}>
                <h5>{data.title}</h5>
                <p className="text-[#6B7280] mb-3">{data.description}</p>
            </Link>
            {
                type == 'project' &&
                <>
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-xs text-[#9CA3AF]">Progress</p>
                        <p className="text-xs">75%</p>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-2 rounded-sm mb-3">
                        <div className="w-3/4 bg-[#4F46E5] h-2 rounded-sm"></div>
                    </div>
                </>

            }


            {
                type == 'task' &&
                <div className="flex justify-between items-center mb-3">
                    <div className='border border-white'>
                        <img src="/bg-img.png" alt="" className='h-5 min-w-5 w-5 rounded-full' />
                    </div>
                    <div className="flex gap-1 items-center text-[#6B7280]">
                        <FontAwesomeIcon icon={faClock} />
                        <p className="text-sm">Due Date</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectCard