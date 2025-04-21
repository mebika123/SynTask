import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/cards/Card'
import ActiveProjectCard from '../components/ui/cards/ActiveProjectCard'
import axios from '../axios'

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/dashboard')
      .then(res => {
        setProjects(res.data.projects);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="">
          <h5 className="font-bold text-2xl">Dasboard</h5>
          <p className="text-xs text-[#9CA3AF]">Welcome back,User</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to='/dashboard/addProject' className='rounded-lg border border-[#E5E7EB] py-2 px-5'>+ New Project</Link>
          <Button />
        </div>
      </div>

      <h5 className="font-bold text-lg mt-7 mb-4">Recent Tasks</h5>
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <div className="flex-grow">
          <Card />
        </div>
        <div className="flex-grow">
          <Card />
        </div>
      </div>
      <h5 className="font-bold text-lg mt-7 mb-4">Active Project</h5>
      <div className="grid gap-3 mb-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project,index)=>(
          <ActiveProjectCard project={project} key={index} />

        ))}
      </div>

    </div>
  )
}

export default Home