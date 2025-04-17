import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock, faFlag, faPenToSquare, faFilePdf, faDownload, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const AssignedProjectDetails = () => {
  return (
    <div>

    <div className="flex gap-3 items-center font-bold text-2xl mb-4">
        <FontAwesomeIcon icon={faArrowLeft} />
        <h5>Project Details</h5>
    </div>

    <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
        <div className="flex justify-between items-center mb-3">
            <h5>Website Redesign Project - Homepage Implementation</h5>
            <span class="inline-flex items-center rounded-md bg-[#E5E7EB] px-2 py-1 text-xs font-medium text-[#4F46E5] ring-1 ring-red-600/10 ring-inset">In Progress</span>
        </div>

        <div className="flex justify-between items-center mb-1">
            <p className="text-xs text-[#9CA3AF]">Progress</p>
            <p className="text-xs">75%</p>
        </div>
        <div className="w-full bg-[#E5E7EB] h-2 rounded-sm mb-3">
            <div className="absoluet top-0 bottom-0 left-0 w-3/4 bg-[#4F46E5] h-2 rounded-sm"></div>
        </div>

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
            <p>We need to implement the new homepage design according to the approved mockups. This includes:</p>
            <ul>
                <li>Header section with navigation</li>
                <li>Header section with navigation</li>
                <li>Header section with navigation</li>
                <li>Header section with navigation</li>
                <li>Header section with navigation</li>
            </ul>
        </div>

    </div>

    <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">

<div className="flex justify-between items-center mb-5">
    <h5 className='font-bold'>Assigned Task </h5>
    <Button />
</div>
<table className="table-fixed w-full">
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
            <Link className="text-[#46e590] mr-3">View</Link>
                <Link className="text-[#4F46E5] mr-3">Start</Link>
            </td>
        </tr>
    </tbody>
</table>
</div>

</div >
  )
}

export default AssignedProjectDetails