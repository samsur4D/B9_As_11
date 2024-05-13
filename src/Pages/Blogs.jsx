import React, { useEffect, useState } from 'react';
import Blog from '../Components/Blog';
import Blog2 from '../Components/Blog2';
import Blog3 from '../Components/Blog3';
import { NavLink } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

const Blogs = () => {
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
                  ! loading && <div>
                     <NavLink to="/blogsection"> <Blog></Blog></NavLink>
       <NavLink to="/blogsectionii"><Blog2></Blog2></NavLink>
       <NavLink to="/blogsectioniii"><Blog3></Blog3></NavLink>
                  </div>
        }



      
        </div>
    );
};

export default Blogs;