import React from 'react'
import ProjectCard from '../../components/ui/cards/ProjectCard'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const ProjectAssigned = () => {
  return (
    <div>
      <div className="">
        <h5 className="font-bold text-2xl">Project</h5>
      </div>


    <form action="">
      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <input type="text" className='w-full md:w-3/6 rounded-lg border border-[#D1D5DB] p-2 mt-1' name='search' />
        <select name='priority' className='rounded-lg border border-[#D1D5DB] p-2 mt-1 md:w-44'>
          <option value="">Default</option>
          <option value="">Default</option>
          <option value="">Default</option>
        </select>
        <select name='status' className='rounded-lg border border-[#D1D5DB] p-2 mt-1 md:w-44'>
          <option value="">Default</option>
          <option value="">Default</option>
          <option value="">Default</option>
        </select>
        <select name='date' className='rounded-lg border border-[#D1D5DB] p-2 mt-1 md:w-44'>
          <option value="">Default</option>
          <option value="">Default</option>
          <option value="">Default</option>
        </select>
      </div>
    </form>
    <h5 className="font-bold text-lg mt-7 mb-4">Assigned Project</h5>
    <div className="mt-10 mb-4 gap-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">

                <div className="flex justify-between items-center mb-5">
                    <h5 className='font-bold'>Team Member</h5>

                </div>
                <table className="table-fixed w-full">
                    <thead>
                        <tr className='bg-[#E5E7EB] text-sm text-[#6B7280]'>
                            <th className='py-2'>Member</th>
                            <th className='py-2'>Email</th>
                            <th className='py-2'>Project</th>
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
                                        </div>
                                    </Link>
                                </div>
                            </td>
                            <td className="py-2">
                            <p>user@gmail.com</p>
                            </td>
                            <td className="py-2">8 project</td>
                        </tr>
                    </tbody>
                </table>
            </div>

  </div>
  )
}

export default ProjectAssigned