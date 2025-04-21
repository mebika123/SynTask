import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/Button'
import { Link, useParams } from 'react-router-dom'
import axios from '../../axios'
import ProgressBar from '../../components/ui/ProgressBar'

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [error, setError] = useState(null);


    useEffect(() => {

        // Fetch project details
        axios.get(`/project/${id}`)
            .then(res => {
                console.log(res)
                setProject(res.data.project);
            })
            .catch(err => console.error(err));
    }, [id]);

    const deleteProjectUser = async (projectId, userId) => {
        try {

            const res = await axios.delete(`/project/${projectId}/user/${userId}`);
            if (res.status === 200) {
                setProject(prevProject => ({
                    ...prevProject,
                    users: prevProject.users.filter(user => user.id !== userId)  // Filter out the deleted user
                }));
            }
            alert('User removed from project successfully');

        } catch (err) {
            console.error(err);
            alert('Failed to remove user from project');
        }
    };
    const handleStatus = async (project_id, status) => {
        setError(null);
        const formData = {
            project_id,
            status
        };

        try {
            const res = await axios.put('/project/updateStatus', formData)
            if (res.data.status) {
                setProject(prevProject => ({
                    ...prevProject,
                    status: status
                }));
            }
        }
        catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
            
        }

        console.log(error)

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
                    <div className="flex gap-2 items-center">
                        <span className={`inline-flex items-center rounded-xl  px-2 mr-2 py-1 text-xs font-medium  ring-inset ring-1
                        ${project.status == 'pending' ? ' ring-red-600/10 text-red-600 bg-red-200 ' :
                                project.status == 'active' ? ' ring-blue-600/10 text-blue-600 bg-blue-200' :
                                    ' ring-green-600/10 text-green-600 bg-green-200'
                            }`}>
                            {project.status}</span>
                        {
                            project.status === 'pending' ? (
                                <button type="button" className="text-red-700 mr-3 border px-3 rounded-md border-e-red-700" onClick={() => handleStatus(project.id, 'active')}>Start</button>
                            ) : project.status === 'active' ? (
                                <button type="button" className="text-[#4F46E5] mr-3 border px-3 rounded-md border-e-blue-700" onClick={() => handleStatus(project.id, 'completed')}>Complete</button>
                            ) : null
                        }

                    </div>
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
                    <h5 className='font-bold'>Assigned Team Member </h5>
                    <Button text='Assign Task' path ='/dashboard/addTask'/>
                </div>
                <div className="overflow-x-auto  w-full">
                    <table className="whitespace-nowrap w-full">
                        <thead>
                            <tr className='bg-[#E5E7EB] text-sm text-[#6B7280]'>
                                <th className='py-2'>Member</th>
                                <th className='py-2'>Role</th>
                                <th className='py-2'>Status</th>
                                <th className='py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                project?.users?.map((user, index) => (
                                    <tr key={index} className='text-center'>
                                        <td className="py-2">
                                            <Link to="" className="flex flex-1 items-center gap-4 ">
                                                <div>
                                                    <img src="/bg-img.png" alt="" className='h-10 min-w-10 w-10 rounded-full' />
                                                </div>
                                                <div className='text-start'>
                                                    <span className='font-semibold'>{user.first_name + ' ' + user.last_name}</span>
                                                    <p>{user.email}</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="py-2">
                                            <span className="inline-flex items-center rounded-xl bg-[#faf2f2] px-2 mr-2 py-1 text-xs font-medium text-[#EF4444] ring-1 ring-red-600/10 ring-inset">
                                                {user.role || "Admin"}
                                            </span>
                                        </td>
                                        <td className="py-2">
                                            <span className="inline-flex items-center rounded-xl bg-[#faf2f2] px-2 mr-2 py-1 text-xs font-medium text-[#EF4444] ring-1 ring-red-600/10 ring-inset">
                                                {user.status || "Active"}
                                            </span>
                                        </td>
                                        <td className="py-2">
                                            <p
                                                className="text-[#DC2626] cursor-pointer"
                                                onClick={() => deleteProjectUser(id, user.id)}>
                                                Remove
                                            </p>
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

export default ProjectDetails