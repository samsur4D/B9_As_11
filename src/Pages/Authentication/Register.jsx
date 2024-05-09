import React from 'react';
import registerPic from "../../assets/images/login.svg";


const Register = () => {
    return (
        <div className='flex items-center justify-center'>
              <div><img src={registerPic} alt="" /></div>
{/* --------------------------------------------------------------------------------- */}
<div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center  ">
	<h1 className="text-3xl font-semibold">Sign Up to your account</h1>
	<a className="text-sm dark:text-gray-600" href="/">Or start your free trial</a>
	<form noValidate="" className="space-y-4">
		<div className="flex flex-col gap-2">
			<label htmlFor="email" className="sr-only">Email address</label>
			<input id="email" type="email" placeholder="Email address" className="rounded-t-md bg-gray-200 h-20    focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2" />
			<label htmlFor="password" className="sr-only">Password</label>
			<input id="password" type="text" placeholder="Password" className="-mt-1 rounded-b-md bg-gray-300 h-20   focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2" />
		</div>
		<div className="flex justify-between">
			<div className="flex items-center">
				<input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1  rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600" />
				<label htmlFor="remember" className="text-sm ">Remember me</label>
			</div>
			<a className="text-sm " href="/">Forgot your password?</a>
		</div>
		<button type="button" className="px-8 py-3 space-x-2 bg-orange-600 text-white  font-bold rounded dark:bg-violet-600 ">Sign Up</button>
	</form>
</div>
        </div>
    );
};

export default Register;