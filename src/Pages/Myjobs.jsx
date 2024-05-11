import React, { useEffect, useState } from 'react';
import Myjcard from '../Components/Myjcard';
import HashLoader from "react-spinners/HashLoader";

const Myjobs = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = 'Job_seeker/Myjobs';
        return () => {
          document.title = 'Title';
        };
      }, []);
      useEffect(() => {
        setTimeout( ( ) => {
        setLoading(false)
       }, 2000)
  }, [ ] )


    return (
        <div className='mb-10'>
            <h1 data-aos="flip-up" className='text-7xl font-bold'>My Jobs Are Here</h1>
            {/* ------------- */}
            {
             loading    &&  
              <div className="sweet-loading flex items-center justify-center h-96">
                       <HashLoader color={'#F2AE02'} size={65} />
              </div>
         }
         

       {
                  ! loading &&  <Myjcard></Myjcard>
        }



        
            {/* ------------- */}
        </div>
    );
};

export default Myjobs;