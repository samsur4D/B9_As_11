import React from 'react';

const Hybrid = () => {
    return (
        <div className='mt-5 '>
        <h1 className='text-xl'> <span className='text-2xl text-red-500 font-bold'>Only Hybrid jobs</span> are listed below</h1>
        <div className="relative ml-72 mt-5 rounded-3xl bg-gray-300  flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
<div className="p-3 space-y-1">
    <h3 className="text-3xl font-semibold">Lorem ipsum dolor sit amet</h3>
    <p className="text-sm dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam possimus repellat incidunt odit eligendi mollitia quaerat autem nobis fugiat natus?</p>
</div>
<div className="flex items-center gap-3 p-3">
    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 dark:bg-gray-500 rounded-full shadow" />
    <div className="space-y-1">
        <span className="text-xs">April 03, 2021</span>
        <div className="flex flex-wrap gap-3">
            <a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">javascript</a>
            <a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">serverless</a>
            <a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">aws</a>
        </div>
    </div>
</div>
</div>
    </div>
    );
};

export default Hybrid;