import React from 'react'
import Logo from '/public/Logo.png'
import Image from 'next/image'
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='w-full mt-[8rem] grid place-items-center '>
            <section className='w-[75rem] m-auto max-[1252px]:w-full px-6'>
                <main className='w-full flex max-[920px]:flex-col gap-[4rem] justify-between'>
                    <div className='flex flex-col gap-12 w-[25rem] max-[1232px]:w-full'>
                        <div><Image alt='Logo' className='w-[10rem]' src={Logo} /></div>
                        <p className='text-[17px] text-black/60'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                        <div className='flex gap-6'>
                            <Twitter />
                            <Facebook />
                            <Linkedin />
                        </div>
                    </div>

                    <div className='grid grid-flow-row grid-cols-3 w-[45rem] max-[1232px]:w-full max-[920px]:flex max-[920px]:flex-col max-[920px]:gap-12 '>
                        <ul className='flex flex-col gap-2'>
                            <h2 className='text-[20px] font-semibold text-black/60 mb-2 max-[920px]:'>Company</h2>
                            <div className='text-black/60 max-[920px]:'>About</div>
                            <div className='text-black/60 max-[920px]:'>Terms of Use</div>
                            <div className='text-black/60 max-[920px]:'>Privacy Policy</div>
                            <div className='text-black/60 max-[920px]:'>How it Works</div>
                            <div className='text-black/60 max-[920px]:'>Contact Us</div>
                        </ul>
                        <ul className='flex flex-col gap-2'>
                            <h2 className='text-[20px] font-semibold text-black/60 mb-2 max-[920px]:'>Support</h2>
                            <div className='text-black/60 max-[920px]:'>Support carrer</div>
                            <div className='text-black/60 max-[920px]:'>24h service</div>
                            <div className='text-black/60 max-[920px]:'>Quick chat</div>

                        </ul>
                        <ul className='flex flex-col gap-2'>
                            <h2 className='text-[20px] font-semibold text-black/60 mb-2 max-[920px]:'>Contact</h2>
                            <div className='text-black/60 max-[920px]:'>Whatsapp</div>
                            <div className='text-black/60 max-[920px]:'>Support 24h</div>

                        </ul>
                    </div>
                </main>
            </section>
            <div className='grid place-items-center bg-black/20 w-full overflow-hidden   mt-[10rem]'>
                <main className='flex w-[80rem] max-[1283px]:w-full justify-between flex-wrap gap-4 max-[540px]:flex-col max-[540px]:w-fit  p-[2rem]'>
                    <div>Copyright &copy; 2023 Dine Market</div>
                    <div>Design by. <strong>Weird Design Studio</strong></div>
                    <div>Code by. <strong>Muhammad Ashar</strong></div>
                </main>
            </div>
        </footer>
    )
}

export default Footer