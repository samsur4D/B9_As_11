import React, { useContext, useState } from "react";
import registerPic from "../../assets/images/login.svg";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
   
	const {registerUser , setUser } = useContext(AuthContext)
	const [error , setError] = useState("")

	

const handelRegister = (e) =>{
     e.preventDefault();
	 const name = e.target.name.value;
	 const email = e.target.email.value;
	 const password =e.target.password.value;
	 const photourl = e.target.photourl.value ;

	//  if(!/@gmail\.com$/.test(email)){
	// 	setError("@gmail.com - hobe")
	// 	return
	// 	}
	// -----------------------------------------------------------
	// if(password !== confirmPassword){
	// 	setError("Did Not Match Password with Confirm Password")
	// 	return
	//   }
	
	// ----------------------------------------------------------------
	   if(password.length < 6){
		setError("password must be six charecter")
		return
	  }
	// ----------------------------------------------------------------
	  if(!/[a-z]/.test(password)){
		setError("Use Any Lowercase value")
		return
	  }
	  // ----------------------------------------------------------------
	  if(!/[A-Z]/.test(password)){
		setError("Use Any Uppercase VAlue")
		return
	  }
	 // ----------------------------------------------------------------
	//   if(!/[@#%&*$]/.test(password)){
	// 	setError("add any of them -!,@,#,$,%,*,& ")
	// 	return
	//   }
	
	  setError("")
	 registerUser(email,password)
	 .then(result =>{
		setUser(result.user)
		Swal.fire({
			icon: "success",
			title: "Register Finished",
			showConfirmButton: false,
			timer: 1500,
		  });
	 })
	 .catch(error=> setError(error.message.split("/")[1]))

}

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-2 mb-2 ">
      <div className="">
        <img src={registerPic} alt="" />
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center border border-black  ">
        <h1 className="text-3xl font-semibold">Sign Up to your account</h1>
        <a className="text-sm dark:text-gray-600" href="/">
          Or start your free trial
        </a>
        <form onSubmit={handelRegister} noValidate="" className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="sr-only">
              Email address
            </label>
            <input
              id="name"
			  name="name"
              type="text"
              placeholder="User Name"
              className="rounded-t-md bg-gray-100 h-20    focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
			  name="email"
              type="email"
              placeholder="Email address"
              className="rounded-t-md bg-gray-200 h-20    focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
			  name="password"
              type="text"
              placeholder="Password"
              className="-mt-1 rounded-b-md bg-gray-300 h-20   focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
            <label htmlFor="photourl" className="sr-only">
              Password
            </label>
            <input
              id="photourl"
			  name="photourl"
              type="url"
              placeholder="photo url"
              className="-mt-1 rounded-b-md bg-gray-300 h-20   focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"
            />
			 {
             error && <small className='text-red-500'>{error}</small>
                 }
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                aria-label="Remember me"
                className="mr-1  rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600"
              />
              <label htmlFor="remember" className="text-sm ">
                Remember me
              </label>
            </div>
            <a className="text-sm " href="/">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="px-8 py-3 space-x-2 bg-orange-600 text-white  font-bold rounded dark:bg-violet-600 "
          >
            Sign Up
          </button>
        </form>
      </div>
	  {/* ---------------------------------- */}
	  {/* <div className="">
        <img src={registerPic} alt="" />
      </div> */}
    </div>
  );
};

export default Register;
