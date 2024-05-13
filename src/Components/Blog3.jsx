import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog3 = () => {
    return (
        <div  className="shadow-2xl mt-5 mb-5 bg-[#ffeaa7]">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">July 5, 2019</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded ">CRUD Operation</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is CRUD Operation ?</a>
			<p className="mt-2">
CRUD stands for Create, Read, Update, and Delete. It's a set of basic operations commonly used in database and web development to manage the data stored in a system.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<NavLink to="/blogsectioniii" rel="noopener noreferrer" href="#" className="underline text-blue-500">Read more</NavLink>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://img.freepik.com/premium-photo/confident-businessman-portrait-handsome-young-man-blue-shirt-looking-camera-keeping-arms-crossed-while-standing-isolated-white_425904-35622.jpg" alt="avatar" className="object-cover w-16 h-16 mx-4 rounded-full 0" />
					<span className="hover:underline dark:text-gray-600">Akbar Ali</span>
				</a>
			</div>
		</div>
	</div>
</div>
    );
};

export default Blog3;