


import Image from 'next/image'
import React from 'react'

import logo from '../../../public/home_images/footer_logo.png'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { PiMapPinAreaFill, PiMapPinAreaThin } from 'react-icons/pi'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { RiGooglePlayLine } from "react-icons/ri";
import { AiOutlineApple } from 'react-icons/ai'

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // your desired weights
  style: ["normal", "italic"], // ✅ include italic
  variable: "--font-poppins",
});



export default function Footer() {
    return (
        <div className='bg-[#00548C] pt-[30px]'>
            <div className="  max-w-7xl mx-auto px-[120px]  ">
                <div className=' grid grid-cols-9  py-[60px]'>
                    {/* left section */}
                    <div className=' col-span-4'>
                        <Image src={logo} alt='logo' className=' w-[90px] h-[30px]' />
                        <p className=' text-[13px] leading[17px] font-[400] pt-3'>
                            [App Name] makes booking your next stay easy, affordable, and stress-free. With thousands of hotels worldwide, exclusive deals, and secure payment options, we’re here to help you find the perfect place to stay, every time.
                        </p>
                        <div className=' flex items-center gap-8 pt-8'>
                            <span className='text-xl text-white'><FaTwitter /></span>
                            <span className='text-xl text-white'><FaFacebookF /></span>
                            <span className='text-xl text-white'><FaInstagram /></span>
                            <span className='text-xl text-white'><FaGithub /></span>
                        </div>
                        <div className=' flex items-center gap-x-2 pt-8'>
                            <span className='text-3xl text-white'> <PiMapPinAreaFill /></span>
                           <span className={`${poppins.variable} font-poppins text-sm font-[400] text-white`}> 123 Travel St, Suite 100, City, Country</span>
                        </div>
                    </div>
                    {/* center section */}
                    <div className=' col-span-1 flex items-center justify-center'>
                        <p className='h-[110px] border-l-2 border-[#C8C8C8]'></p>
                    </div>
                    {/* right section */}

                    <div className=' col-span-4'>
                        <div className=' flex gap-x-[78px]'>
                            <div className=' space-y-3'>
                                <p className=' text-[16px] font-medium text-white'>Home</p>
                                <p className=' text-[16px] font-medium text-white'>Hotels</p>
                                <p className=' text-[16px] font-medium text-white'>Deals</p>
                                <p className=' text-[16px] font-medium text-white'>About Us</p>
                                <p className=' text-[16px] font-medium text-white'>Contact Us</p>
                            </div>
                            <div>
                                <div className='flex items-center gap-x-2'>
                                    <span><FiPhone className='text-2xl text-white' /></span>
                                    <span className={`text-sm font-[400] text-white ${poppins.variable} font-poppins`}>+1 (555) 123-4567</span>
                                </div>
                                <div className='flex items-center gap-x-2 pt-3'>
                                    <span><MdOutlineEmail className='text-2xl text-white' /></span>
                                    <span className={`text-sm font-[400] text-white ${poppins.variable} font-poppins`}>support@[yourappname].com</span>
                                </div>
                                <div className='flex items-center gap-x-2 pt-6'>
                                     <span className='text-xl font-[400] text-white'>Download Our App</span>
                                    <span><RiGooglePlayLine className='text-[34px] text-white' /></span>
                                    <span><AiOutlineApple className='text-[34px] text-white' /></span>
                                   
                                </div>
                                <div className=' '>
                                    <p className=' text-sm font-[400] text-right pt-16'>© 2023, All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

