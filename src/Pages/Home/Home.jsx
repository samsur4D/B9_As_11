import React, { useEffect } from "react";
import Slider from "../Home/Slider";
import Exstwo from "./Exstwo";
import Exsone from "./Exsone";
import Exsthree from "./Exsthree";
import Tabss from "./Tabss/Tabss";
import Exsfour from "./Exsfour";
import rocket from '../../assets/images/rocket.png'
import 'animate.css';

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
