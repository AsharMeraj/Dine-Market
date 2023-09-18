import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link'


type MainProductType = {
    image: StaticImageData,
    category?: string,
    name: string,
    price: number,
    id: number
}

const MainProduct = (props: MainProductType) => {
    return (
        <>
            <Link key={props.id} href={`/AllProducts/${props.id}`}>
            <div className="w-[20rem] max-[323px]:w-full h-[25rem] max-[323px]:h-fit grid place-items-center">
              <div className='w-[19rem] max-[323px]:w-[90vw] p-6 hover:p-2 cursor-pointer duration-500'>
                <Image className='w-full' src={props.image} alt='pic1' />
                <h1 className='w-fit font-bold text-[1.1rem] mt-2'>{props.name}</h1>
                <h1 className='w-fit font-bold text-[1.1rem]'>${props.price}</h1>
              </div>
            </div>
          </Link>
        </>
    )
}

export default MainProduct
