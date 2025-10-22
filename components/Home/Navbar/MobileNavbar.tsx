import { navLinks } from '@/constant/Constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav:boolean;
    closeNav:()=>void;
};

const MobileNavbar = ({ closeNav, showNav }:Props) => {

    //const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';
    //const navOpen = showNav ? 'translateX(-16rem)' : 'translateX(16rem)';

  return (
    <div>
        {/* Overlay */}
        {/* <div className={`fixed ${navOpen} inset-0 transform transition-all duration-0 z-10000 bg-black opacity-70 w-full h-screen`}> */}
        <div className={`fixed ${showNav ? 'opacity-70' : 'opacity-0 pointer-events-none'} inset-0 transition-all duration-500 z-1000 bg-black w-full h-screen`}>
        </div>
        {/* Navlinks */}
        <div className={`text-white ${navOpen} fixed top-0 right-0 justify-center flex flex-col h-full 
                        transform transition-all duration-400 ease-in-out delay-100 w-[80%] 
                        sm:w-[60%] bg-cyan-700 space-y-6 z-1006`}
        >
            {/* <div className='lg:flex items-center space-x-10'> */}
                {navLinks.map((link)=>{
                    return <Link href={link.url} key={link.id}>
                        <p className='nav__link text-white text-[20px] ml-12
                        {/*border-b-[1.5px] pb-1 border-white*/} 
                          sm:text-[30px]
                         '>
                            {link.label}
                        </p>
                    </Link>
                })}
            {/* </div> */}
            {/* Close icon */}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
        </div>
    </div>
  );
};

export default MobileNavbar;