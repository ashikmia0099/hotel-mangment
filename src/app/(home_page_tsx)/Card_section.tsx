'use client'
import Image from 'next/image'

import image1 from '../../../public/home_images/banner_images/swiming.jpg'
import { IoStarSharp } from "react-icons/io5";
import { FaRegBuilding } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { LiaBathSolid } from 'react-icons/lia';
import { IoMdInformationCircleOutline } from 'react-icons/io';

import { Button } from "../../components/ui/button"

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';

import { Lens } from "../../components/magicui/lens";



export default function Card_section() {


  const [cards, setCards] = useState([])

  useEffect(() => {

    fetch('json_file/card_second.json')
      .then(res => res.json())
      .then(data => {
        setCards(data)
      })
  }, [])

  // console.log('cards data', cards)

  return (
    <div className='bg-white pt-[30px] pb-[30px]'>
      <div className="  max-w-7xl mx-auto lg:px-[88px] px-2.5 ">
        <h3 className=' text-xl font-bold text-[#252525] pb-4'>You may also like</h3>

        <div className=' space-y-10  gap-x-5 gap-y-10'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                grid: { rows: 1 },
              },
              640: {
                slidesPerView: 2,
                grid: { rows: 2 },
              },
              1024: {
                slidesPerView: 3,
                grid: { rows: 2 },
              },
            }}

            pagination={{
              clickable: true,
            }}
            modules={[]}
            className="mySwiper"
          >
            {
              cards.map((data, index) => (
                <SwiperSlide>
                  <div className=' '>
                    <div className=' relative'>
                      <div className=''>
                         <Lens
                          zoomFactor={2}
                          lensSize={150}
                          isStatic={false}
                          ariaLabel="Zoom Area"
                        >
                             <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                        </Lens>
                       
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                        <span>
                          <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                        </span>
                        <span className=' text-[14px] font-medium pt-1 text-white'>
                          {data.rating}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className='text-xl font-semibold text-[#252525] pt-4'>{data.title}</h3>
                      <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                        {data.description}
                      </p>
                      <p className=' pt-2'><span className='text-lg font-[400] text-black'>{data.price}</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                    </div>

                    <div className='grid grid-cols-3 pt-2'>
                      <span className='flex items-center gap-1.5'>
                        <span><FaRegBuilding className='text-[#626262]' /></span>
                        <span className='text-sm font-[400] text-[#252525]'>{data.bedroom} <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <span><LiaBathSolid className='text-[#626262]' /></span>
                        <span className='text-sm font-[400] text-[#252525]'> {data.bathroom}<small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <span><SlSizeFullscreen className='text-[#626262]' /></span>
                        <span className='text-sm font-[400] text-[#252525]'> {data.size} <small>sq <small>ft</small></small></span>
                      </span>
                    </div>

                    <div className=' pt-3 flex items-center justify-between'>
                      <div >
                        <Button className=' btn w-[245px] h-[46px] rounded-full bg-[#007DD0] hover:bg-[#007DD0] border-none shadow-none text-[20px] '>
                          Book Now
                        </Button>
                      </div>
                      <div>
                        <Button className=' flex items-center justify-center  h-[46px] w-[46px] rounded-full bg-[#007DD01A] hover:bg-[#007DD01A] border-none shadow-none  '>
                          <IoMdInformationCircleOutline className=' text-[#007DD0] text-2xl' />
                        </Button>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))
            }



          </Swiper>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                grid: { rows: 1 },
              },
              640: {
                slidesPerView: 2,
                grid: { rows: 2 },
              },
              1024: {
                slidesPerView: 3,
                grid: { rows: 2 },
              },
            }}

            pagination={{
              clickable: true,
            }}
            modules={[]}
            className="mySwiper"
          >
            {
              cards.map((data, index) => (
                <SwiperSlide>
                  <div className=' '>
                    <div className=' relative'>
                      <div className=''>
                        <Lens
                          zoomFactor={2}
                          lensSize={150}
                          isStatic={false}
                          ariaLabel="Zoom Area"
                        >
                             <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                        </Lens>
                       
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                        <span>
                          <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                        </span>
                        <span className=' text-[14px] font-medium pt-1 text-white'>
                          {data.rating}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className='text-xl font-semibold text-[#252525] pt-4'>{data.title}</h3>
                      <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                        {data.description}
                      </p>
                      <p className=' pt-2'><span className='text-lg font-[400] text-black'>{data.price}</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                    </div>

                    <div className='grid grid-cols-3 pt-2'>
                      <span className='flex items-center gap-1.5'>
                        <span><FaRegBuilding className='text-[#626262]' /></span>
                        <span className='text-sm font-[400] text-[#252525]'>{data.bedroom} <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <span><LiaBathSolid className='text-[#626262]' /></span>
                        <span className='text-sm font-[400] text-[#252525]'> {data.bathroom}<small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <span><SlSizeFullscreen className='text-[#626262]' /></span>
                        <span className='text-sm font-[400] text-[#252525]'> {data.size} <small>sq <small>ft</small></small></span>
                      </span>
                    </div>

                    <div className=' pt-3 flex items-center justify-between'>
                      <div >
                        <Button className=' btn w-[245px] h-[46px] rounded-full bg-[#007DD0] hover:bg-[#007DD0] border-none shadow-none text-[20px] '>
                          Book Now
                        </Button>
                      </div>
                      <div>
                        <Button className=' flex items-center justify-center  h-[46px] w-[46px] rounded-full bg-[#007DD01A] hover:bg-[#007DD01A] border-none shadow-none  '>
                          <IoMdInformationCircleOutline className=' text-[#007DD0] text-2xl' />
                        </Button>
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