import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Roots/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Notrfound from './Pages/NotFound/Notrfound.jsx';
import Login from './Pages/Authentication/Login.jsx';
import Register from './Pages/Authentication/Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import Addjob from './Pages/Addjob.jsx';
import Onsite from './Components/Onsite.jsx';
import Hybrid from './Components/Hybrid.jsx';
import Remote from './Components/Remote.jsx';
import Part from './Components/Part.jsx';
import Alljobs from './Components/Alljobs.jsx';
import Jobsall from './Pages/Jobsall.jsx';
import Myjobs from './Pages/Myjobs.jsx';
import Details from './Pages/Details.jsx';
import Applied from './Pages/Applied.jsx';
// -----------------------------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Notrfound></Notrfound>,
    children: [
       {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            index: true ,
            element: <Alljobs></Alljobs>,
          },
          {
            path: "onsite",
            element: <Onsite></Onsite>
          },
          {
            path: "remoteJobs",
            element: <Remote></Remote>
          },
          {
            path: "hybridJobs",
            element: <Hybrid></Hybrid>
          },
          {
            path: "partTimejobs",
            element: <Part></Part>
          },
          
        ]
       },
       {
        path: "/addjob",
        element: <Addjob></Addjob>
       },
       {
        path: "/alljobs",
        element: <Jobsall></Jobsall>,
       },
       {
        path: "/details",
        element: <Details></Details>
       },
       {
        path: "/applied",
        element: <Applied></Applied>
       },
       {
        path: "/myjobs",
        element: <Myjobs></Myjobs>,
       },
       {
        path: "/login",
        element: <Login></Login>
       },
       {
        path: "/register",
        element: <Register></Register>
       },
       
    ]
  },
]);







// ------------------------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
            <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
