import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import logo from '../assets/icons/logo.svg'



const Navber = () => {
    const {user , logOut} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="navbar  shadow-2xl mb-3 rounded-lg bg-[#2980b9]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <NavLink to="/"><a>Home</a></NavLink>
       
        <li><a>Item 3</a></li>
      </ul>
    </div>
    {/* <h1 className="btn btn-ghost text-4xl font-bold text-white">JOB<span className="text-red-700">SEEKER</span>🔍</h1> */}
    <img className="w-24 h-24 ml-5 py-2" src={logo} alt="" />
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-3 px-1">
    {/* ---------------------------------------- */}
    <NavLink to="/" href="#_" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm">
Home
</NavLink>
    {/* ------------------------------------------ */}
    <NavLink to="/addjob" href="#_" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-black rounded-lg text-sm">
Add Job
</NavLink>
       {/* --------------------------------- */}
      
 
       
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
    {/* ------------------------------------------------ */}
 {
    user? "" :  <NavLink to="/login" href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Log!N</span>
    </NavLink>
 }
 {/* ------------------------------------------------ */}
{
    user ? "" :  <NavLink to="/register" href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Reg!ster</span>
    </NavLink>
}
{/* ------------------------------------------------------ */}
{
    user? <div className="flex gap-2"><img className="rounded-full w-14 h-13 " src={user.photoURL} alt="" /> <NavLink  href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <button onClick={()=>logOut()} className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Logout</button>
    </NavLink> </div> : ""
}
  </div>
</div>
    );
};

export default Navber;