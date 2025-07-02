'use client'

import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

import { Roboto } from "next/font/google";

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';



// load only for this component
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: "normal",
    variable: "--font-roboto ",
});






export default function Guest_section() {

    const prevRef = useRef<HTMLElement | null>(null);
    const nextRef = useRef<HTMLElement | null>(null);

    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch('json_file/card.json')
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })
    }, [])

    // console.log('card data', cards)



    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto px-2.5 lg:px-[88px]   ">
                <h3 className=' text-xl font-bold text-[#252525] pb-4'>What Our Guests Say</h3>
                <div className=' flex items-start justify-between px-0 lg:px-20'>
                    <div className='flex items-center gap-3'>
                        <span ref={prevRef} className=' h-[42px] w-[42px] bg-[#C8C8C81A] rounded-full flex items-center justify-center cursor-pointer '>
                            <FaArrowLeft className=' text-[#D2D2D2]' />

                        </span>
                        <span ref={nextRef} className=' h-[42px] w-[42px] bg-[#007DD01A]  rounded-full flex items-center justify-center cursor-pointer '>
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

                <div className=' pt-4 px-2.5  gap-5'>
                    <Swiper
                        slidesPerView={1.8}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

                        onInit={(swiper) => {
                            if (prevRef.current && nextRef.current) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }}

                        breakpoints={{
                            320: {
                                slidesPerView: 1,

                            },
                            640: {
                                slidesPerView: 1.5,

                            },
                            1024: {
                                slidesPerView: 1.5,

                            },
                        }}
                        modules={[ Navigation]}
                        className="mySwiper"
                    >

                        {
                            cards.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <div className=' w-full   h-full  border-[1px] border-[#DEDEDE] rounded-[12px] p-4'>
                                        <h3 className=' text-lg font-semibold text-[#252525]'>{data.title}</h3>
                                        <p className='text-[#626262] text-[12px] font-[300] pt-2'>{data.description}</p>
                                        <div className='pt-4 flex items-center gap-[3px]'>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} className={`text-[25px] ${i < data.stars ? 'text-[#FFC15E]' : 'text-gray-300'}`}>
                                                    <IoStarSharp />
                                                </span>
                                            ))}
                                        </div>

                                        <div className='pt-4 flex justify-between items-center'>
                                            <div>
                                                <h3 className={`text-[#252525] text-lg font-[400] ${roboto.variable}`}>{data.author}</h3>
                                            </div>
                                            <div className=''>
                                                <h3 className={`text-[#252525] text-[12px] font-[400] ${roboto.variable}`}>{data.date}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                </div>
            </div>
        </div>
    )
}
