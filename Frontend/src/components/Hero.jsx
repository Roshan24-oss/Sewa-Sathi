import React from "react";
import electrician from "../assets/electricity.jpg";
import plumber from "../assets/plumber.jpg";
import car from "../assets/car.jpg";
import nurse from "../assets/nurse.avif";
import teacher from "../assets/teacher.avif"
import carpenter from "../assets/carpenter.jpg";
import cleaner from "../assets/cleaner.webp"


const Hero = ({ className }) => {
  return (
    <div className={`w-full ${className} min-h-screen p-5 flex flex-col  `}>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-20 text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={plumber} alt="Plumber" className="h-full w-full" />
        </div>
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={electrician} alt="Electrician" />
        </div>
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={nurse} alt="Nurse" className="h-full w-full" />
        </div>
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={teacher} alt="Teacher" className="h-full w-full" />
        </div>
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={car} alt="Car" className="h-full w-full" />
        </div>
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={plumber} alt="Plumber" className="h-full w-full" />
        </div>
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={carpenter} alt="Carpenter" className="h-full w-full" />
        </div>
        <div className="h-40 w-full md:h-80 md:w-80 flex items-center justify-center bg-white">
          <img src={cleaner} alt="Cleaner" className="h-full w-full" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
