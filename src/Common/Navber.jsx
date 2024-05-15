import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import logo from "../assets/icons/logo.svg";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [theme , setTheme] = useState('light');
  useEffect(()=>{
    localStorage.setItem('theme',theme)
    
      
      const localTheme = localStorage.getItem('theme')
     
      
      document.querySelector('html').setAttribute('data-theme', localTheme)
      
  },[theme])
  // console.log(user);
  const handelTheme = (e) =>{
      if(e.target.checked){
        setTheme('retro')
      }else{
        setTheme('light')
      }
  }
  // console.log(theme);
  return (
    <div className="navbar  shadow-2xl mb-3 rounded-lg bg-gray-200 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50 "
          >
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <NavLink to="/alljobs">
              <a>ALL Job</a>
            </NavLink>
            <NavLink to="/appliedjobs">
              <a>Applied Jobs</a>
            </NavLink>
            <NavLink to="/addjob">
              <a>Add Job</a>
            </NavLink>
            <NavLink to="/myjobs">
              <a>My Jobs</a>
            </NavLink>
            <NavLink to="/blogs">
              <a>Blogs</a>
            </NavLink>
            <NavLink >
              <button  onClick={() => logOut()}>Logout</button>
            </NavLink>

         
          </ul>
        </div>

        <img
          className="w-12 md:w-16 lg:w-24 h-24 ml-0 lg:ml-5 py-2"
          src={logo}
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1 mr-16">
          {/* ---------------------------------------- */}
          <NavLink
            to="/"
            href="#_"
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm"
          >
            Home
          </NavLink>
          {/* ------------------------------------------ */}
          <NavLink
            to="/alljobs"
            href="#_"
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm"
          >
            All Jobs
          </NavLink>
          {/* -------------------------------------- */}
          <NavLink
            to="/appliedjobs"
            href="#_"
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm"
          >
            Applied Jobs
          </NavLink>
          {/* --------------------------------- */}

          <NavLink
            to="/addjob"
            href="#_"
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm"
          >
            Add Job
          </NavLink>
          {/* -------------------------------------- */}
          <NavLink
            to="/myjobs"
            href="#_"
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm"
          >
            My Jobs
          </NavLink>
           {/* ------------------------------------ */}
           <NavLink
            to="/blogs"
            href="#_"
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm"
          >
           Blogs
          </NavLink>
          {/* ----------------------------------- */}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        {/* ------------------------------------------------ */}
        <label className="cursor-pointer grid place-items-center">
          <input
          onChange={handelTheme}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {/* ------------------------------------------------ */}
        {user ? (
          ""
        ) : (
          <NavLink
            to="/login"
            href="#_"
            className="relative hidden md:block lg:block px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Log!N
            </span>
          </NavLink>   
        )}


        {/* ------------------------------------------------ */}
        {user ? (
          ""
        ) : (
          <NavLink
            to="/register"
            href="#_"
            className="relative hidden md:block lg:block px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Reg!ster
            </span>
          </NavLink>
        )}



        {/* ------------------------------------------------------ */}
        {user ? (
          <div className="flex gap-2">
            <img
              className="rounded-full w-14 h-13 "
              src={user.photoURL}
              alt=""
            />{" "}
            <NavLink
              href="#_"
              className="relative hidden lg:block px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <button
                onClick={() => logOut()}
                className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"
              >
                Logout
              </button>
            </NavLink>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navber;
