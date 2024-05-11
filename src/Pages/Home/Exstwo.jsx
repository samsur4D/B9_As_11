import React from 'react';
import { motion } from "framer-motion";
import { fadeIn }  from '../../Variants/Variantone'


const Exstwo = () => {
    return (
    <div>

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


        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 px-16 ml-5 '>
            {/* --------------------------- */}
            <div className="card card-compact w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/r0QSfjW/robert-godwin-SPc-Fp-XIME6-M-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-blue-400  py-2 px-2 rounded-xl">Assessments</h2>
    <p>11 awesome fee carrer self  assessments</p>
    
  </div>
</div>
            {/* ----------------------------- */}
            <div className="card card-compact w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/tb8WKt0/shipman-northcutt-sg-ZX15-Da8-YE-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-purple-400  py-2 px-2 rounded-xl">Jobs</h2>
    <p>How To start looking for a job ?</p>
    
  </div>
</div>

<div className="card card-compact w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/RSLSMLC/foto-sushi-6anudmp-ILw4-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-yellow-400  py-2 px-2 rounded-xl">Resume</h2>
    <p>Resume samples </p>
    
  </div>
</div>

<div className="card card-compact w-64 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/xHTpwFR/thisisengineering-TXxi-Fu-QLBKQ-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-orange-400  py-2 px-2 rounded-xl">Interview</h2>
    <p>100 top interview questiuons - be prepared</p>
    
  </div>
</div>
            {/* ------------------------------- */}
            
        </motion.div>
    </div>
    );
};

export default Exstwo;