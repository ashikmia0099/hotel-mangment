import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

import { Roboto } from "next/font/google";

// load only for this component
const roboto  = Roboto({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
  style: "normal",
  variable: "--font-roboto ",
});




export default function Guest_section() {
    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto px-[88px]  ">
                <h3 className=' text-xl font-bold text-[#252525] pb-4'>What Our Guests Say</h3>
                <div className=' flex items-start justify-between px-20'>
                    <div className='flex items-center gap-3'>
                        <span className=' h-[42px] w-[42px] bg-[#C8C8C81A] rounded-full flex items-center justify-center '>
                            <FaArrowLeft className=' text-[#D2D2D2]' />

                        </span>
                        <span className=' h-[42px] w-[42px] bg-[#007DD01A]  rounded-full flex items-center justify-center '>
                            <FaArrowRight className=' text-[#007DD0]' />
                        </span>
                    </div>
                    <div className='flex items-center gap-3 border-b-2 border-[#007DD0] pb-1'>
                        <span className=' 
                        text-lg font-[400] text-[#007DD0] '>
                            See All..

                        </span>
                        <span className=' flex items-center justify-center '>
                            <FaArrowRight className=' text-[#007DD0]' />
                        </span>
                    </div>
                </div>


                {/* card section */}

                <div className=' pt-4 px-2.5 flex gap-5'>
                    <div className=' w-[612px] h-[202px] border-[1px] border-[#DEDEDE] rounded-[12px] p-4'>
                        <h3 className=' text-lg font-semibold text-[#252525]'>“Breathtaking Views and Luxury Comfort!”</h3>
                        <p className='text-[#626262] text-[12px] font-[300] pt-2'>"The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!"</p>
                        <div className='pt-4 flex items-center gap-[3px]'>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                        </div>
                        <div className='pt-4 flex justify-between items-center'>
                            <div>
                                <h3 className={`text-[#252525] text-lg font-[400] ${roboto.variable}`}>— Sofia B., France</h3>
                            </div>
                            <div className=''>
                                <h3 className={`text-[#252525] text-[12px] font-[400] ${roboto.variable}`}>23.10. 2024</h3>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[612px] h-[202px] border-[1px] border-[#DEDEDE] rounded-[12px] p-4'>
                        <h3 className=' text-lg font-semibold text-[#252525]'>“Breathtaking Views and Luxury Comfort!”</h3>
                        <p className='text-[#626262] text-[12px] font-[300] pt-2'>"The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!"</p>
                        <div className='pt-4 flex items-center gap-[3px]'>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                            <span className=' text-[25px] text-[#FFC15E]'><IoStarSharp /></span>
                        </div>
                        <div className='pt-4 flex justify-between items-center'>
                            <div>
                                <h3 className={`text-[#252525] text-lg font-[400] ${roboto.variable}`}>— Sofia B., France</h3>
                            </div>
                            <div className=''>
                                <h3 className={`text-[#252525] text-[12px] font-[400] ${roboto.variable}`}>23.10. 2024</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
