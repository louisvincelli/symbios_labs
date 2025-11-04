import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='w-ful pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Text Content */}
                <div>
                    {/* Top Box */}
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                        <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-teal-500/80 md:text-base sm:text-sm text-xs text-white'>
                            News
                        </div>
                        <p className='text-xs sm:text-sm'>
                            We have updated our terms & condition policy
                        </p>
                    </div>
                    {/* Heading */}
                    <h1 className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-12 lg:leading-14'>
                        Exploring the shared evolution of living and artificial intelligence alike.
                    </h1>
                    {/* Description */}
                    <p className='text-gray-700 text-3xl md:text-2xl font-medium'>
                        Where living and artificial intelligence evolve in harmony.
                    </p>
                    {/* Playstore and app store image / button */}
                    <div className='flex mt-8 mb-8 items-center space-x-4'>
                        {/* <Image src="/images/gp.png" alt="Play store" width={150} height={150} className='object-contain' />
                        <Image src="/images/as.png" alt="App store" width={150} height={150} className='object-contain' /> */}
                        <Link href="/research" className="rounded-lg bg-teal-500/50 px-4 py-2">
                            Explore Research
                        </Link>
                        <Link href="/publications" className="rounded-lg border border-teal-500/80 px-4 py-2">
                            View Publications
                        </Link>
                    </div>
                </div>
                {/* Image Content */}
                <div className='hidden lg:block'>
                    <Image src="/images/hero.jpg" alt="hero" width={1000} height={1000} className='rounded-2xl'/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;