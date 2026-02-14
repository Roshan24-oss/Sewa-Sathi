import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <div className='w-full min-h-screen mt-25 p-5'>
      <h1 className='text-xl font-bold text-blue-500 text-center'>Get In Touch with Us - हामीसँग सम्पर्क गर्नुहोस्</h1>
      <div className='mt-5 space-x-5 flex justify-center'> 
        <FaFacebook  className='text-blue-600 size-10' />
       <GrInstagram className='text-pink-500 size-10' />
       <FaWhatsapp className='text-green-500 size-10' />
      </div>

      <div>
        <h2 className='text-lg font-bold mt-10 text-blue-400 text-center'>Email - इमेल</h2>
<span className='block text-center text-gray-600'>sewasathi@gmail.com / sewasathi-suport@gmail.com</span>

<h3 className='mt-5 text-blue-400 font-bold text-xl text-center'>Contact Numbers</h3>
<span className='block text-center text-gray-600'>+977 9800000000 / +977 9800000001 / 0945452-25</span>

<h4 className='mt-5 text-blue-400 font-bold text-xl text-center'>Address - ठेगाना</h4>
<span className='block text-center text-gray-600'>Lainchaur-26,Kathmandu, Nepal</span>
      </div>

    </div>
  )
}

export default ContactUs
