import React from 'react'
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import Featured1 from '/public/Featured1.png'
import Featured2 from '/public/Featured2.png'
import Featured3 from '/public/Featured3.png'
import Featured4 from '/public/Featured4.png'

export const Hero = () => {
    return (
        <section className='flex justify-center pb-[4rem] pt-[2rem] max-lg:pt-[1.5rem] max-[550px]:pt-1 max-[550px]:h-fit px-6 '>
            <div className='w-[88rem] grid place-items-center h-[40rem] max-[550px]:h-[33rem] background-bg max-[1400px]:bg-[45rem]  max-[1280px]:bg-[40rem] max-[1196px]:bg-[35rem] max-[1115px]:bg-[30rem] max-[920px]:bg-none'>
            {/* max-[1270px]:bg-[35rem] */}
                <main className='w-[77rem] max-[1282px]:w-full flex justify-between'>
                    {/*                LEFT SECTION              */}
                    <main className='flex flex-col justify-between  w-[40rem] max-[690px]:w-full'>
                        {/* Badge */}
                        <div className='bg-[rgb(225,237,255)] text-blue-800 px-5 py-2 font-bold rounded-md w-fit'>Sales 70%</div>
                        {/* Heading */}
                        <h1 className='font-bold text-[3.5rem] leading-none mt-[5rem] max-[550px]:mt-[4rem] max-[550px]:text-[3rem] max-[496px]:text-[2.6rem] max-[321px]:text-[2.3rem] '>An Industrial Take On Streetwear</h1>
                        {/* Paragraph */}
                        <p className='text-[rgb(117,117,117)] font-semibold w-[28rem] mt-[2rem] max-[550px]:mt-[1.5rem] max-[496px]:w-full'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfit</p>
                        {/* Button */}
                        <button className='flex rounded-full px-8 py-4 gap-3 mt-[2.5rem] max-[550px]:mt-[1.5rem] bg-black w-fit '>
                            <ShoppingCart color="#ffffff" />
                            <h1 className='text-white font-bold'>Start Shopping</h1>
                        </button>
                        {/* Logos */}
                        <div className='flex justify-between w-full mt-[6rem] max-[550px]:mt-[4rem] max-[420px]:grid max-[420px]:grid-cols-2'>
                            <Image alt='Featured1' className='max-[453px]:w-[5rem]' src={Featured1} />
                            <Image alt='Featured2' className='max-[453px]:w-[5rem]' src={Featured2} />
                            <Image alt='Featured3' className='max-[453px]:w-[5rem]' src={Featured3} />
                            <Image alt='Featured4' className='max-[453px]:w-[5rem]' src={Featured4} />
                        </div>
                    </main>
                    <main className=''>
                    </main>
                </main>
            </div>
        </section>
    )
}
