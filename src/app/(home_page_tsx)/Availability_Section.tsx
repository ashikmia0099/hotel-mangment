
import React from 'react'

import { CiCalendar } from 'react-icons/ci'
import { Button } from "../../components/ui/button"


export default function Availability_Section() {
    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto lg:px-[88px] px-2.5 ">
                <h1 className=' text-xl font-bold text-black pb-3'>Availability</h1>
                <div className='w-full lg:w-[847px] h-full md:h-[95px] border-[1px] border-[#A3D0EE] rounded-[16px] px-2.5 md:px-5 py-4'>
                    <div className='grid grid-cols-2 md:flex gap-2'>
                        <div>
                            <p className='text-sm font-medium text-[#626262]'> Check-In</p>
                            <Button className=' btn w-[140px] lg:w-[195px] h-7 lg:h-[38px] bg-[#F6F6F6] hover:bg-[#F6F6F6] rounded-full border-none shadow-none gap-x-2 mt-2.5'>
                                <span className=' h-4 w-4 lg:h-[23px] lg:w-[23px] rounded-full bg-[#007DD0] flex items-center justify-center text-lg'>
                                    <CiCalendar />
                                </span>
                                <span className=' text-[10px] md:text-[12px] lg:text-sm text-[#252525] font-medium'>
                                    Tue,23 June 2024
                                </span>
                            </Button>
                        </div>
                        <div>
                            <p className='text-sm font-medium text-[#626262]'>Check-Out</p>
                            <Button className=' btn w-[140px] lg:w-[195px] h-7 lg:h-[38px] bg-[#F6F6F6] hover:bg-[#F6F6F6] rounded-full border-none shadow-none gap-x-2 mt-2.5'>
                                <span className=' h-4 w-4 lg:h-[23px] lg:w-[23px] rounded-full bg-[#007DD0] flex items-center justify-center text-lg'>
                                    <CiCalendar />
                                </span>
                                <span className=' text-[10px] md:text-[12px] lg:text-sm text-[#252525] font-medium'>
                                    Tue,23 June 2024
                                </span>
                            </Button>
                        </div>
                        <div>
                            <p className='text-sm font-medium text-[#626262]'> Room & Guest</p>
                            <Button className=' btn w-[140px] lg:w-[195px] h-7 lg:h-[38px] bg-[#F6F6F6] hover:bg-[#F6F6F6] rounded-full border-none shadow-none gap-x-2 mt-2.5'>
                                <span className=' h-4 w-4 lg:h-[23px] lg:w-[23px] rounded-full bg-[#007DD0] flex items-center justify-center text-lg'>
                                    <CiCalendar />
                                </span>
                                <span className=' text-[10px] md:text-[12px] lg:text-sm text-[#252525] font-medium'>
                                    Tue,23 June 2024
                                </span>
                            </Button>
                        </div>
                        <div>
                            <Button className=' btn w-[115px] h-7 lg:h-[34px] rounded-full bg-[#007DD0] hover:bg-[#007DD0] border-none shadow-none mt-7 lg:mt-8 text-[10px] lg:text-[14px] ml-3 lg:ml-10'>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
