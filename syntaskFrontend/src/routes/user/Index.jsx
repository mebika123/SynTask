import React, { useEffect, useState } from 'react'
import ActiveProjectCard from '../../components/ui/cards/ActiveProjectCard'
import CountCard from '../../components/ui/cards/CountCard'
import axios from '../../axios'

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [dashboardDatas, setDashboardDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/userDashboard')
      .then(res => {
        setDashboardDatas(res.data.data);
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
      <div className="flex justify-between items-center flex-wrap gap-3 ">
        <div className="">
          <h5 className="font-bold text-2xl">Home</h5>
          <p className="text-xs text-[#9CA3AF]">Welcome back,User</p>
        </div>
      </div>

      <div className="flex items-center gap-4 my-4 flex-wrap">

        <div className="flex-grow">
          <CountCard title="Total Tasks" count={dashboardDatas.totalTasks} />
        </div>
        <div className="flex-grow">
          <CountCard title="Pending Tasks" count={dashboardDatas.pendingTasks} />
        </div>
        <div className="flex-grow">
          <CountCard title="Active Tasks" count={dashboardDatas.activeTasks} />
        </div>
        <div className="flex-grow">
          <CountCard title="Completed Tasks" count={dashboardDatas.completedTasks} />
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

export default Index