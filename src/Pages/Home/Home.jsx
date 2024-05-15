import React, { useEffect } from "react";
import Slider from "../Home/Slider";
import Exstwo from "./Exstwo";
import Exsone from "./Exsone";
import Exsthree from "./Exsthree";
import Tabss from "./Tabss/Tabss";
import Exsfour from "./Exsfour";
import 'animate.css';
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Job Seeker";
    return () => {
      document.title = "Title";
    };
  }, []);

  return (
    <div className="">
      <Slider></Slider>

      <Exstwo></Exstwo>

      <Tabss></Tabss>
      <NavLink to="/alljobs" href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Show All Jobs</span>
</NavLink>

<h1 className="underline"></h1>
     
    {/* <div>
         <div>
          <img className="w-96 h-96" src="https://i.ibb.co/fvFhM5m/38a1ba72-017c-4cb5-838c-a78314cb169c.jpg" alt="" />
         </div>
    </div> */}

      <Exsone></Exsone>

      <Exsthree></Exsthree>

      <Exsfour></Exsfour>
    </div>
  );
};

export default Home;
