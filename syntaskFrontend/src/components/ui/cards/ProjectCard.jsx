import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'
import ProgressBar from '../ProgressBar'

const ProjectCard = ({ data, type }) => {
    const { user } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const deleteData = (id) => {
        const url = type === 'task'
            ? `/task/delete/${id}`
            : `/project/delete/${id}`;

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
                {
                    user.role == 'admin' &&
                    <>
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
                    </>
                }
            </div>
            <Link to={`/${user.role === 'admin' ? 'dashboard' : 'user'}/${type === 'task' ? 'taskDetails' : 'projectDetails'}/${data.id}`}>
                <h5>{data.title}</h5>
                <p className="text-[#6B7280] mb-3">{data.description}</p>
            </Link>
            {
                type == 'project' &&
                <ProgressBar total = {data.tasks_count} completed = {data.completed_tasks_count}/>

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