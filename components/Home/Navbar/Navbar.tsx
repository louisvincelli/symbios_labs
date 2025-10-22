'use client';
import { navLinks } from '@/constant/Constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3, HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav:()=>void
}

//put navLinks in constant folder and file since it is constant data.
// const navLinks = [
//     {
//         id: 1,
//         url: "#",
//         label: "Home"
//     },
//     {
//         id: 2,
//         url: "#",
//         label: "About"
//     },
//     {
//         id: 3,
//         url: "#",
//         label: "Feature"
//     },
//     {
//         id: 4,
//         url: "#",
//         label: "Testimonial"
//     },
//     {
//         id: 5,
//         url: "#",
//         label: "Blog"
//     },
//     {
//         id: 6,
//         url: "#",
//         label: "Contact Us"
//     },
// ]

//created nav__link style in global.css
const Navbar = ({openNav}:Props) => {

    const [navBg,setNavBg]=useState(false);

    useEffect(()=>{
        const handler = ()=>{
            if(window.scrollY>=90) setNavBg(true)
            if(window.scrollY<90) setNavBg(false);
        };

        window.addEventListener('scroll', handler);

        return ()=>{
            window.removeEventListener('scroll', handler);
        };
    },[]);


  return (
    <div className={` fixed ${navBg ? "bg-white shadow-md" : "fixed" }
                    w-full transition-all duration-200 h-[12vh] z-1000`}
    >
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* LOGO */}
            <h1 className='text-xl md:text-2xl font-bold'>
                <span className='text-3xl md:text-4xl text-sky-500'>Sym</span>bios
            </h1>
            {/* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link)=>{
                    return <Link href={link.url} key={link.id}>
                        <p className='nav__link'>{link.label}</p>
                    </Link>
                })}
            </div>
            {/* Buttons */}
            <div className='flex items-center space-x-4'>
                <button className='md:ps-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-sky-700
                 hover:bg-sky-300 transition-all duration-200 rounded-full'
                >
                    Join Now
                </button>
                {/* Burger Menu */}
                <HiBars3 onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Navbar