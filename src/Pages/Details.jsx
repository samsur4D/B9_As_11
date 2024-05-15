import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [job, setJob] = useState([]);

  const singleData = details.find((detail) => detail._id === id);
  console.log(singleData);

  useEffect(() => {
    fetch("https://b11-assignment-server.vercel.app/job")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      {singleData && (
        <article
          data-aos="zoom-in-down"
          className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900"
        >
          <div className="w-full mx-auto space-y-4 text-center">
            <p></p>
            <p className=" underline font-semibold tracking-wider uppercase text-2xl">
              {singleData.company}
            </p>
            <img
              className="flex items-center justify-center ml-20 rounded-3xl border border-black"
              src={singleData.photourl}
              alt=""
            />
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {singleData.description}
            </h1>
            <p className="text-2xl font-semibold">
              Salary Range : ${singleData.salary}
            </p>
            <p className="text-xl font-semibold">
              Job Category : {singleData.category}
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <p>
              Applicants Number <br /> {singleData.applicants}
            </p>
            <p>
              Job Title <br /> {singleData.title}
            </p>
            <p className="text-red-600 ">
              Application Deadline <br /> {singleData.deadline}
            </p>
          </div>
          <div>
            <NavLink to="/applied">
              {" "}
              <button
                data-aos="fade-right"
                className="btn btn-wide bg-blue-400 font-bold mt-5"
              >
                Do you want to apply now ?{" "}
              </button>
            </NavLink>
            <NavLink to={`/applied/${id}`}>
              {" "}
              <button
                data-aos="fade-left"
                className="btn btn-wide bg-blue-600 text-white font-bold mt-5 "
              >
                If you want ,<span className="animate-bounce underline text-red-400"> click here</span>{" "}
              </button>
            </NavLink>
          </div>
        </article>
      )}
      <div
        // data-aos="zoom-in-up"
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/prXGCb2/clem-onojeghuo-f-Y8-Jr4iu-PQM-unsplash-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-white h-full">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hire character. Train skill.
            </h1>
            <p className="mb-5 font-bold">
              "You don't build a business; you build people, and then people
              build the business." - Zig Ziglar
            </p>
            <span
              className="text-3xl mb-5 mt-2  flex items-center justify-center"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Typewriter
                words={[
                  '"Don’t hire for skills, hire for attitude. You can always teach skills."',
                ]}
                loop={20}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <NavLink to=""></NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
