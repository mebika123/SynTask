import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock, faFlag, faPenToSquare, faFilePdf, faDownload, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/Button'
import { useParams } from 'react-router-dom'
import axios from '../../axios'

const ATaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});

    useEffect(() => {

        // Fetch project details
        axios.get(`/task/${id}`)
            .then(res => {
                console.log(res)
                const { title, description, category, due_date, project, user, status} = res.data.task;
                setTask({
                    title, 
                    description, 
                    category, 
                    due_date, 
                    project, 
                    user, 
                    status
                });
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div>

            <div className="flex gap-3 items-center font-bold text-2xl mb-4">
                <FontAwesomeIcon icon={faArrowLeft} />
                <h5>Task Details</h5>
            </div>

            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                <div className="flex justify-between items-center mb-3">
                    <h5>{task.title}</h5>
                    <span class="inline-flex items-center rounded-md bg-[#E5E7EB] px-2 py-1 text-xs font-medium text-[#4F46E5] ring-1 ring-red-600/10 ring-inset">In Progress</span>
                </div>
                <div className="flex justify-between items-center mb-3 flex-wrap gap-3">
                    <div className="flex gap-3 items-center text-[rgb(107,114,128)]">
                        <FontAwesomeIcon icon={faClock} />
                        <div>
                            <p className="text-sm">Deadline</p>
                            <h5 className='text-black font-semibold'>{task.due_date}</h5>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center text-[#6B7280]">
                        <FontAwesomeIcon icon={faFlag} className='rounded-full text-[#EF4444]' />
                        <div>
                            <p className="text-sm">Priority</p>
                            <h5 className='text-black font-semibold'>High Priority</h5>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center text-[#6B7280]">
                        <div className='border border-white'>
                            <img src="/bg-img.png" alt="" className='h-5 min-w-5 w-5 rounded-full' />
                        </div>
                        <div>
                            <p className="text-sm">Assigned to</p>
                            <h5 className='text-black font-semibold'>{task.user?.first_name+' '+task.user?.last_name}</h5>
                        </div>
                    </div>
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
                    <p>{task.description}</p>
                </div>

            </div>

            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">
                <div className="flex justify-between items-center mb-3">
                    <h5 className='font-bold'>Attachment</h5>
                    <Button />
                </div>
                <div className="flex justify-center items-center mb-3 gap-6 flex-wrap">
                    <div className="flex gap-3 justify-between items-center border border-[#E5E7EB] p-2 rounded-md">
                        <FontAwesomeIcon icon={faFilePdf} className='w-7 bg-[#E5E7EB] py-2 text-[#4F46E5]' />
                        <div>
                            <h5 className='text-black font-semibold'>Homepage_Design_V2.pdf</h5>
                            <p className="text-sm text-[#6B7280]">2.8 MB</p>
                        </div>
                        <FontAwesomeIcon icon={faDownload} className='text-[#6B7280]' />
                    </div>
                    <div className="flex gap-3 justify-between items-center border border-[#E5E7EB] p-2 rounded-md">
                        <FontAwesomeIcon icon={faFilePdf} className='w-7 bg-[#E5E7EB] py-2 text-[#4F46E5]' />
                        <div>
                            <h5 className='text-black font-semibold'>Homepage_Design_V2.pdf</h5>
                            <p className="text-sm text-[#6B7280]">2.8 MB</p>
                        </div>
                        <FontAwesomeIcon icon={faDownload} className='text-[#6B7280]' />
                    </div>
                </div>
            </div>

            <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-2 w-full mb-4">
                <div className="flex justify-between items-center mb-3">
                    <h5 className='font-bold'>Comment</h5>
                </div>

                <div className="flex mb-4 gap-6">
                    <div>
                        <img src="/bg-img.png" alt="" className='h-10 min-w-10 w-10 rounded-full' />
                    </div>
                    <form action="" className='w-full'>
                        <textarea rows="6" name='comment' className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1'></textarea>
                        <input type="submit" value="Comment" className='w-20 rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
                    </form>
                </div>
                <div className="flex mb-4 gap-6 ">
                    <div>
                        <img src="/bg-img.png" alt="" className='h-10 min-w-10 w-10 rounded-full' />
                    </div>
                    <div className="bg-[#E5E7EB] rounded-sm text-[#6B7280] w-full p-2">
                        <div className="flex justify-between mb-2">
                            <div>
                                <h5 className='font-semibold text-black'>Sarah Johnson</h5>
                                <p className='text-sm'>2 hours ago</p>
                            </div>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                        <p>I've started working on the header section. Will update the progress soon.</p>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default ATaskDetails