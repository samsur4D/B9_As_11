import React from 'react';
import logo from '../assets/images/one (1).jfif'
import logos from '../assets/images/one (2).jfif'
const Applied = () => {
    return (
        <section data-aos="zoom-in-down" className="p-6 bg-gray-200  rounded-lg mb-5  ">
        <h1 data-aos="fade-up" className="ml-0 lg:ml-40 font-bold text-4xl mb-3 md:mb-4 lg:mb-5 underline">Apply to the Job </h1>
      <form
      
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shad">
          <div className="space-y-2 col-span-full lg:col-span-1">
           
            <img src={logo} className="mt-5" alt="" />
            <img src={logos} className="mt-5" alt="" />
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
           
           
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                {" "}
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Short Message
              </label>
              <input
                type="text"
                name="message"
                placeholder="Give your short message here !"
                className="w-full h-32 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
           
           
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
              Your Resume Link
              </label>
              <input
                type="url"
                name="resume"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 h-12 focus:dark:ring-violet-600 "
              ></input>
            </div>
            <button className="btn px-12  btn-block bg-blue-400">Apply </button>
            {/* --------- */}
            
          </div>
          
        </fieldset>
       
      </form>
    </section>
    );
};

export default Applied;