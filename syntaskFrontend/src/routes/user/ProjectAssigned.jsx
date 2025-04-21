import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/ui/cards/ProjectCard'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import axios from '../../axios'

const ProjectAssigned = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/projects')
      .then(res => {
        setProjects(res.data);
      });
  }, []);

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
        {
          projects.map((project,index)=>(
            <ProjectCard data={project} key={index} type='project'/>
          ))
        }

      </div>


    </div>
  )
}

export default ProjectAssigned