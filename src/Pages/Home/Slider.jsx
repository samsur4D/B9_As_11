import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-10">
        {/* --------------------------------------------------- */}
     


        <SwiperSlide className="rounded-xl">
          <div className="w-full h-[700px] rounded-xl">
            <div className="relative w-full lg:w-full">
              <img
                className="  h-[900px] md:h-[600px] lg:h-[900px] lg:w-full"
                src="https://i.ibb.co/VvbP8yW/marvin-meyer-SYTO3xs06f-U-unsplash.jpg"
                alt=""
              />
            </div>

            <div
              className="absolute grid grid-cols-1 md:grid-cols-1    top-0   left-0 bg-opacity-85 opacity-75  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full
            p-5 rounded-2xl  "
            >
              <div className=" pl-5 py-20 lg:py-36 -mb-32 ">
                <h1 className="text-3xl lg:text-9xl  text-white font-bold">
                Empowering dreams
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                one job at a time.
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                  
                </h1>
              </div>
              {/* <div>
                <p className="text-white mb-5  text-xl font-semi-bold">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div> */}
              <span className='text-3xl mb-5 mt-2 bg-gray-200 flex items-center justify-center' style={{ color: '#2980b9', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['"Empowering individuals, enriching communities."']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
             
                <div className=" flex  items-center justify-center gap-5 ml-3">
                <a
                  href="#_"
                  className="relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>
                
                <a
                  href="#_"
                  className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ---------------------------------------------- */}
        <SwiperSlide className="rounded-xl">
          <div className="w-full h-[700px] rounded-xl">
            <div className="relative w-[450px] lg:w-full">
              <img
                className="  h-[500px] md:h-[600px] lg:h-[900px] lg:w-full"
                src="https://i.ibb.co/wdDZHdN/lycs-architecture-U2-BI3-GMn-SSE-unsplash.jpg"
                alt=""
              />
            </div>

            <div
              className="absolute grid grid-cols-1 md:grid-cols-1    top-0   left-0 bg-opacity-85 opacity-75  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full
            p-5 rounded-2xl  "
            >
              <div className=" pl-5 py-20 lg:py-36 -mb-32 ">
                <h1 className="text-3xl lg:text-9xl  text-white font-bold">
                Navigating careers,
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                forging futures
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                  
                </h1>
              </div>
              <span className='text-3xl mb-5 mt-2 bg-gray-200 flex items-center justify-center' style={{ color: '#2980b9', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['"Unlocking doors to endless opportunities."']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          
        </span>
             
                <div className=" flex  items-center justify-center gap-5 ml-3">
                <a
                  href="#_"
                  className="relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>
                
                <a
                  href="#_"
                  className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ------------------------------------------------ */}
        <SwiperSlide className="rounded-xl">
          <div className="w-full h-[700px] rounded-xl">
            <div className="relative w-[450px] lg:w-full">
              <img
                className="  h-[500px] md:h-[600px] lg:h-[900px] lg:w-full"
                src="https://i.ibb.co/rsRK8MV/austin-distel-rxp-Th-Owu-Vg-E-unsplash.jpg"
                alt=""
              />
            </div>

            <div
              className="absolute grid grid-cols-1 md:grid-cols-1    top-0   left-0 bg-opacity-85 opacity-75  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full
            p-5 rounded-2xl  "
            >
              <div className=" pl-5 py-20 lg:py-36 -mb-32 ">
                <h1 className="text-3xl lg:text-9xl  text-white font-bold">
                Crafting careers,
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                shaping destinies.
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                  
                </h1>
              </div>
              <span className='text-3xl mb-5 mt-2 bg-gray-200 flex items-center justify-center' style={{ color: '#2980b9', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['"Connecting talent to opportunity."']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
             
                <div className=" flex  items-center justify-center gap-5 ml-3">
                <a
                  href="#_"
                  className="relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>
                
                <a
                  href="#_"
                  className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* -------------------------------------------- */}
        <SwiperSlide className="rounded-xl">
          <div className="w-full h-[700px] rounded-xl">
            <div className="relative w-[450px] lg:w-full">
              <img
                className="  h-[500px] md:h-[600px] lg:h-[900px] lg:w-full"
                src="https://i.ibb.co/ScR64Gc/benjamin-child-GWe0dl-VD9e0-unsplash.jpgg"
                alt=""
              />
            </div>

            <div
              className="absolute grid grid-cols-1 md:grid-cols-1    top-0   left-0 bg-opacity-85 opacity-75  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full
            p-5 rounded-2xl  "
            >
              <div className=" pl-5 py-20 lg:py-36 -mb-32 ">
                <h1 className="text-3xl lg:text-9xl  text-white font-bold">
                Unleashing potential, 
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                securing futures.
                </h1>
                <h1 className="text-3xl lg:text-9xl text-white font-bold ">
                  
                </h1>
              </div>
              <span className='text-3xl mb-5 mt-2 bg-gray-200 flex items-center justify-center' style={{ color: '#2980b9', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['"Your career journey starts here."']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
             
                <div className=" flex  items-center justify-center gap-5 ml-3">
                <a
                  href="#_"
                  className="relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Discover More</span>
                </a>
                
                <a
                  href="#_"
                  className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Latest Project</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ----------------------------------------- */}
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
