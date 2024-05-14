import React, { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import { useLoaderData  } from 'react-router-dom';

const Update = () => {
    const [deadline, setDeadline] = useState(new Date());
    const [jobi,setJobi] = useState([])

      const newJob = useLoaderData();
    //   console.log(newJob);
     const {title , _id , category , company ,name , email , salary ,  date ,applicants } = newJob
     
    



    // -----------------------------
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const company = form.company.value;
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        const salary = form.salary.value;
        const date = form.date.value;
        const applicants = form.applicants.value;
        const photourl = form.photourl.value;
        console.log(_id);
        const updatejob = { title, category, company, name, email, description, salary, date, applicants, photourl, deadline }
        console.log(updatejob);
        //    send data to the server
        fetch(`http://localhost:5000/job/${_id}` , {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatejob)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Your Job is Updated Now",
                showConfirmButton: false,
                timer: 1500
              });
              setJobi(updatejob)
            }
          })
      }
    // ------------------------------
    return (
        <div>
           <section className="p-6 bg-gray-300 rounded-lg mb-5">
      <h1 data-aos="fade-up" className="ml-0 lg:ml-40 font-bold text-4xl mb-3 md:mb-4 lg:mb-5 underline">Edit Your Job in Our Territory </h1>
      <form
        onSubmit={handleUpdate}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shad">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <img src="" className="mt-5" alt="" />
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
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
                defaultValue={category}
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
                defaultValue={company}
                placeholder=""
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
                defaultValue={name}
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
                defaultValue={email}
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
                defaultValue={salary}
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
                defaultValue={date}
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
                defaultValue={applicants}
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
     
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="text-2xl font-bold">Job Seeker</p>
            <p className="text-xl text-red-700 animate-pulse">
              {/* "Where careers take flight" */}
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full">
              <label htmlFor="deadline" className="text-2xl underline text-red-600">Application Deadline</label>
              <br />
              <DatePicker
                selected={deadline}
                dateFormat='yyyy/MM/dd'
                defaultValue={deadline}
                onChange={(date) => setDeadline(date)}
                className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="w-full bg-black px-20 lg:px-96 py-3 text-white font-bold rounded-xl"
            />
          </div>
        </fieldset>
      </form>
    </section>
        </div>
    );
};

export default Update;