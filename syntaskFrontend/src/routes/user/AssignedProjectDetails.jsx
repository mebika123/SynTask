import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock, faFlag, faPenToSquare, faFilePdf, faDownload, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/Button'
import { Link, useParams } from 'react-router-dom'
import axios from '../../axios'
import ProgressBar from '../../components/ui/ProgressBar'

const AssignedProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [tasks, setTasks] = useState([]);

    useEffect(() => {


        // Fetch project details
        axios.get(`/project/${id}`)
            .then(res => {
                console.log(res)
                setProject(res.data.project);
            })
            .catch(err => console.error(err));
    }, [id]);

    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get(`/project_task/${id}`)
            .then(res => {
                console.log(res)
                setTasks(res.data.tasks);
            })
            .catch(err => console.error(err));
    }, []);

    const handleStatus = async (task_id, status) => {
        setError(null);
        const formData = {
            task_id,
            status
        };

        try {
            const res = await axios.put('/updateStatus', formData)
            if (res.data.status) {
                setTasks(prevTasks =>
                    prevTasks.map(task =>
                        task.id === task_id ? { ...task, status } : task
                    )
                );
            }
        }
        catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }


    }

    return (
        <div>

            <div className="flex gap-3 items-center font-bold text-2xl mb-4">
                <FontAwesomeIcon icon={faArrowLeft} />
                <h5>Project Details</h5>
            </div>

            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                <div className="flex justify-between items-center mb-3">
                    <h5>{project.title}</h5>
                    <span className={`inline-flex items-center rounded-xl  px-2 mr-2 py-1 text-xs font-medium  ring-inset ring-1
                        ${project.status == 'pending' ? ' ring-red-600/10 text-red-600 bg-red-200 ' :
                            project.status == 'completed' ? ' ring-blue-600/10 text-blue-600 bg-blue-200' :
                                ' ring-green-600/10 text-green-600 bg-green-200'
                        }`}>
                        {project.status}</span>
                </div>

                <ProgressBar total={project.tasks_count} completed={project.completed_tasks_count} />


            </div>

            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w- mb-3">
                <div className="flex justify-between items-center mb-3">
                    <h5>Description</h5>
                    <div className="text-[#4F46E5] flex items-center gap-2">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span>Edit</span>
                    </div>
                </div>
                <div className="mb-3 text-[#4B5563]">
                    <p>{project.description}</p>

                </div>

            </div>

            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">

                <div className="flex justify-between items-center mb-5">
                    <h5 className='font-bold'>Assigned Task </h5>
                    <Button />
                </div>
                <div className="overflow-x-auto  w-full">
                    <table className="whitespace-nowrap w-full">
                        <thead>
                            <tr className='bg-[#E5E7EB] text-sm text-[#6B7280]'>
                                <th className='py-2'>Title</th>
                                <th className='py-2'>category</th>
                                <th className='py-2'>Due Date</th>
                                <th className='py-2'>Status</th>
                                <th className='py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index) => (
                                    <tr key={index} className='text-center'>
                                        <td className="py-2">
                                            <span className='font-semibold'>{task.title}</span>
                                        </td>
                                        <td className="py-2">
                                            <span className='font-semibold'>{task.category.title}</span>

                                        </td>
                                        <td className="py-2">
                                            <span className='font-semibold'>{task.due_date}</span>
                                        </td>
                                        <td className="py-2">
                                            <span className={`inline-flex items-center rounded-xl  px-2 mr-2 py-1 text-xs font-medium  ring-inset ring-1
                        ${project.status == 'pending' ? ' ring-red-600/10 text-red-600 bg-red-200 ' :
                                                    project.status == 'active' ? ' ring-blue-600/10 text-blue-600 bg-blue-200' :
                                                        ' ring-green-600/10 text-green-600 bg-green-200'
                                                }`}>
                                                {project.status}</span>
                                        </td>
                                        <td className="py-2">
                                            <Link to={'/user/taskDetails/' + task.id} className="text-[#46e590] mr-3">View</Link>

                                            {
                                                task.status === 'pending' ? (
                                                    <button type="button" className="text-red-700 mr-3" onClick={() => handleStatus(task.id, 'active')}>Start</button>
                                                ) : task.status === 'active' ? (
                                                    <button type="button" className="text-[#4F46E5] mr-3" onClick={() => handleStatus(task.id, 'completed')}>Complete</button>
                                                ) : null
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div >
    )
}

export default AssignedProjectDetails