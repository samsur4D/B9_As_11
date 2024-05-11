import React from "react";
import { TiMessages } from "react-icons/ti";
import { FcMultipleSmartphones } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { motion } from "framer-motion";
import { fadeIn }  from '../../Variants/varianttwo'

const Exsone = () => {
  return (
    <div 
    data-aos="zoom-out"
    className=" mt-32 md:mt-40 lg:mt-60 px-16">
      <div className="">
        <h1 className="text-4xl font-bold mt-5 mb-2">
          Get ahead with Job Seeker
        </h1>
        <p>
          We're serving up trusted insights and anonymous conversation, so
          you'll have the goods you need to succeed.
        </p>
      </div>
      {/* --------------------------------------------------------------- */}
      <div 
       data-aos="flip-up"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-32 gap-2">
        <div className="card w-60 bg-black rounded-full ">
          <div className="card-body">
            <h2 className="card-title text-white flex text-center items-center justify-center">
              <TiMessages className="text-6xl" />
            </h2>
            <p className="text-white">Join Our Work Community</p>
          </div>
        </div>
        <div className="card w-60 bg-black rounded-full ">
          <div className="card-body">
            <h2 className="card-title text-white flex text-center items-center justify-center">
              <FcMultipleSmartphones className="text-6xl" />
            </h2>
            <p className="text-white">Find & apply to jobs</p>
          </div>
        </div>
        <div className="card w-60 bg-black rounded-full ">
          <div className="card-body">
            <h2 className="card-title text-white flex text-center items-center justify-center">
              <FcSearch className="text-6xl" />
            </h2>
            <p className="text-white">Search Comapny reviews</p>
          </div>
        </div>
        <div className="card w-60 bg-black rounded-full ">
          <div className="card-body">
            <h2 className="card-title text-white flex text-center items-center justify-center">
              <FcMoneyTransfer className="text-6xl" />
            </h2>
            <p className="text-white">Compare Salaries</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Exsone;
