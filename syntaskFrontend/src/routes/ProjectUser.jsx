import React from 'react'

const ProjectUser = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex-wrap gap-3 w-full md:w-3/5">

                <div className="mb-6">
                    <h5 className="font-bold text-2xl">Add New Task</h5>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='font-bold mb-4'>New Task for Web redesign </h5>
                    <form action="">
                        <div className=" grid grid-cols-2 text-sm gap-3">
                            <div className=''>
                                <label htmlFor="user" className='text-[#374151]'> user</label>
                                <select className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' >
                                    <option value="">user 1</option>
                                    <option value="">user 1</option>
                                    <option value="">user 1</option>
                                    <option value="">user 1</option>
                                </select>
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="user" className='text-[#374151]'> Project</label>
                                <select className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' >
                                    <option value="">Project 1</option>
                                    <option value="">Project 1</option>
                                    <option value="">Project 1</option>
                                    <option value="">Project 1</option>
                                </select>
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="user" className='text-[#374151]'> task</label>
                                <select className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' >
                                    <option value="">task 1</option>
                                    <option value="">task 1</option>
                                    <option value="">task 1</option>
                                    <option value="">task 1</option>
                                </select>
                            </div>
                            <div className='col-span-2'>
                                <input type="submit" value="Add" className='w-1/4 rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ProjectUser