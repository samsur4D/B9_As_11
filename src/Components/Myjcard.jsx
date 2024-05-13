import React from 'react';

const Myjcard = () => {
    return (
        <div>
                  <div className="relative  mt-5 rounded-3xl bg-gray-300  flex flex-col justify-between  p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
	<div className="p-0 md:p-1 lg:p-3 space-y-1">
		<h3 className="text-3xl font-semibold">Job Title</h3>
		<h3 className="text-md font-semibold">salary range</h3>
		<h3 className="text-md font-semibold">Job Posting Date</h3>
		<h3 className="text-md font-semibold">Applicants Number</h3>
		
	</div>
	<div className="flex items-center  gap-3 p-3">
		
		<div className=" space-y-1 ml-0 md:ml-24 lg:ml-0">
			<div className='flex flex-col'>
            <span className="text-lg font-semibold">Job is posted by <span className='underline'>samsur rahman</span></span>
            <span className="text-2xl font-semibold">Job Posting Date : April 03, 2021</span>
			<span className="text-2xl text-red-500 font-bold underline">Application Deadline : April 03, 2021</span>
            </div>
		</div>
      
	</div>
	<button className=' px-4 py-4 md:px-4 md:py-4 lg:px-2 lg:py-0 underline text-blue-600 font-semibold  rounded-2xl'>View Details</button>
    
                        </div>

        </div>
    );
};

export default Myjcard;