'use client';
import React from 'react'
import Image,{StaticImageData} from 'next/image'

type propType = {
    image: StaticImageData,
    name: string,
    price: number
}

export const HomeProductList = (props: propType) => {
    return (
        <div className="w-[27.5rem] max-[462px]:w-full h-[32rem] max-[462px]:h-full grid place-items-center max-[462px]:mx-">
            <div className='w-[26.5rem] max-[462px]:w-[90vw] p-6 hover:p-1 cursor-pointer duration-500'>
                <Image className='w-full' src={props.image} alt='pic1' />
                <h1 className='w-fit font-bold text-[1.1rem] mt-2'>{props.name}</h1>
                <h1 className='w-fit font-bold text-[1.1rem]'>${props.price}</h1>
            </div>
        </div>
    )
}
