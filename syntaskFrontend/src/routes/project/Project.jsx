import React from 'react'
import { Link } from 'react-router-dom'

import ProjectCard from '../../components/ui/cards/ProjectCard'
import Button from '../../components/ui/Button'

const Project = () => {
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
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">

                <div className="flex justify-between items-center mb-5">
                    <h5 className='font-bold'>Team Member</h5>
                    <Button />
                </div>
                <table className="table-fixed w-full">
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
                        <tr className='text-center'>
                            <td className="py-2">
                                <div>
                                    <Link to="" className="flex items-center gap-4 px-5 py-4 border-t border-b-[#E5E7EB]">
                                        <div>
                                            <img src="/bg-img.png" alt="" className='h-10 min-w-10 w-10 rounded-full' />
                                        </div>
                                        <div>
                                            <span className='font-semibold'>user</span>
                                            <p>user@gmail.com</p>
                                        </div>
                                    </Link>
                                </div>
                            </td>
                            <td className="py-2">
                                <span class="inline-flex items-center rounded-xl bg-[#faf2f2] px-2 mr-2 py-1 text-xs font-medium text-[#EF4444] ring-1 ring-red-600/10 ring-inset">Admin</span>

                            </td>
                            <td className="py-2">8 project</td>
                            <td className="py-2">
                                <span class="inline-flex items-center rounded-xl bg-[#faf2f2] px-2 mr-2 py-1 text-xs font-medium text-[#EF4444] ring-1 ring-red-600/10 ring-inset">Active</span>
                            </td>
                            <td className="py-2">
                                <Link className="text-[#4F46E5] mr-3">Edit</Link>
                                <Link className="text-[#DC2626]">Remove</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Project