import React from 'react';
import geu from './geu1.jpg';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="relative">
      <img className='h-full w-full object-cover' src={geu} alt="geu" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className='font-bold text-5xl text-center mb-4 text-red-500'>TBI - Technology Business Incubator</h1>
        <p className="mx-10 text-lg text-center ">A technology business incubator (TBI) is an organisational setup that nurtures technology-based and knowledge-driven companies by helping them survive during the startup period in the company’s history, which lasts around the initial two to three years.</p>
        <Link to="/contact"> 
        <button className="my-3 bg-red-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">
              Enroll Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
