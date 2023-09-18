import React from 'react'
import { Button } from '../Button/Button'

export const Subscribe = () => {
  return (
    <section className='w-full py-[8rem] px-6'>
        <h1 className='w-fit m-auto text-[2.1rem] font-bold text-center leading-tight'>Subscribe Our Newsletter</h1>
        <p className='w-fit m-auto text-[15px] text-[rgb(117,117,117)] font-semibold mt-3 text-center'>Get the latest information and promo offers directly</p>
        <div className='w-fit flex justify-between gap-2 items-center mx-auto mt-5 max-[452px]:flex-col max-[452px]:gap-y-3'>
            <input className='w-[15rem] max-[288px]:w-full border-2 border-[rgb(153,153,153)] h-[2rem] focus:outline-none px-3 py-1 placeholder:text-[13px] placeholder:font-extralight' type="text" placeholder='Input Email Address'/>
            <Button name='Get Started'/>
        </div>
    </section>
  )
}
