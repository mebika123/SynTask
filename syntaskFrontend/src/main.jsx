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
import Project from './routes/Project.jsx';
import ProfileSetting from './routes/ProfileSetting.jsx';
import AddTask from './routes/AddTask.jsx';
import AddProject from './routes/AddProject.jsx';
import TaskDetails from './routes/TaskDetails.jsx';
import Tasks from './routes/Tasks.jsx';

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
        path:"profileSetting",
        element:<ProfileSetting/>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
    </StrictMode>,
)
