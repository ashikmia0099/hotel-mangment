import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { BiHomeCircle } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import { FaPersonSwimming } from 'react-icons/fa6'
import { FiMessageCircle } from 'react-icons/fi'
import { IoWifiSharp } from 'react-icons/io5'
import { MdLocalDining } from 'react-icons/md'
import { TbAirConditioning } from 'react-icons/tb'

import { Button } from "../../components/ui/button"

import { Urbanist } from "next/font/google";

// load only for this component
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-urbanist",
});



export default function Room_about() {
    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto lg:px-[88px] ">
                <div className='  justify-between rounded-[14px] space-y-1'>
                    <div className=' flex gap-3 md:gap-8 items-center justify-center md:justify-start px-0 md:px-2.5 lg:px-0'>
                        <span className='text-[12px] md:text-[16px] font-[400] text-[#626262]'>Over View</span>
                        <span className='text-[12px] md:text-[16px] font-[400] text-[#626262]'>Features</span>
                        <span className='text-[12px] md:text-[16px] font-[400] text-[#626262]'>Reviews</span>
                        
                        <Button className=' flex items-center justify-center gap-1.5 bg-none shadow-none bg-[#007DD0] hover:bg-[#007DD0] 
                        w-[100px] md:w-[110px] h-6 md:h-[32px] rounded-full'>

                            <span className='text-lg md:text-2xl text-[#ffffff] '><FiMessageCircle /></span>
                            <span className='text-[12px] text-[#ffffff] md:text-[14px] font-[400]'>Message</span>
                        </Button>
                    </div>
                </div>
                <div className=' grid md:grid-cols-5 px-2.5 md:px-2.5 lg:px-0'>
                    {/* left section */}
                    <div className=' md:col-span-3'>
                        {/* proparty type */}
                        <div className=' flex gap-5 col-span-3 justify-between md:justify-start '>
                            {/* proparty type */}
                            <div className=' pt-[26px]'>
                                <div>
                                    <h4 className={` text-lg font-[600] text-[#252525] ${urbanist.variable}`}> Property Type </h4>
                                    <div className='flex items-center  gap-x-2 pt-4'>
                                        <div>
                                            <Button className='h-9 w-9 border-[1px] border-[#EDEDF2] bg-white hover:bg-white rounded-lg  flex items-center justify-center bg-none'>
                                                <AiTwotoneHome className='text-sm text-[#292D32]' />
                                            </Button>
                                        </div>
                                        <div>
                                            <p className={`text-[#010101] text-[16px] font-[400] ${urbanist.variable} `}>Resorts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' pt-[26px]'>
                                <div>
                                    <h4 className={`text-lg font-[600] text-[#252525] ${urbanist.variable}`}> Property Area </h4>
                                    <div className='flex items-center justify-center gap-2 pt-4'>
                                        <div>
                                            <Button className='h-9 w-9 border-[1px] border-[#EDEDF2] bg-white hover:bg-white  rounded-lg flex items-center justify-center'>
                                                <BiHomeCircle className='text-sm text-[#292D32]' />
                                            </Button>
                                        </div>
                                        <div>
                                            <p className={`text-[#010101] text-[16px] font-[400] ${urbanist.variable}`}>12000 sqft </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className=' pt-5'>
                            <div>
                                <h4 className={`text-lg font-semibold text-[#252525] ${urbanist.variable}`}>Features</h4>
                            </div>
                            <div className=' flex gap-x-5'>

                                <div className='flex items-center  gap-x-2 pt-4'>
                                    <div>
                                        <Button className='h-9 w-9 border-[1px] border-[#EDEDF2] bg-white hover:bg-white  rounded-lg flex items-center justify-center'>
                                            <IoWifiSharp className='text-sm text-[#8B939F]' />
                                        </Button>
                                    </div>
                                    <div>
                                        <p className={`text-[#010101] text-[16px] font-[400] ${urbanist.variable}`}>Wifi</p>
                                    </div>
                                </div>

                                <div className='flex items-center r gap-x-2 pt-4'>
                                    <div>
                                        <Button className='h-9 w-9 border-[1px] border-[#EDEDF2] bg-white hover:bg-white  rounded-lg flex items-center justify-center'>
                                            <MdLocalDining className='text-sm text-[#8B939F]' />
                                        </Button>
                                    </div>
                                    <div>
                                        <p className={`text-[#010101] text-[16px] font-[400] ${urbanist.variable}`}>Dining</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-x-2 pt-4'>
                                    <div>
                                        <Button className='h-9 w-9 border-[1px] border-[#EDEDF2] bg-white hover:bg-white  rounded-lg flex items-center justify-center'>
                                            <FaPersonSwimming className='text-sm text-[#8B939F]' />
                                        </Button>
                                    </div>
                                    <div>
                                        <p className={`text-[#010101] text-[16px] font-[400] ${urbanist.variable}`}>Swimming Pool</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' flex gap-x-5 pt-2'>
                                <div className='flex items-center gap-x-2 '>
                                    <div>
                                        <Button className='h-9 w-9 border-[1px] border-[#EDEDF2] bg-white hover:bg-white  rounded-lg flex items-center justify-center'>
                                            <TbAirConditioning className='text-sm text-[#8B939F]' />
                                        </Button>
                                    </div>
                                    <div>
                                        <p className={`text-[#010101] text-[16px] font-[400] ${urbanist.variable}`}>Air Conditioning</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <div>
                                        <Button className='h-9 w-9 border-[1px] border-[#EDEDF2] bg-white hover:bg-white  rounded-lg flex items-center justify-center'>
                                            <CgGym className='text-sm text-[#8B939F]' />
                                        </Button>
                                    </div>
                                    <div>
                                        <p className={`text-[#010101] text-[16px] font-[400] ${urbanist.variable}`}>Gym</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' md:col-span-2 pt-2.5 md:px-0 lg:pt-0 mx-auto '>
                        <div className=' flex items-center justify-center '>
                            <div className=' h-[240px] w-[268px] border-[1px] border-[#A3D0EE] rounded-[12px] flex items-center justify-center mx-auto'>
                                <div>
                                    <p className='text-[16px] font-[400] text-[#000000]'>1 week, 2 adults, 1 child</p>
                                    <h3 className=' text-xl font-bold text-black'>USD $6,112</h3>
                                    <Button className=' btn w-[206px] h-[34px] text-sm font-[400] rounded-full bg-[#007DD0] hover:bg-[#007DD0] border-none shadow-none mt-5'>
                                        Reserve
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
