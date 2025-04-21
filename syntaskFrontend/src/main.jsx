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

import Index from './routes/user/Index.jsx';
import AssignedProjectDetails from './routes/user/AssignedProjectDetails.jsx';
import ProjectAssigned from './routes/user/ProjectAssigned.jsx';
  import AssignedTaskDetails from './routes/user/AssignedTaskDetails.jsx';
import EditProject from './routes/project/EditProject.jsx';
import AddUsers from './routes/users/addUsers.jsx';
import EditUsers from './routes/users/editUsers.jsx';
import Categories from './routes/category/Categories.jsx';
import AddCategory from './routes/category/AddCategory.jsx';
import EditCategory from './routes/category/EditCategory.jsx';
import EditTask from './routes/task/EditTask.jsx';
import AppLayout from './routes/AppLayout.jsx';
import { AuthProvider } from './context/AuthContext'


const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "tasks",
        element: <Tasks />
      },
      {
        path: "taskDetails/:id",
        element: <TaskDetails />
      },
      {
        path: "projectDetails/:id",
        element: <ProjectDetails />
      },
      {
        path: "projects",
        element: <Project />
      },
      {
        path: "addProject",
        element: <AddProject />
      },
      {
        path: "addTask",
        element: <AddTask />
      },
      {
        path: "editTask/:id",
        element: <EditTask />
      },

      {
        path: "editProject/:id",
        element: <EditProject />
      },
      {
        path: "profileSetting",
        element: <ProfileSetting />
      },
      {
        path: "category",
        element: <ProfileSetting />
      },
      {
        path: "createCategory",
        element: <ProfileSetting />
      },
      {
        path: "addUser",
        element: <AddUsers />
      },
      {
        path: "editUser/:id",
        element: <EditUsers />
      },
      {
        path: "addUser",
        element: <AddUsers />
      },
      {
        path: "editUser/:id",
        element: <EditUsers />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "addCategory",
        element: <AddCategory />
      },
      {
        path: "editCategory/:id",
        element: <EditCategory />
      }

    ]
  },
  {
    path: "/user",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Index />
      },
      {
        path: "projects",
        element: <ProjectAssigned />
      },
      {
        path: "projectDetails/:id",
        element: <AssignedProjectDetails />
      },
      {
        path: "taskDetails/:id",
        element: <AssignedTaskDetails />
      },
      {
        path: "profileSetting",
        element: <ProfileSetting />
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
