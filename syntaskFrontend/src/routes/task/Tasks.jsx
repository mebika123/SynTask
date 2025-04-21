import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/ui/cards/ProjectCard'
import { Link } from 'react-router-dom'
import axios from '../../axios'

const Tasks = () => {
        const [projects, setProjects] = useState([]);
        const [tasks, setTasks] = useState([]);
        const [users, setUsers] = useState([]);
    
        useEffect(() => {
            axios.get('/tasks')
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
                <h5 className="font-bold text-2xl">Tasks</h5>
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
            {
                projects?.map((project,index)=>(

            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mt-5" key={index}>
                <div className="border-b border-b-[#E5E7EB] mb-4">
                    <h5 className='font-bold'>Project Name: {project.title}</h5>
                    <p className="text-md font-semibold">Tasks List</p>
                    <div className=" my-4 gap-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
                    {
                    project.tasks?.map((task, index) => (
                        <ProjectCard data={task} key={index} type='task' />
                    ))
                }
                    </div>
                </div>
            </div>
                ))

            }



        </div>
    )
}

export default Tasks