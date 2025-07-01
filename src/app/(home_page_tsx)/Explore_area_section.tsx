
import React from 'react'
import { CiShop } from "react-icons/ci";
import { BiSolidBowlHot } from "react-icons/bi";
import { TbBeach } from 'react-icons/tb';
import { BsTrainFront } from "react-icons/bs";

import map from '../../../public/home_images/map.png'
import Image from 'next/image';


export default function Explore_area_section() {
    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto px-[88px]  ">
                <h3 className=' text-xl font-bold text-[#252525] pb-4'>Explore the Area</h3>

                <div className=' grid grid-cols-2 gap-14'>
                    {/* text section */}
                    <div className=' col-span-1 grid grid-cols-2 gap-x-14'>
                        {/* left section */}
                        <div>
                            <h3 className=' flex gap-x-2 items-center pb-3'>
                                <span className=' text-[16px] text-[#7D7D7D]'><BiSolidBowlHot /></span>
                                <span className=' text-[16px] text-[#252525] font-[400]'>Restaurants & cafes</span>

                            </h3>
                            <div>
                            </div>
                            <div className=' '>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Blue Cafe</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Blue Cafe</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Blue Cafe</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className=' flex gap-x-2 items-center justify-start pb-3 '>
                                <span className=' text-[16px] text-[#7D7D7D]'><CiShop /></span>
                                <span className=' text-[16px] text-[#252525] font-[400]'>Shops & Markets</span>

                            </h3>
                            <div>
                            </div>
                            <div className=' '>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Central Mall</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Central Mall</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Central Mall</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=' pt-5'>
                            <h3 className=' flex gap-x-2 items-center pb-3'>
                                <span className=' text-[16px] text-[#7D7D7D]'><TbBeach /></span>
                                <span className=' text-[16px] text-[#252525] font-[400]'>Beaches</span>

                            </h3>
                            <div>
                            </div>
                            <div className=' '>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Les Dunes Beach</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Les Dunes Beach</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Les Dunes Beach</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div  className=' pt-5'>
                            <h3 className=' flex gap-x-2 items-center pb-3'>
                                <span className=' text-[16px] text-[#7D7D7D]'><BsTrainFront /></span>
                                <span className=' text-[16px] text-[#252525] font-[400]'>Public transport</span>

                            </h3>
                            <div>
                            </div>
                            <div className=' '>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Train - Riverdale Central Station</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Metro - Cityline Metro Hub</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>Metro - Cityline Metro Hub</span>
                                    </span>
                                    <span>
                                        <span className=' text-[12px] text-[#757575] font-[400]'>1.4 km</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* right section */}
                        <div></div>
                    </div>

                    {/* map section */}
                    <div className=' col-span-1'>
                        <div className=' h-[287px] '>
                            <div className=''>
                                <Image src={map} alt='map png ' className=' h-[200px] w-full object-cover rounded-t-[12px]'></Image>
                            </div>
                            <div className=' bg-white h-[90px] content-center rounded-b-[12px] shadow-lg shadow-[#e7e7e7]'>
                                <p className=' text-lg font-[400] text-[#007DD0] text-center'>Explore the Area</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
