import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { VscRunAll } from "react-icons/vsc";

const Tabss = () => {

const [tabIndex , setTabIndex] = useState(0)


  return (
    <>
    <div data-aos="zoom-out-up" className="flex mt-40 items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  ">
    <NavLink 
      to=""
      onClick={() => setTabIndex(0)}
        rel="noopener noreferrer"
        href="#"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-black border-b-0' : 'border-b'} rounded-t-lg `}
      >
      <VscRunAll />
        <span>All Jobs here</span>
      </NavLink>
      <NavLink 
      to={`onsite`}
      onClick={() => setTabIndex(1)}
        rel="noopener noreferrer"
        href="#"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-black border-b-0' : 'border-b'} rounded-t-lg `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>On-site Jobs</span>
      </NavLink>

      <NavLink
      to={`remoteJobs`}
      onClick={() => setTabIndex(2)}
        rel="noopener noreferrer"
        href="#"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 2 ? 'border border-black border-b-0' : 'border-b'} rounded-t-lg `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>Remote jobs</span>
      </NavLink>
      <NavLink
       to={`hybridJobs`}
      onClick={() => setTabIndex(3)}
        rel="noopener noreferrer"
        href="#"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 3 ? 'border border-black border-b-0' : 'border-b'} rounded-t-lg `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <span>Hybrid jobs</span>
      </NavLink>
      <NavLink
      to={`partTimeJobs`}
      onClick={() => setTabIndex(4)}
        rel="noopener noreferrer"
        href="#"
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 4 ? 'border border-black border-b-0' : 'border-b'} rounded-t-lg `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
        <span>Part-time jobs</span>
      </NavLink>
     
    </div>
    <Outlet></Outlet>
    </>
  );
};

export default Tabss;
