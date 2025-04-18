import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import './index.css'
import Register from './routes/auth/Register.jsx';
import Login from './routes/auth/Login.jsx';
import Layout from './routes/Layout.jsx';
import Project from './routes/project/Project.jsx';
import ProfileSetting from './routes/ProfileSetting.jsx';
import AddTask from './routes/task/AddTask.jsx';
import AddProject from './routes/project/AddProject.jsx';
import TaskDetails from './routes/task/TaskDetails.jsx';
import ProjectDetails from './routes/project/ProjectDetails.jsx';
import Tasks from './routes/task/Tasks.jsx';

import Index from './routes/user/index.jsx';
import AssignedProjectDetails from './routes/user/AssignedProjectDetails.jsx';
import ProjectAssigned from './routes/user/ProjectAssigned.jsx';
import TaskAssigned from './routes/user/TaskAssigned.jsx';
import AssignedTaskDetails from './routes/user/AssignedTaskDetails.jsx';
import ProjectUser from './routes/ProjectUser.jsx';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/dashboard",
    element: <Layout/>,
    children : [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"tasks",
        element:<Tasks/>
      },
      {
        path:"taskDetails",
        element:<TaskDetails/>
      },
      {
        path:"projectDetails",
        element:<ProjectDetails/>
      },
      {
        path:"project",
        element:<Project/>
      },
      {
        path:"addProject",
        element:<AddProject/>
      },
      {
        path:"addTask",
        element:<AddTask/>
      },
      {
        path:"projectUser",
        element:<ProjectUser/>
      },
      {
        path:"profileSetting",
        element:<ProfileSetting/>
      },
      {
        path:"category",
        element:<ProfileSetting/>
      },
      {
        path:"createCategory",
        element:<ProfileSetting/>
      }
    ]
  },
  {
    path: "/user",
    element: <Layout/>,
    children : [
      {
        path:"",
        element:<Index/>
      },
      {
        path:"project",
        element:<ProjectAssigned/>
      },
      {
        path:"projectDetails",
        element:<AssignedProjectDetails/>
      },
      {
        path:"tasks",
        element:<TaskAssigned/>
      },
      {
        path:"taskDetails",
        element:<AssignedTaskDetails/>
      },
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
    </StrictMode>,
)
