import React, { useEffect } from 'react';
import Slider from '../Home/Slider'
import Exstwo from './Exstwo';
import Exsone from './Exsone';
import Exsthree from './Exsthree';
import Tabss from './Tabss/Tabss';

const Home = () => {
    useEffect(() => {
        document.title = 'Job Seeker';
        return () => {
          document.title = 'Title';
        };
      }, []);

    return (
        <div className=''>
            
            <Slider></Slider>

            

            <Exstwo></Exstwo>

            <Tabss></Tabss>
            <Exsone></Exsone>

            <Exsthree></Exsthree>
            
        </div>
    );
};

export default Home;