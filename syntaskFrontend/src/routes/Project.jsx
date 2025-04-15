import React from 'react'
import { Link } from 'react-router-dom'

import ProjectCard from '../components/ui/cards/ProjectCard'
import Button from '../components/ui/Button'

const Project = () => {
    return (
        <div>
            <div className="">
                <h5 className="font-bold text-2xl">Project</h5>
            </div>
            <div className="flex justify-between items-center">
                    <form action="">
                        <div className="flex justify-between items-center gap-4 mt-4">
                            <input type="text" className='w-full md:w-3/6 rounded-lg border border-[#D1D5DB] p-2 mt-1' name='search' />
                            <div>
                                <select name='status' className='w-1/3 max-md:w-1/6 md:w-1/6 rounded-lg border border-[#D1D5DB] p-2 mt-1'>
                                    <option value="">All Status</option>
                                    <option value="">Default</option>
                                    <option value="">Default</option>
                                </select>
                                <select name='date' className='w-1/3 max-md:w-1/6 md:w-1/6 rounded-lg border border-[#D1D5DB] p-2 mt-1'>
                                    <option value="">Newest First</option>
                                    <option value="">Default</option>
                                    <option value="">Default</option>
                                </select>
                    <Link to='' className='rounded-lg border border-[#E5E7EB] py-2 px-5'>+ New Task</Link>
                            </div>
                        </div>
                    </form>
            </div>
            <div className="mt-10 mb-4 gap-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">

                <div className="flex justify-between items-center mb-3">
                    <h5 className='font-bold'>Team Member</h5>
                    <Button />
                </div>
                <table className="table-fixed">
                    <thead>
                        <tr className='bg-[#E5E7EB] text-sm text-[#6B7280]'>
                            <th>Member</th>
                            <th>Role</th>
                            <th>Project</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>


        </div>
    )
}

export default Project