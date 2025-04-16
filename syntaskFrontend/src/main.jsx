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
import Tasks from './routes/Tasks.jsx';
import Project from './routes/Project.jsx';
import ProfileSetting from './routes/ProfileSetting.jsx';

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
        path:"task",
        element:<Tasks/>
      },
      {
        path:"project",
        element:<Project/>
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
