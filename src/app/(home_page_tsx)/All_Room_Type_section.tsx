


import React from 'react'

import { CiCalendar } from 'react-icons/ci'
import { FaTv } from 'react-icons/fa';
import { IoBedOutline, IoWifi } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { PiBathtubThin } from 'react-icons/pi';
import { SlSizeFullscreen } from "react-icons/sl";
import { TbAirConditioning } from 'react-icons/tb';
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";



export default function All_Room_Type_section() {
    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto px-[88px]  ">



                <div className="bg-white ">
                    {/* Header Row */}
                    <div className="grid grid-cols-6 gap-4 font-semibold bg-[#007DD0] text-base-content p-4">
                        <div>Room type</div>
                        <div>Number of guests</div>
                        <div>Price for 1 week</div>
                        <div>Your choices</div>
                        <div>Select rooms</div>
                        <div>Your choices</div>

                    </div>

                    {/* Data Row */}
                    <div className="grid grid-cols-6 gap-4 items-center border-b-[1px] border-[#007DD05C] p-2.5 ">
                        <div className='border-r-[1px] border-[#007DD05C]'>
                            <h4 className='text-[12px] font-bold text-[#007DD0]'>Twin Room</h4>
                            <span className=' flex gap-x-2 pt-2.5'>
                                <span className='text-[12px] font-bold text-[#252525]'>2 <span className=' font-[400]'>single beds</span></span>
                                <span className=' flex items-center justify-center gap-1'>
                                    <span className='text-[#626262]'><IoBedOutline /></span>
                                    <span className='text-[#626262]'><IoBedOutline /></span>

                                </span>
                            </span>

                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <MdOutlineBathroom /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>Room</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <SlSizeFullscreen /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>1,200 <small>sq <small>ft</small></small></span>
                                </span>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <TbAirConditioning /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400] inlink'> Ac</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <PiBathtubThin /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>Bathroom</span>
                                </span>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <FaTv /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400] inlink'> TV</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <IoWifi /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>WIFI</span>
                                </span>
                            </div>
                        </div>
                        <div className='border-r-[1px] border-[#007DD05C] flex h-full'>
                            <span><GoPerson className=' text-2xl text-[#626262]' /></span>
                            <span><GoPerson className=' text-2xl text-[#626262]' /></span>
                        </div>
                        <div className="font-bold text-black text-lg border-r-[1px] border-[#007DD05C] h-full">$282</div>
                        <div className='border-r-[1px] border-[#007DD05C] h-full'>
                            <div className="text-[16px] font-[400] text-black">Breakfast included</div>
                            <div className="text-[#FE0D05] text-[16px] font-[400]">Only 4 rooms left</div>
                        </div>
                        <div className='border-r-[1px] border-[#007DD05C]  h-full'>
                            <button className=' border-[1px] rounded-full w-[60px] flex items-center px-3 justify-between'>
                                <span className=' text-[16px] text-[#626262] font-[400]'>
                                    0
                                </span>
                                <span className=' bg-[#ECECEC] rounded-full'>
                                    <IoIosArrowDown  className=' text-[#626262]' />
                                </span>
                            </button>
                        </div>
                        <div className=' h-full'>
                            <button className=' btn w-[176px] h-[34px] rounded-full bg-[#007DD0] border-none shadow-none text-[14px] '>
                                Reserve
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 items-center border-b-[1px] border-[#007DD05C] p-2.5 ">
                        <div className='border-r-[1px] border-[#007DD05C]'>
                            <h4 className='text-[12px] font-bold text-[#007DD0]'>Deluxe Double Room</h4>
                            <span className=' flex gap-x-2 pt-2.5'>
                                <span className='text-[12px] font-bold text-[#252525]'>2 <span className=' font-[400]'>single beds</span></span>
                                <span className=' flex items-center justify-center gap-1'>
                                    <span className='text-[#626262]'><IoBedOutline /></span>
                                    <span className='text-[#626262]'><IoBedOutline /></span>

                                </span>
                            </span>

                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <MdOutlineBathroom /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>Room</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <SlSizeFullscreen /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>1,200 <small>sq <small>ft</small></small></span>
                                </span>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <TbAirConditioning /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400] inlink'> Ac</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <PiBathtubThin /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>Bathroom</span>
                                </span>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <FaTv /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400] inlink'> TV</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <IoWifi /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>WIFI</span>
                                </span>
                            </div>
                        </div>
                        <div className='border-r-[1px] border-[#007DD05C] flex h-full'>
                            <span><GoPerson className=' text-2xl text-[#626262]' /></span>
                            <span><GoPerson className=' text-2xl text-[#626262]' /></span>
                        </div>
                        <div className="font-bold text-black text-lg border-r-[1px] border-[#007DD05C] h-full">$282</div>
                        <div className='border-r-[1px] border-[#007DD05C] h-full'>
                            <div className="text-[16px] font-[400] text-black">Breakfast included</div>
                            <div className="text-[#FE0D05] text-[16px] font-[400]">Only 4 rooms left</div>
                        </div>
                        <div className='  h-full'>
                            <button className=' border-[1px] rounded-full w-[60px] flex items-center px-3 justify-between'>
                                <span className=' text-[16px] text-[#626262] font-[400]'>
                                    0
                                </span>
                                <span className=' bg-[#ECECEC] rounded-full'>
                                    <IoIosArrowDown className=' text-[#626262]' />
                                </span>
                            </button>
                        </div>

                    </div>
                    <div className="grid grid-cols-6 gap-4 items-center border-b-[1px] border-[#007DD05C] p-2.5 ">
                        <div className='border-r-[1px] border-[#007DD05C]'>
                            <h4 className='text-[12px] font-bold text-[#007DD0]'>Deluxe Double Room</h4>
                            <span className=' flex gap-x-2 pt-2.5'>
                                <span className='text-[12px] font-bold text-[#252525]'>2 <span className=' font-[400]'>single beds</span></span>
                                <span className=' flex items-center justify-center gap-1'>
                                    <span className='text-[#626262]'><IoBedOutline /></span>
                                    <span className='text-[#626262]'><IoBedOutline /></span>

                                </span>
                            </span>

                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <MdOutlineBathroom /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>Room</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <SlSizeFullscreen /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>1,200 <small>sq <small>ft</small></small></span>
                                </span>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <TbAirConditioning /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400] inlink'> Ac</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <PiBathtubThin /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>Bathroom</span>
                                </span>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-between pt-2.5'>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <FaTv /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400] inlink'> TV</span>
                                </span>
                                <span className=' flex gap-2'>
                                    <span className=''> <span className=' text-[16px] text-[#626262]'> <IoWifi /></span>  </span>
                                    <span className=' text-[12px] text-[#252525] font-[400]'>WIFI</span>
                                </span>
                            </div>
                        </div>
                        <div className='border-r-[1px] border-[#007DD05C] flex h-full'>
                            <span><GoPerson className=' text-2xl text-[#626262]' /></span>
                            <span><GoPerson className=' text-2xl text-[#626262]' /></span>
                        </div>
                        <div className="font-bold text-black text-lg border-r-[1px] border-[#007DD05C] h-full">$282</div>
                        <div className='border-r-[1px] border-[#007DD05C] h-full'>
                            <div className="text-[16px] font-[400] text-black">Breakfast included</div>
                            <div className="text-[#FE0D05] text-[16px] font-[400]">Only 4 rooms left</div>
                        </div>
                        <div className=' h-full'>
                            <button className=' border-[1px] rounded-full w-[60px] flex items-center px-3 justify-between'>
                                <span className=' text-[16px] text-[#626262] font-[400]'>
                                    0
                                </span>
                                <span className=' bg-[#ECECEC] rounded-full'>
                                    <IoIosArrowDown  className=' text-[#626262]' />
                                </span>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
