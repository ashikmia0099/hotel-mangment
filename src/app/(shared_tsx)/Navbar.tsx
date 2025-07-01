'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import logo from '../../../public/home_images/room_logo.png'
import flag from '../../../public/home_images/spain.png'
import notification from '../../../public/home_images/notification.png'

import { AiOutlineEuroCircle } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { GoArrowUpRight } from 'react-icons/go'
import { PiUserLight } from 'react-icons/pi'
import { RxCrossCircled } from 'react-icons/rx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/MarketPlaces' },
    { name: 'Hotels', href: '/Rankings' },
    { name: 'House', href: '/MyNft' },
    { name: 'About Us', href: '/NftDetails' },
    { name: 'Contact Us', href: '/GenerateNft' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#E9F6FF] border-b border-[#d9d9d9]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[76px] px-4 lg:px-[88px]">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[90px] h-[30px]" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[16px] font-[400] text-[#626262] hover:text-[#007DD0]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Currency */}
          <Button variant="outline" className="rounded-full px-3 border-[#A5D3F1] h-10">
            <AiOutlineEuroCircle className="text-2xl text-[#535353]" />
            <IoIosArrowDown className="text-2xl text-[#007DD0]" />
          </Button>

          {/* Flag */}
          <Button variant="outline" className="rounded-full px-3 border-[#A5D3F1] h-10">
            <Image src={flag} alt="flag" className="w-6 h-6 rounded-full" />
            <IoIosArrowDown className="text-2xl text-[#007DD0]" />
          </Button>

          {/* List property */}
          <Button className="bg-white border border-[#A5D3F1] text-[#007DD0] rounded-full h-10 px-5 hover:bg-[#f0faff]">
            List your property
            <GoArrowUpRight className="text-xl ml-1" />
          </Button>

          {/* Notification */}
          <Button className="bg-white rounded-full h-10 w-10 p-0 flex items-center justify-center">
            <Image src={notification} alt="notification" className="w-6 h-6" />
          </Button>

          {/* Profile */}
          <Button className="bg-white border border-[#A5D3F1] text-[#007DD0] rounded-full h-10 px-3">
            <PiUserLight className="text-xl" />
            <span className="ml-1">Sunan</span>
          </Button>
        </div>

        {/* Mobile Drawer */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#2B2B2B] text-white w-[80%]">
              <div className="flex justify-between items-center mb-6">
                <Image src={logo} alt="logo" className="w-[90px] h-[30px]" />
                <button onClick={() => setOpen(false)}>
                  <RxCrossCircled className="text-3xl text-white" />
                </button>
              </div>
              <ul className="space-y-6 mt-8">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white text-lg font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
