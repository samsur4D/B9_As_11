import React, { useEffect, useState } from 'react';
import From from '../Components/From';
import HashLoader from "react-spinners/HashLoader";

const Addjob = () => {
      
    useEffect(() => {
        document.title = 'Job_Seeker/AddJob';
        return () => {
          document.title = 'Title';
        };
      }, []);


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout( ( ) => {
        setLoading(false)
       }, 2000)
  }, [ ] )

    return (
        <div>
            {
             loading    &&  
              <div className="sweet-loading flex items-center justify-center h-96">
                       <HashLoader color={'#F2AE02'} size={65} />
              </div>
         }

{
                  ! loading && <From></From>
        }


            
            
        </div>
    );
};

export default Addjob;