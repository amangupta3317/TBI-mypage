import React from 'react';
import geu from './geu1.jpg';

const Carousel = () => {
  return (
    <div className="relative">
      <img className='h-full w-full object-cover' src={geu} alt="geu" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className='font-bold text-4xl text-center mb-4 text-red-400'>TBI - Technology Business Incubator</h1>
        <p className="text-lg text-center ">A technology business incubator (TBI) is an organisational setup that nurtures technology-based and knowledge-driven companies by helping them survive during the startup period in the company’s history, which lasts around the initial two to three years.</p>
      </div>
    </div>
  );
}

export default Carousel;
