import React from 'react';
import logo from '../assets/images/one (1).jfif'
import logos from '../assets/images/one (2).jfif'
const Applied = () => {
    return (
        <section data-aos="zoom-in-down" className="p-6 bg-gray-200  rounded-lg mb-5  ">
        <h1 data-aos="fade-up" className="ml-0 lg:ml-40 font-bold text-4xl mb-3 md:mb-4 lg:mb-5 underline">Applied This Job </h1>
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
              <label htmlFor="firstname" className="text-sm">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Job Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Job Category"
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Company NAme
              </label>
              <input
                type="text"
                name="company"
                placeholder="Job Category"
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                User Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                {" "}
                UserEmail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Job Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                Salary Range
              </label>
              <input
                id="city"
                type="number"
                name="salary"
                placeholder=""
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                Posting Date
              </label>
              <input
                id="state"
                type="date"
                name="date"
                placeholder=""
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                Applicants Number
              </label>
              <input
                id="zip"
                type="number"
                name="applicants"
                placeholder=""
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Picture Url Of the Job Banner
              </label>
              <input
                type="url"
                name="photourl"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 h-12 focus:dark:ring-violet-600 "
              ></input>
            </div>
            {/* --------- */}
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className=" text-2xl font-bold">Job Seeker</p>
            <p className="text-xl text-red-700 animate-pulse">
              "Where careers take flight"
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm text-red-600">
                Application Deadline
              </label>
              <input
                type="text"
                name="deadline"
                placeholder=""
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div>

            <input
              type="submit"
              value="Add Job"
              className="w-full bg-black px-20 lg:px-96 py-3  text-white font-bold rounded-xl"
            />

            {/* === */}
          </div>
        </fieldset>
      </form>
    </section>
    );
};

export default Applied;