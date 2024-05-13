import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div data-aos="fade-right" className=" shadow-2xl mt-5 mb-5 bg-[#00cec9]">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded  ">Access/Refresh-Token</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is an access token and refresh token? How do they work and where should
we store them on the client side?</a>
			<p className="mt-2">When a user authenticates with a server, the server provides both an access token and a refresh token to the client application.The client application includes the access token in each request to access protected resources on the server.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<NavLink to="/blogsection" rel="noopener noreferrer" href="#" className="underline text-blue-500">Read more</NavLink>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt="avatar" className="object-cover w-16 h-16 mx-4 rounded-full 0" />
					<span className="hover:underline dark:text-gray-600">Bimol Pathan</span>
				</a>
			</div>
		</div>
	</div>
</div>
    );
};

export default Blog;