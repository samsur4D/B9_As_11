import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog2 = () => {
    return (
        <div  className=" shadow-2xl mt-5 mb-5 bg-[#fab1a0]">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">Aug 12, 2021</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded  ">Express.js/Nest.js</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is express js? What is Nest JS ?</a>
			<p className="mt-2">Express.js is one of the most popular web application frameworks for Node.js. And , NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. </p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<NavLink to="/blogsectionii"  rel="noopener noreferrer" href="#" className="underline text-blue-500">Read more</NavLink>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://t4.ftcdn.net/jpg/01/95/15/21/360_F_195152118_mJWndEwAgbd9JKUiQ31XazFWCim1yf0b.webp"
					 alt="avatar" className="object-cover w-16 h-16 mx-4 rounded-full 0" />
					<span className="hover:underline dark:text-gray-600">Lionel Daiso</span>
				</a>
			</div>
		</div>
	</div>
</div>
    );
};

export default Blog2;