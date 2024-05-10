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
// -----------------------------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Notrfound></Notrfound>,
    children: [
       {
        path: "/",
        element: <Home></Home>
       },
       {
        path: "/addjob",
        element: <Addjob></Addjob>
       },
       {
        path: "/login",
        element: <Login></Login>
       },
       {
        path: "/register",
        element: <Register></Register>
       }
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
