import React from 'react'

export default function Policies_Section() {
    return (
        <div className='bg-white pt-[30px]'>
            <div className="  max-w-7xl mx-auto px-[88px]  ">
                <h3 className=' text-xl font-bold text-[#252525] pb-4'>Policies</h3>
                <div>
                    <div className='border-[1px] border-[#DEDEDE] w-full rounded-[12px] p-5 '>
                        <div className=' grid grid-cols-11 items-center justify-center py-2.5 mb-2.5 border-b-2 border-[#DEDEDE]'>
                            {/* left site */}
                            <div className=' col-span-5'>
                                <h3 className=' text-2xl font-[400] text-[#252525]'>Check-in</h3>
                            </div>
                            {/* right section */}
                            <div className=' col-span-6'>
                                <h3 className=' text-[16px] font-semibold text-[#252525]'>Available 24 hours</h3>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                    Guests are required to show a photo identification and credit card upon check-in
                                    You'll need to let the property know in advance what time you'll arrive
                                </p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-11 items-center justify-center py-2.5 mb-2.5 border-b-2 border-[#DEDEDE]'>
                            {/* left site */}
                            <div className=' col-span-5'>
                                <h3 className=' text-2xl font-[400] text-[#252525]'>Check-out</h3>
                            </div>
                            {/* right section */}
                            <div className=' col-span-6'>
                                <h3 className=' text-[16px] font-semibold text-[#252525]'>Available 24 hours</h3>

                            </div>
                        </div>
                        <div className=' grid grid-cols-11 items-center justify-center py-2.5 mb-2.5 border-b-2 border-[#DEDEDE]'>
                            {/* left site */}
                            <div className=' col-span-5'>
                                <h3 className=' text-2xl font-[400] text-[#252525]'>Cancellation/ prepayment</h3>
                            </div>
                            {/* right section */}
                            <div className=' col-span-6'>

                                <p className='text-[16px] text-[#626262] font-[400]'>
                                    Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.
                                </p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-11 items-center justify-center py-2.5 mb-2.5 border-b-2 border-[#DEDEDE]'>
                            {/* left site */}
                            <div className=' col-span-5'>
                                <h3 className=' text-2xl font-[400] text-[#252525]'>Children and beds</h3>
                            </div>
                            {/* right section */}
                            <div className=' col-span-6'>
                                <h3 className=' text-[16px] font-semibold text-[#252525]'>Child policies</h3>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                    Children of any age are welcome.
                                </p>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                    Children 12 years and above will be charged as adults at this property.
                                </p>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                    To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.
                                </p>

                                <h3 className=' text-[16px] font-semibold text-[#252525]'>Cot and extra bed policies</h3>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                   The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.
                                </p>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                    There are no cots available at this property.
                                </p>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                  All extra beds are subject to availability.
                                </p>

                            </div>
                        </div>
                        <div className=' grid grid-cols-11 items-center justify-center py-2.5 mb-2.5 border-b-2 border-[#DEDEDE]'>
                            {/* left site */}
                            <div className=' col-span-5'>
                                <h3 className=' text-2xl font-[400] text-[#252525]'>No age restriction</h3>
                            </div>
                            {/* right section */}
                            <div className=' col-span-6'>
                               
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                 There is no age requirement for check-in
                                </p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-11 items-center justify-center py-2.5 mb-2.5 border-b-2 border-[#DEDEDE]'>
                            {/* left site */}
                            <div className=' col-span-5'>
                                <h3 className=' text-2xl font-[400] text-[#252525]'>Pets</h3>
                            </div>
                            {/* right section */}
                            <div className=' col-span-6'>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                   Pets are not allowed.
                                </p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-11 items-center justify-center py-2.5 mb-2.5 '>
                            {/* left site */}
                            <div className=' col-span-5'>
                                <h3 className=' text-2xl font-[400] text-[#252525]'>Cash only</h3>
                            </div>
                            {/* right section */}
                            <div className=' col-span-6'>
                                <p className='text-[16px] text-[#626262] font-[400]'>
                                   This property only accepts cash payments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
