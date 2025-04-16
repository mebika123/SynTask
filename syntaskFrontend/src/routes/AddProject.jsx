import React from 'react'

const AddProject = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex-wrap gap-3 w-full md:w-3/5">

                <div className="mb-6">
                    <h5 className="font-bold text-2xl">Add New Project</h5>
                </div>

                    <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                        <h5 className='mb-3 font-bold'>New Project</h5>
                        <form action="">
                            <div className="text-sm">
                                <div className='mb-3'>
                                    <label htmlFor="title" className='text-[#374151]'>Project Title</label>
                                    <input type="text" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="description" className='text-[#374151]'>Description</label>
                                    <textarea name="description" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' id="" rows="10"></textarea>
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

export default AddProject