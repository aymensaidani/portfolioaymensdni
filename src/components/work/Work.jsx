import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      {/* Heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Works
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* Subheading */}
      <div data-aos="fade-up" className="left flex-1 w-full mb-5">
        <p className="text-gray-700 font-medium w-full">
          Here are some of my works.
        </p>
      </div>

      {/* Work Cards */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-full mt-5">
        <div className="card-box flex flex-wrap justify-center gap-8">
          {/* Repeat WorkCard components */}
          <WorkCard />
          
          {/* Add additional WorkCard components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Work;
