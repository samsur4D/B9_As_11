import React from 'react';
import { motion } from "framer-motion";
import { fadeIn }  from '../../Variants/Variantone'


const Exstwo = () => {
    return (
    <div className='mt-32 mb-60'>

  <motion.div
  
  variants={fadeIn("up" , 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once:false , amount:0.7}}

  className='mt-5 mb-5'>
    <h1 className='text-3xl font-semibold'>Top Career Advice</h1>
    <h2>Brouse Advice</h2>
  </motion.div>


<motion.div
        variants={fadeIn("up" , 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false , amount:0.7}}


        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 px-16  gap-3 '>
            {/* --------------------------- */}
            <div className="card card-compact w-full lg:w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/n6m9jgh/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center -px-5  lg:px-5 bg-blue-400  py-2  rounded-xl">Assets</h2>
    <p>11 awesome fee carrer self  assessments</p>
    
  </div>
</div>
            {/* ----------------------------- */}
            <div className="card card-compact  w-full lg:w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/7jshLB6/ali-morshedlou-WMD64t-Mfc4k-unsplash.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-purple-400 text- py-2 px-9 lg:px-16 rounded-xl">Jobs</h2>
    <p>How To start looking for a job ?</p>
    
  </div>
</div>

<div className="card card-compact  w-full lg:w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/5FV9ynh/rene-ranisch-f5n-Yyu7rmk-I-unsplash.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-yellow-400  py-2 -px-5 lg:px-12 rounded-xl">Resume</h2>
    <p>Resume samples </p>
    
  </div>
</div>

<div className="card card-compact  w-full lg:w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/chJK4H5/christina-wocintechchat-com-SJv-Dxw0azqw-unsplash.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-orange-400   py-2 -px-8 lg:px-9 rounded-xl">Interview</h2>
    <p>100 top interview questiuons - be</p>
    
  </div>
</div>
            {/* ------------------------------- */}
            
        </motion.div>
    </div>
    );
};

export default Exstwo;