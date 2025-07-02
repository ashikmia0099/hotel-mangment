import React from 'react'

import img1 from '../../../public/home_images/banner_images/img1.jpg'
import img2 from '../../../public/home_images/banner_images/img2.jpg'
import img3 from '../../../public/home_images/banner_images/img3.jpg'
import img4 from '../../../public/home_images/banner_images/img4.jpg'
import img5 from '../../../public/home_images/banner_images/img5.jpg'
import img6 from '../../../public/home_images/banner_images/img6.jpg'
import img7 from '../../../public/home_images/banner_images/img7.jpg'
import img11 from '../../../public/home_images/banner_images/img11.jpg'
import img12 from '../../../public/home_images/banner_images/img12.jpg'
import Image from 'next/image'

export default function Banner_Image() {
    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto lg:px-[88px] h-[461px] px-2.5 ">
                <div className='  justify-between rounded-[14px] space-y-1'>
                    <div className=' flex justify-between rounded-[14px] gap-1'>
                        <div>
                            <Image src={img2} alt='' className=' w-[768px] h-[306px] object-cover rounded-tl-[14px]'></Image>
                        </div>
                        <div className=' grid grid-rows-2 h-[306px] gap-y-1'>
                            <Image src={img5} alt='' className=' w-[336px] h-full object-cover rounded-tr-[14px]'></Image>
                            <Image src={img4} alt='' className=' w-[336px] h-full object-cover'></Image>
                        </div>
                    </div>
                    <div className=' grid grid-cols-6 gap-x-1'>
                        <div>
                            <Image src={img11} alt='' className=' w-full h-[151px] object-cover rounded-bl-[14px]'></Image>
                        </div>
                        <div>
                            <Image src={img6} alt='' className=' w-full h-[151px] object-cover'></Image>
                        </div>
                        <div>
                            <Image src={img12} alt='' className=' w-full h-[151px] object-cover'></Image>
                        </div>
                        <div>
                            <Image src={img1} alt='' className=' w-full h-[151px] object-cover'></Image>
                        </div>
                        <div>
                            <Image src={img3} alt='' className=' w-full h-[151px] object-cover'></Image>
                        </div>
                        <div>
                            <Image src={img7} alt='' className=' w-full h-[151px] object-cover rounded-br-[14px]'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
