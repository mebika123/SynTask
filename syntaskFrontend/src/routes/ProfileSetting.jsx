import React from 'react'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera} from '@fortawesome/free-solid-svg-icons'


const ProfileSetting = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex-wrap gap-3 w-full md:w-3/5">

                <div className="mb-6">
                    <h5 className="font-bold text-2xl">Profile Settings</h5>
                    <p className="text-xs text-[#9CA3AF]">Manage your account settings and preferences</p>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='mb-3 font-bold'>Profile Photo</h5>
                    <div className="flex items-center mb-3 flex-wrap gap-4 ">

                        <div className='relative'>
                            <img src="/bg-img.png" alt="" className='h-14 min-w-14 w-14 rounded-full' />
                            <div className="w-6 h-6 text-[white] rounded-full bg-[#4F46E5] absolute bottom-0 -right-0 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCamera} />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Link to='' className='rounded-lg border border-[#E5E7EB] py-2 px-5'>+ New Task</Link>
                            <Button />
                        </div>

                    </div>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='mb-3 font-bold'>Personal Information</h5>
                    <form action="">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <label htmlFor="firstName" className='text-[#374151]'>First Name</label>
                                <input type="text" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="lastName" className='text-[#374151]'>Last Name</label>
                                <input type="text" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="email" className='text-[#374151]'>Email</label>
                                <input type="email" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
                            </div>
                            <div className='col-span-2'>
                                <input type="submit" value="Save Changes" className='w-1/4 rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white border border-[#E5E7EB] rounded-sm p-3 w-full mb-4">
                    <h5 className='mb-3 font-bold'>Security Settings</h5>
                    <form action="">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className='col-span-2'>
                                <label htmlFor="password" className='text-[#374151]'>Current Password</label>
                                <input type="password" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor="newPassword" className='text-[#374151]'>New Password</label>
                                <input type="password" className='w-full rounded-lg border border-[#D1D5DB] p-2 mt-1' />
                            </div>
                            <div className='col-span-2 bg-[#f5f6f9] p-1 rounded-md'>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-xs text-[#9CA3AF]">Progress</p>
                                <p className="text-xs text-[#22C55E]">75%</p>
                            </div >
                            <div className="w-full bg-[#E5E7EB] h-2 rounded-sm mb-3">
                                <div className="absoluet top-0 bottom-0 left-0 w-3/4 bg-[#22C55E] h-2 rounded-sm"></div>
                            </div>

                            </div>
                            <div className='col-span-2'>
                                <input type="submit" value="Update Security Settings" className='w-full rounded-lg bg-[#4F46E5] text-white p-2 mt-1' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting