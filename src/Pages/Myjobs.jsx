import React, { useContext, useEffect, useState } from 'react';

import HashLoader from "react-spinners/HashLoader";
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const Myjobs = () => {
    const [loading, setLoading] = useState(true);
    const  [myJob,setMyJob] = useState([])
    // const [jobs , setJobs] = useState([])
    const {user} = useContext(AuthContext)
     console.log(user);

    

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

  useEffect(()=>{
    fetch("https://b11-assignment-server.vercel.app/job")
    .then(res => res.json())
    .then(data => {
       console.log(data);
      const mypostedJobs = data.filter((job) => job.email === user.email)
      console.log(mypostedJobs);
      setMyJob(mypostedJobs)
    })
  },[])
  
// --------------------

// ------------------------
const handeldelete = id => {
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://b11-assignment-server.vercel.app/job/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            // Filter out the deleted item from the state
            const updatedJobs = myJob.filter(item => item._id !== id);
            setMyJob(updatedJobs);
             // Update the state
            Swal.fire({
              title: "Deleted!",
              text: "Your Spot has been deleted.",
              icon: "success"
            });
          }
        })
        .catch(error => {
          console.error("Error deleting spot:", error);
          // Handle error if deletion fails
        });
    }
  });
};
// --------------------



// -------------------------







    return (
        <div className='mb-10'>
            <h1 data-aos="flip-up" className='text-7xl font-bold'>My Posted Jobs Are Here</h1>
            {/* ------------- */}
            {
             loading    &&  
              <div className="sweet-loading flex items-center justify-center h-96">
                       <HashLoader color={'#F2AE02'} size={65} />
              </div>
         }
         

       {
                  ! loading &&  <div>

{
  myJob.map((mj)=>(
    <div key={mj._id} className="relative  mt-5 rounded-3xl bg-[#CAD3C8]  flex flex-col justify-between  p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
    <div className="p-0 md:p-1 lg:p-3 space-y-1">
      <h3 className="text-3xl font-semibold">{mj.title}</h3>
      <h3 className="text-md font-semibold">Salary Range : ${mj.salary}</h3>
      <h3 className="text-md font-semibold"> Job Category : {mj.category}</h3>
      <h3 className="text-md font-semibold">Applicants Number : {mj.applicants}</h3>
      
    </div>
    <div className="flex items-center  gap-3 p-3">
      
      <div className=" space-y-1 ml-0 md:ml-40 lg:ml-0">
        <div className='flex flex-col'>
              <span className="text-lg font-semibold">Job is posted by <span className='underline'>{user.displayName}</span></span>
              <span className="text-2xl font-semibold">Job Posting Date : {mj.date}</span>
        <span className="text-2xl text-red-500 font-bold underline">Application Deadline : {mj.deadline}</span>
              </div>
      </div>
        
    </div>
   <NavLink to={`/update/${mj._id}`}> <button className=' px-4 py-4 md:px-4 md:py-4 lg:px-2 lg:py-0 mt-16 underline text-blue-600 font-semibold  rounded-2xl'>Update</button> </NavLink>
    <button  onClick={() => handeldelete(mj._id)} className=' px-4 py-4 md:px-4 md:py-4 lg:px-2 lg:py-0 underline text-blue-600 font-semibold  rounded-2xl'>Delete</button>
      
                          </div>
  
  ))
}
                  </div>
        }






        
            {/* ------------- */}
        </div>
    );
};

export default Myjobs;