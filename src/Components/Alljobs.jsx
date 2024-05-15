import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const Alljobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.title = "Job_Seeker/AllJobs";
    return () => {
      document.title = "Title";
    };
  }, []);

  useEffect(() => {
    fetch("https://b11-assignment-server.vercel.app/job")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-5 mb-20 ">
      <h1 className="text-xl">
        {" "}
        <span className="text-5xl text-black font-bold">
          Jobs Of Each type
        </span>{" "}
        are listed below
      </h1>
      {loading && (
        <div className="sweet-loading flex items-center justify-center h-96">
          <HashLoader color={"#F2AE02"} size={65} />
        </div>
      )}

      {!loading && (
        <div>
          {" "}
          {jobs.slice(0,5).map((job) => (
            <div
              key={job._id}
              className="relative  mt-5 rounded-3xl bg-[#dff9fb]  flex flex-col justify-between  p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300"
            >
              <div className="p-0 md:p-1 lg:p-3 space-y-1">
                <h3 className="text-3xl font-semibold">{job.title}</h3>
                <h3 className="text-md font-semibold">salary ${job.salary}</h3>
                <h3 className="text-md font-semibold">
                  Job Category : "{job.category} Job"
                </h3>
                <h3 className="text-md font-semibold">
                  Applicants Number : {job.applicants}
                </h3>
              </div>
              <div className="flex items-center  gap-3 p-3">
                <div className=" space-y-1 ml-0 md:ml-24 lg:ml-0">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">
                      Job is posted by{" "}
                      <span className="underline">{job.name}</span>
                    </span>
                    <span className="text-2xl font-semibold">
                      Job Posting Date : {job.date}
                    </span>
                    <span className="text-2xl text-red-500 font-bold underline">
                      Application Deadline : {job.deadline}
                    </span>
                  </div>
                </div>
              </div>
              <NavLink to={`/details/${job._id}`}>
                <button className=" px-4 py-4 md:px-4 md:py-4 lg:px-2 lg:py-0 lg:mt-16 underline text-blue-600 font-semibold  rounded-2xl">
                  View Details
                </button>{" "}
              </NavLink>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Alljobs;
