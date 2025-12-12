import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Philosophy = () => {
  return (
    <div className='pt-24 pb-16'>
        {/* Define grid */}
        <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* Image Content */}
            <div>
                <Image src='/images/philosophy.png' alt='philosophy' width={500} height={500} className='object-contain rounded-2xl'/>
            </div>
            {/* Text Content */}
            <div className='p-6'>
                <h1 className='text-2xl font-semibold text-orange-500'>Philosophy</h1>
                <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>Symbios Labs studies the interdependence between human cognition and artificial systems &#8212; Advancing empathy, ethics, and intelligence through co-evolution.</h1>
                <h1 className='mt-4 text-md sm:text-xl md:text-xl font-bold text-gray-700'>Evolving together &#8226; The science of shared intelligence &#8226; Where humanity and AI grow in harmony</h1>
                <p className='mt-4 text-gray-600 text-sm sm:text-base md:text-lg'>At Symbios Labs, we believe in the power of co-evolution. Our research explores how human cognition and artificial systems can enhance each other, leading to a future where empathy, ethics, and intelligence thrive together.</p>
                <p className='mt-4 text-gray-600 text-sm sm:text-base md:text-lg'>Join us in our mission to create a world where living and artificial intelligence evolve in harmony, shaping a future that benefits all.</p>
                <button className='mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-teal-500 transition all duration-200 hover:text-white'>Explore our Philosophy &rarr;</button>
            </div>
        </div>
    </div>
  );
};

export default Philosophy;