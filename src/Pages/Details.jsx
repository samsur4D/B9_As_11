import React from 'react';
import { NavLink } from 'react-router-dom';

const Details = () => {
    return (
        <article data-aos="zoom-in-down" className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
	<div className="w-full mx-auto space-y-4 text-center">
		<p className="text-xs font-semibold tracking-wider uppercase">#TailwindCSS</p>
		<h1 className="text-4xl font-bold leading-tight md:text-5xl">Interdum et malesuada fames ac ante ipsum primis in faucibus?</h1>
		<p className="text-sm dark:text-gray-600">by
			<a rel="noopener noreferrer" href="#" target="_blank" className="underline dark:text-violet-600">
				<span itemprop="name">Leroy Jenkins</span>
			</a>on
			<time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
		</p>
	</div>
	<div className="">
		<p>Insert the actual text content here...</p>
	</div>
	<div className="pt-12 border-t ">
		<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
			<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 " />
			<div className="flex flex-col">
				<h4 className="text-lg font-semibold">Leroy Jenkins</h4>
				<p className="dark:text-gray-600">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
			</div>
		</div>
		<div className="flex justify-center pt-4 space-x-4 align-center">
      <NavLink to="/applied">  <button className="btn btn-block bg-[#1B9CFC]">Applied Job </button>  </NavLink>
		</div>
	</div>
</article>
    );
};

export default Details;