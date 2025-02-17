import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logoss from "../assets/icons/logo.svg";
import Swal from 'sweetalert2';
import { AuthContext } from "../AuthProvider";

const Form = () => {
  // const [deadline, setDeadline] = useState(new Date());
  const {user} = useContext(AuthContext)
  console.log(user);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const company = form.company.value;
    const name = form.name.value;
    const email = form.email.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const salary = form.salary.value;
    const date = form.date.value;
    const applicants = 0;
    const photourl = form.photourl.value;

    const newJob = { title, category, company, name, email, description, salary, date, applicants, photourl, deadline }
    console.log(newJob);
    //    send data to the server
    fetch('https://b11-assignment-server.vercel.app/job', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        form.reset();
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Job is Added in our territory",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
    <section className="p-6 bg-gray-200 rounded-lg mb-5">
      <h1 data-aos="fade-up" className="ml-0 lg:ml-40 font-bold text-4xl mb-3 md:mb-4 lg:mb-5 underline">Add Any Job in Our Territory</h1>
      <form
        onSubmit={handleAddJob}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shad">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <img src={logoss} className="mt-5" alt="" />
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
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75   "
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
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75   "
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
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75   "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                User Name
              </label>
              <input
                type="text"
                name="name"
                value={user.displayName}
                placeholder="Name"
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75   "
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
                value={user.email}
                placeholder="Email"
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  "
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
                className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75  "
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
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75   "
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
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  "
              />
            </div>
            {/* <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                Applicants Number
              </label>
              <input
                id="zip"
                type="number"
                value={applicants}
                name="applicants"
                placeholder=""
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
            </div> */}
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
     
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="text-2xl font-bold">Job Seeker</p>
            <p className="text-xl text-red-700 animate-pulse">
              "Where careers take flight"
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full">
              <label htmlFor="deadline" className="text-2xl underline text-red-600">Application Deadline</label>
              <br />
           {/* <DatePicker
                selected={deadline}
                dateFormat='yyyy/MM/dd'
                onChange={(date) => setDeadline(date)}
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
              /> */}
              <input
                id="state"
                type="date"
                name="deadline"
                placeholder=""
                className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
              />
             
           
            </div>
            <input
              type="submit"
              value="Add Job"
              className="w-full bg-black px-20 lg:px-96 py-3 text-white font-bold rounded-xl"
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
