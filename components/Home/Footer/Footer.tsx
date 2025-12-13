import Link from 'next/link';
import React from 'react';
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

//import it in layout folder after children instead of in Home component
const Footer = () => {
  return (
    <div className='bg-white py-10'>
        <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {/* Logo and Description, copy logo from Navbar */}
                <div>
                    {/* Logo */}
                    <h1 className='text-xl md:text-2xl font-bold'>
                        <span className='text-3xl md:text-4xl text-teal-500/80'>Sym</span>bios
                    </h1>
                    {/* Description */}
                    <p className='mt-4 text-sm font-medium leading-8 w-[80%] text-gray-600'>
                        Symbios Labs is a leading research and development company focused on advancing technology.
                    </p>
                </div>
                {/* About Us Links */}
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'>About Us</h3>
                    <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                        <li>About Us</li>
                        <li>Publications</li>
                        <li>Research</li>
                        <li>Copyright</li>
                        <li>Support Center</li>
                    </ul>
                </div>
                {/* Our Information Links */}
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'>Our Information</h3>
                    <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Site Map</li>
                        <li>Availability</li>
                    </ul>
                </div>
                {/* Contact Info Links */}
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'>Contact Us</h3>
                    <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                        <li className='flex items-center'>
                            <FaMapMarkedAlt className='mr-2' />
                            Holly Springs, North Carolina
                        </li>
                        <li className='flex items-center'>
                            <FaPhoneAlt className='mr-2' />
                            +1 (123) 456-7890
                        </li>
                        {/* <li className='flex items-center'>
                            <FaClock className='mr-2' />
                            24/7 Support
                        </li> */}
                        <li className='flex items-center'>
                            <FaEnvelope className='mr-2' />
                            info.example@symbios.com
                        </li>
                    </ul>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text0sm'>
                <p className='text-center md:text-left'>&copy; 2026 Symbios Labs. All rights reserved.</p>
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                    <span>Socials : </span>
                    <Link href={"#"} className='hover:text-teal-500/80'>
                        <FaFacebook />
                    </Link>
                    <Link href={"#"} className='hover:text-teal-500/80'>
                        <FaTwitter />
                    </Link>
                    <Link href={"#"} className='hover:text-teal-500/80'>
                        <FaLinkedin />
                    </Link>
                    <Link href={"#"} className='hover:text-teal-500/80'>
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;