import React from 'react';
import tbi from './tbi.png';
import tbiii from './tbiii.jpg';


const About = () => {
  return (
    <>
    <div className='mt-6 flex flex-row justify-evenly'>
        <div className='text-2xl w-3/6 flex flex-col items-center justify-center text-center'> 
            <img className='w-15 h-15 mb-3' src={tbi} alt="tbiiiii" />
            <h2 className='font-bold'>Technology Business Incubator - GEU</h2>
        </div>
        <div className='my-10 mx-1 w-1/2 text-lg items-center place-content-center pr-3' >
            <p className='m-4 justify-center'>
                Technology Business Incubator-GEU was established in 2015 by the government of India's Department of Science and Technology. In 2018, it became the first incubator to be recognized within the state of Uttarakhand.
            </p>
            <p className='m-4 justify-center'>
                The mission of the TBI-GEU is to support and encourage entrepreneurship and innovation in the state of Uttarakhand. It provides the necessary support to help budding entrepreneurs scale up their ventures.
            </p>
            <p className='m-4 justify-center'>
                The goal of the TBI-GEU is to build and share resources with other like-minded individuals, so they can support start-ups and SMEs. The scope of support includes office space, infrastructure, and training programs
            </p>
        </div>
    </div>
    <img className='mt-5 mb-9' src={tbiii} alt="tbiii" />
    <div class="border-t border-gray-300"></div>

    </>
  );
}

export default About;
