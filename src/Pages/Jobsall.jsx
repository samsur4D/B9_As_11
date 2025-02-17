import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';
import HashLoader from "react-spinners/HashLoader";
import { useLoaderData } from 'react-router-dom';
import Dec from '../Components/Dec';

const Jobsall = () => {
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
                  ! loading &&   <div><Table></Table> <Dec></Dec></div>
        }


           
        </div>
    );
};

export default Jobsall;