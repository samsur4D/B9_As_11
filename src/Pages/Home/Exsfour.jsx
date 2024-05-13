import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";

const Exsfour = () => {
    return (
       
        <div data-aos="zoom-in-up" className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/fQ1f5gK/cytonn-photography-n95-VMLxq-M2-I-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white h-full">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find work you'll love, fast.</h1>
            <p className="mb-5 font-bold">Embrace opportunities for growth and development within your role. Continuously learning new things can keep your job interesting and help you stay motivated.

</p>
<span className='text-3xl mb-5 mt-2  flex items-center justify-center' style={{ color: 'white', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['"Transparency breeds trust; we are committed to both"']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
            <NavLink to=""></NavLink>
            
          </div>
        </div>
      </div>
        
       
    );
};

export default Exsfour;