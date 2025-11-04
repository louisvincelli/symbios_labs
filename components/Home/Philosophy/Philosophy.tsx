import Image from 'next/image';
import React from 'react';

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
                <h1 className='text-base font-semibold text-orange-500'>Philosophy</h1>
                <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>Symbios Labs studies the interdependence between human cognition and artificial systems &#8212; Advancing empathy, ethics, and intelligence through co-evolution.</h1>
                <h1 className='mt-4 text-md sm:text-xl md:text-xl font-bold text-gray-700'>Evolving together. &#8226; The science of shared intelligence. &#8226; Where humanity and AI grow in harmony.</h1>
            </div>
        </div>
    </div>
  );
};

export default Philosophy;