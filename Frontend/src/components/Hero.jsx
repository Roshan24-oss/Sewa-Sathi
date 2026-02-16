import React from "react";
import {useNavigate} from "react-router-dom";
import electrician from "../assets/electricity.jpg";
import plumber from "../assets/plumber.jpg";
import car from "../assets/car.jpg";
import nurse from "../assets/nurse.avif";
import teacher from "../assets/teacher.avif";
import carpenter from "../assets/carpenter.jpg";
import cleaner from "../assets/cleaner.webp";
import technician from "../assets/tv.jpeg"

const services = [
  { img: plumber, title: "Plumber" },
  { img: electrician, title: "Electrician" },
  { img: nurse, title: "Nurse" },
  { img: teacher, title: "Teacher" },
  { img: car, title: "Car Repair" },
  { img: technician, title: "Technician" },
  { img: carpenter, title: "Carpenter" },
  { img: cleaner, title: "Cleaner" },
];

const Hero = ({ className }) => {

  const navigate =useNavigate();

  return (
    <div className={`w-full min-h-screen p-5 ${className}`}>
    <h1 className="text-3xl md:text-4xl font-extrabold mb-12 mt-20 text-center
               bg-gradient-to-r from-indigo-600 via-purple-900 to-pink-500
               bg-clip-text text-transparent">
  Our Services
</h1>



      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
       <div
  key={index}
  className="relative bg-white rounded-lg shadow-md overflow-hidden
             h-48 sm:h-56 md:h-64 lg:h-72 group cursor-pointer"
>
  <img
    src={service.img}
    alt={service.title}
    className="w-full h-full object-cover
               transition-transform duration-500
               group-hover:scale-110"
  />

  
  <div className="absolute inset-0 bg-black/0 transition duration-500
                  group-hover:bg-black/20"></div>

  
  <div className="font-bold absolute bottom-0 w-full bg-black/60
                  text-white text-center py-2">
    {service.title}  <span className="text-sm text-gray-300 block mt-1">
      <button className="bg-red-600 rounded p-1 hover:bg-orange-600 " onClick={()=>navigate("/signin")}>Book Now</button></span>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Hero;
