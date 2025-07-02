'use client'

import React from 'react';
import Lottie from 'lottie-react';
import oopsAnimation from '@/assets/animations/oops.json';

export default function No_data() {
  return (
    <div className="bg-white pt-[30px]">
      <div className="max-w-7xl mx-auto lg:px-[88px] px-2.5 min-h-screen flex items-center justify-center">
        <Lottie 
          animationData={oopsAnimation} 
          style={{ height: 400, width: 400 }}
          loop
          autoplay
        />
      </div>
    </div>
  );
}
