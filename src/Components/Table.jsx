import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const Table = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    document.title = "Job_Seeker/AllJobs";
    return () => {
      document.title = "Title";
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/job")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value === "") {
      setFilteredJobs([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    if (searchQuery !== "") {
      const filtered = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 ">
      <form className="form-control items-center" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder=" Filter Job Categories and Find Job"
          className="input input-bordered input-info w-full max-w-3xl mt-5 mb-5"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead data-aos="zoom-in-down" className="bg-gray-200 rounded-lg">
            <tr className="text-center mb-5">
              <th className="p-3 text-md">Job Title With Banner</th>
              <th className="p-3 text-md">Job Title</th>
              <th className="p-3 text-md">Category</th>
              <th className="p-3 text-md">Salary</th>
              <th className="p-3 text-md">Posting Date</th>
              <th className="p-3 text-md">Company</th>
              <th className="p-3 text-md">Applicants</th>
              <th className="p-3 text-md">Application Deadline</th>
             
              <th className="p-3 text-md">Explore</th>
             
            </tr>
          </thead>
          <tbody className="bg-[#f7f1e3] w-full">
            {searchQuery !== "" && filteredJobs.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center text-4xl p-5">
                  <Marquee speed={300}>
                    <p>
                      {" "}
                      _____________________________No Jobs Found
                      ‼_________________________
                    </p>
                    <p> ______________No Jobs Found ‼</p>
                  </Marquee>
                </td>
              </tr>
            ) : (
              (searchQuery === "" ? jobs : filteredJobs).map((job) => (
                <tr
                  key={job._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <img
                      className="h-28 rounded-3xl ml-10 border border-black"
                      src={job.photourl}
                      alt=""
                    />
                  </td>
                  <td className="p-3">
                    <p>{job.title}</p>
                  </td>
                  <td className="p-3">
                    <p>{job.category}</p>
                  </td>
                  <td className="p-3">
                    <p>${job.salary}</p>
                  </td>
                  <td className="p-3">
                    <p>{job.date}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{job.company}</p>
                  </td>
                  <td className="p-3 ">
                    <p>{job.applicants}</p>
                  </td>
                  <td className="p-3">
                    <p>{job.deadline}</p>
                  </td>
                  <td className="p-3">
                    {/* === */}
                   <NavLink to="/details"> <button type="button" className="px-3 py-1 underline">View Details</button></NavLink>
                    {/* ===== */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
