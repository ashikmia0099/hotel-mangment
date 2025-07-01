import React from 'react'

import { IoBookmarkOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaShareAltSolid } from 'react-icons/lia';

import { Button } from "../../components/ui/button"
import { BsArrowRight } from 'react-icons/bs';



export default function Banner_Header_Text() {
    return (
        <div className='bg-white'>
            <div className="  max-w-7xl mx-auto bg-[#ffffff]  lg:px-[88px]">
                <div className='  pt-10 grid grid-cols-2 justify-between'>
                    {/* text section */}
                    <div>
                        <h4 className='font-medium text-[32px] text-[#252525]'>El Aurassi Hotel</h4>
                        <p className='text-[16px] font-[400] text-[#626262] w-[65%] leading-5'>Spacious, modern rooms with panoramic views of the Mediterranean Sea.</p>
                    </div>
                    {/* icons section */}
                    <div className=' gap-5 flex items-center justify-end'>
                        <div className=' flex items-center justify-center gap-1.5 bg-none shadow-none bg-[#E5F2FA] w-[70px] h-[70px] rounded-full'>
                            <span className=' text-[40px] text-[#007DD0]'><IoBookmarkOutline /></span>
                        </div>

                        <div className=' flex items-center justify-center gap-1.5 bg-none shadow-none bg-[#E5F2FA] w-[70px] h-[70px] rounded-full'>
                            <span className=' text-[40px] text-[#007DD0]'><LiaShareAltSolid /></span>
                        </div>

                        <Button className=' flex items-center justify-center gap-1.5 bg-none shadow-none bg-[#007DD0] hover:bg-[#007DD0] w-[163px] h-[46px] rounded-full'>
                            <span className=' text-[#ffffff] text-xl font-[400]'>Reserve</span>
                            <span className=' text-[32px] text-[#ffffff] pt-1'><BsArrowRight /></span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
