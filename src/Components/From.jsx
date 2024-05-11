import React from 'react';
import logoss from '../assets/icons/logo.svg'
const From = () => {
    return (
        <section className="p-6 bg-gray-200  rounded-lg mb-5  ">
        <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shad">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    {/* <p className="font-medium">Personal Inormation</p>
                    <p className="text-xs mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p> */}
                    <img src={logoss} className='mt-5' alt="" />
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="firstname" className="text-sm">Job Title</label>
                        <input id="firstname" type="text" name='title' placeholder="Job Title" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm">Job Category</label>
                        <input id="lastname" type="text" name='category' placeholder="Job Category" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">User Name</label>
                        <input id="email" type="text" name='name'  placeholder="Name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm"> UserEmail</label>
                        <input id="email" type="email" name='email' placeholder="Email" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Job Description</label>
                        <input id="address" type="text" placeholder="" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="city" className="text-sm">Salary Range</label>
                        <input id="city" type="number" name='salary' placeholder="" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="state" className="text-sm">Posting Date</label>
                        <input id="state" type="date" name='date' placeholder="" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="zip" className="text-sm">Applicants Number</label>
                        <input id="zip" type="number" name='applicants' placeholder="" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="bio" className="text-sm">Picture Url Of the Job Banner</label>
                        <input type='url'  id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-12 focus:dark:ring-violet-600 "></input>
                    </div>
                   {/* --------- */}
                </div>
            </fieldset>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className=" text-2xl font-bold">Job Seeker</p>
                    <p className="text-xl text-red-700 animate-pulse">"Where careers take flight"</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                   
                    
                <div className="col-span-full">
                        <label htmlFor="address" className="text-sm text-red-600">Application Deadline</label>
                        <input id="address" type="text" placeholder="" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div>
                {/* <div className="col-span-full">
                        <label htmlFor="address" className="text-sm text-red-600">Application Deadline</label>
                        <input id="address" type="text" placeholder="" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                    </div> */}
                 
                 <a href="#_" className="relative  inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span className="relative">Add Job</span>
</a>
                    {/* === */}
                 
                </div>
            </fieldset>
        </form>
    </section>
    );
};

export default From;