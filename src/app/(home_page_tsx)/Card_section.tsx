
import Image from 'next/image'
import React from 'react'

import image1 from '../../../public/home_images/banner_images/swiming.jpg'
import { IoStarSharp } from "react-icons/io5";
import { FaRegBuilding } from 'react-icons/fa';
import { SlSizeFullscreen } from 'react-icons/sl';
import { LiaBathSolid } from 'react-icons/lia';
import { IoMdInformationCircleOutline } from 'react-icons/io';

import { Button } from "../../components/ui/button"



export default function Card_section() {
    return (
        <div className='bg-white pt-[30px] pb-[30px]'>
            <div className="  max-w-7xl mx-auto px-[88px]  ">
                <h3 className=' text-xl font-bold text-[#252525] pb-4'>You may also like</h3>

                <div className=' grid grid-cols-3 gap-x-5 gap-y-10'>
                    <div className=' '>
                        <div className=' relative'>
                            <div className=''>
                                <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                                <span>
                                    <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                                </span>
                                <span className=' text-[14px] font-medium pt-1 text-white'>
                                    4.5
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-[#252525] pt-4'>Sofitel Algiers Hamma Garden</h3>
                            <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                                Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
                            </p>
                            <p className=' pt-2'><span className='text-lg font-[400] text-black'>699</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                        </div>

                        <div className='grid grid-cols-3 pt-2'>
                            <span className='flex items-center gap-1.5'>
                                <span><FaRegBuilding className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><LiaBathSolid className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><SlSizeFullscreen className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 1,200 <small>sq <small>ft</small></small></span>
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
                    <div className=' '>
                        <div className=' relative'>
                            <div className=''>
                                <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                                <span>
                                    <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                                </span>
                                <span className=' text-[14px] font-medium pt-1 text-white'>
                                    4.5
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-[#252525] pt-4'>Sofitel Algiers Hamma Garden</h3>
                            <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                                Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
                            </p>
                            <p className=' pt-2'><span className='text-lg font-[400] text-black'>699</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                        </div>

                        <div className='grid grid-cols-3 pt-2'>
                            <span className='flex items-center gap-1.5'>
                                <span><FaRegBuilding className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><LiaBathSolid className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><SlSizeFullscreen className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 1,200 <small>sq <small>ft</small></small></span>
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
                    <div className=' '>
                        <div className=' relative'>
                            <div className=''>
                                <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                                <span>
                                    <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                                </span>
                                <span className=' text-[14px] font-medium pt-1 text-white'>
                                    4.5
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-[#252525] pt-4'>Sofitel Algiers Hamma Garden</h3>
                            <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                                Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
                            </p>
                            <p className=' pt-2'><span className='text-lg font-[400] text-black'>699</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                        </div>

                        <div className='grid grid-cols-3 pt-2'>
                            <span className='flex items-center gap-1.5'>
                                <span><FaRegBuilding className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><LiaBathSolid className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><SlSizeFullscreen className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 1,200 <small>sq <small>ft</small></small></span>
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
                    <div className=' '>
                        <div className=' relative'>
                            <div className=''>
                                <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                                <span>
                                    <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                                </span>
                                <span className=' text-[14px] font-medium pt-1 text-white'>
                                    4.5
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-[#252525] pt-4'>Sofitel Algiers Hamma Garden</h3>
                            <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                                Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
                            </p>
                            <p className=' pt-2'><span className='text-lg font-[400] text-black'>699</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                        </div>

                        <div className='grid grid-cols-3 pt-2'>
                            <span className='flex items-center gap-1.5'>
                                <span><FaRegBuilding className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><LiaBathSolid className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><SlSizeFullscreen className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 1,200 <small>sq <small>ft</small></small></span>
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
                    <div className=' '>
                        <div className=' relative'>
                            <div className=''>
                                <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                                <span>
                                    <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                                </span>
                                <span className=' text-[14px] font-medium pt-1 text-white'>
                                    4.5
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-[#252525] pt-4'>Sofitel Algiers Hamma Garden</h3>
                            <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                                Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
                            </p>
                            <p className=' pt-2'><span className='text-lg font-[400] text-black'>699</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                        </div>

                        <div className='grid grid-cols-3 pt-2'>
                            <span className='flex items-center gap-1.5'>
                                <span><FaRegBuilding className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><LiaBathSolid className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><SlSizeFullscreen className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 1,200 <small>sq <small>ft</small></small></span>
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
                    <div className=' '>
                        <div className=' relative'>
                            <div className=''>
                                <Image src={image1} alt='banner image' className='h-[336px] rounded-[30px]' />
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-x-1 px-2 py-1 ">
                                <span>
                                    <IoStarSharp className=' text-xl text-[#FFDA9E]' />
                                </span>
                                <span className=' text-[14px] font-medium pt-1 text-white'>
                                    4.5
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-[#252525] pt-4'>Sofitel Algiers Hamma Garden</h3>
                            <p className='text-[12px] text-[#626262] font-[300] pt-2'>
                                Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
                            </p>
                            <p className=' pt-2'><span className='text-lg font-[400] text-black'>699</span> <small className=' text-[10px] font-[300] text-black'>Per Night</small></p>
                        </div>

                        <div className='grid grid-cols-3 pt-2'>
                            <span className='flex items-center gap-1.5'>
                                <span><FaRegBuilding className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bedroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><LiaBathSolid className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 2 <small className=' text-[10px] font-[400] text-[#252525]'>Bathroom</small> </span>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <span><SlSizeFullscreen className='text-[#626262]' /></span>
                                <span className='text-sm font-[400] text-[#252525]'> 1,200 <small>sq <small>ft</small></small></span>
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
                   
                </div>
            </div>
        </div>
    )
}

