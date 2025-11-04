import Image from 'next/image';
import React from 'react';

type Props = {
    image: string;
    eyebrow?: string;
    title: string;
    description: string;
    bullets?: string[];
    linkText?: string;
};

const ResearchCard = ({ eyebrow, title, description, bullets = [], linkText }: Props) => {
  return (
    <div className='h-full rounded-xl border border-teal-500/50 bg-white/2 hover:bg-teal-500/5 transition p-5'>
        {/* <Image 
            src={image} 
            alt={title} 
            width={80} 
            height={80} 
            className='object-contain mx-auto'
        /> */}
        <h1 className=' text-xs uppercase tracking-widest text-gray-400 text-muted'>
            {eyebrow}
        </h1>
        <h1 className='text-lg mt-2 mb-2 font-semibold text-gray-800'>
            {title}
        </h1>
        <p className='text-gray-600  font-medium text-md mb-2'>
            {description}
        </p>
        {bullets.length > 0 && (
        <ul className="list-disc list-inside mt-3 text-md text-gray-600 pl-1 mb-4">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
        <p className='text-center font-semibold text-teal-500 hover:text-blue-950 transition-all duration-200 cursor-pointer'>
            {/* Right arrow unicode */}
            {linkText} &#8594;
        </p>
    </div>
  );
};

export default ResearchCard;