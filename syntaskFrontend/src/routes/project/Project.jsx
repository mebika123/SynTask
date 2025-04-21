import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../../components/ui/cards/ProjectCard'
import Button from '../../components/ui/Button'
import axios from '../../axios'

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/projects')
            .then(res => {
                setProjects(res.data);
            });
        axios.get('/usersList')
            .then(res => {
                setUsers(res.data);
            });
    }, []);

    const deleteUser = async(id)=>{
        try {
            const res = await axios.delete(`/user/delete/${id}`);
            if (res.data.status) {
                navigate('/dashboard/projects')
            }
        } catch (err) {
            console.error("Delete failed", err);
        }

    }

    return (
        <div>
            <div className="">
                <h5 className="font-bold text-2xl">Project</h5>
            </div>
            <form action="">
                <div className="flex justify-between items-center gap-4 mt-4 flex-wrap">
                    <input type="text" className='w-80 rounded-lg border border-[#D1D5DB] p-2 mt-1' name='search' />
                    <div className='flex items-center gap-2'>
                        <select name='status' className=' rounded-lg border border-[#D1D5DB] p-2 mt-1'>
                            <option value="">All Status</option>
                            <option value="">Default</option>
                            <option value="">Default</option>
                        </select>
                        <select name='date' className='rounded-lg border border-[#D1D5DB] p-2 mt-1'>
                            <option value="">Newest First</option>
                            <option value="">Default</option>
                            <option value="">Default</option>
                        </select>
                        <Link to='' className='rounded-lg border border-[#E5E7EB] py-2 px-5'>+ New Task</Link>
                    </div>
                </div>
            </form>
            <div className="mt-10 mb-4 gap-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
                {
                    projects?.map((project, index) => (
                        <ProjectCard data={project} key={index} type='project' />
                    ))
                }
            </div>
            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">

                <div className="flex justify-between items-center mb-5">
                    <h5 className='font-bold'>Team Member</h5>
                    <Button text='New Member' path ='/dashboard/addUser' />
                </div>
                <div className="overflow-x-auto  w-full">
                <table className="whitespace-nowrap w-full">
                    <thead>
                        <tr className='bg-[#E5E7EB] text-sm text-[#6B7280]'>
                            <th className='py-2'>Member</th>
                            <th className='py-2'>Role</th>
                            <th className='py-2'>Project</th>
                            <th className='py-2'>Status</th>
                            <th className='py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => (
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
                                        {projects.filter(project => project.user_id === user.id).length} projects
                                    </td>
                                    <td className="py-2">
                                        <span className="inline-flex items-center rounded-xl bg-[#faf2f2] px-2 mr-2 py-1 text-xs font-medium text-[#EF4444] ring-1 ring-red-600/10 ring-inset">
                                            {user.status || "Active"}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <Link className="text-[#4F46E5] mr-3" to={'/dashboard/editUser/'+user.id}>Edit</Link>
                                        <p className="text-[#DC2626]" onClick={()=>deleteUser(user.id)}>Remove</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
                </div>
            </div>


        </div>
    )
}

export default Project