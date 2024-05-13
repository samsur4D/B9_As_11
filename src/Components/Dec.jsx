import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Dec = () => {
    return (
        <div  className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/BC31QWn/zac-durant-6-Hz-PU9-Hyfg-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white h-full">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">The only way to do great work is to love what you do.</h1>
            <p className="mb-5 font-bold">"Success is not the result of spontaneous combustion. You must set yourself on fire." - Arnold H. Glasow

</p>
<span className='text-3xl mb-5 mt-2  flex items-center justify-center' style={{ color: 'white', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['"Success is liking yourself, liking what you do, and liking how you do it."']}
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

export default Dec;