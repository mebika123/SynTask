import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faGear, faHouse, faLayerGroup, faListCheck, faTags, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Sidebar({navOpen,setNavOpen}) {
    return (
        <aside className={`md:w-1/5 max-sm:w-3/5 max-md:w-2/5  fixed max-md:top-0 shadow-[0_10px_15px_0_rgba(0,0,0,0.1),0_4px_6px_0_rgba(0,0,0,0.1)] h-screen flex justify-between flex-col bg-white transition-all duration-300 ease-in-out  ${navOpen ? 'left-0':'max-md:-left-full'}`}>
            <div>
                <div className='flex justify-between items-center px-5 py-4 border-b border-b-[#E5E7EB]'>
                <Link to="" className="flex items-center gap-4 text-[#4F46E5] ">
                    <FontAwesomeIcon icon={faLayerGroup} />
                    <h4 className="text-lg font-bold">SynTask</h4>
                </Link>
                    <FontAwesomeIcon icon={faXmark} className='text-[#4F46E5] md:hidden' onClick={()=>setNavOpen(!navOpen)}/>

                </div>
                <ul className='px-5 mt-5'>
                    <li>
                        <Link className="flex gap-2 items-center mb-2 hover:bg-[#E5E7EB] transition duration-300 ease-in-out hover:text-[#4F46E5] p-2 rounded-md" to=""><FontAwesomeIcon icon={faHouse} />
                            <span>Dashboard</span></Link>

                    </li>
                    <li>
                        <Link className="flex gap-2 items-center mb-2 hover:bg-[#E5E7EB] transition duration-300 ease-in-out hover:text-[#4F46E5] p-2 rounded-md" to="tasks"><FontAwesomeIcon icon={faListCheck} />
                            <span>Task</span></Link>

                    </li>
                    <li>
                        <Link className="flex gap-2 items-center mb-2 hover:bg-[#E5E7EB] transition duration-300 ease-in-out hover:text-[#4F46E5] p-2 rounded-md" to="project"><FontAwesomeIcon icon={faFolder} />
                            <span>Project</span></Link>

                    </li>
                    <li>
                        <Link className="flex gap-2 items-center mb-2 hover:bg-[#E5E7EB] transition duration-300 ease-in-out hover:text-[#4F46E5] p-2 rounded-md" to=""><FontAwesomeIcon icon={faTags} />
                            <span>Tag</span></Link>

                    </li>
                </ul>
                <div className="px-5">
                    <p className="mb-2 text-xs text-[#9CA3AF]">Setting</p>
                    <ul className=''>
                        <li>
                            <Link className="flex gap-2 items-center mb-2 hover:bg-[#E5E7EB] transition duration-300 ease-in-out hover:text-[#4F46E5] p-2 rounded-md" to="profileSetting"><FontAwesomeIcon icon={faGear} />
                                <span>Setting</span></Link>

                        </li>
                        <li>
                            <Link className="flex gap-2 items-center mb-2 hover:bg-[#E5E7EB] transition duration-300 ease-in-out hover:text-[#4F46E5] p-2 rounded-md" to=""><FontAwesomeIcon icon={faUser} />
                                <span>Profile</span></Link>

                        </li>
                    </ul>

                </div>
            </div>
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
        </aside>
    )
}

export default Sidebar