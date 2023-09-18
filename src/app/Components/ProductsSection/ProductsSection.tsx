import React from 'react'
import Image from 'next/image'
import { ProductList } from './ProductList'
import Link from 'next/link'
import { HomeProductList } from './HomeProductList'


export const Products = () => {
    const threeProducts = ProductList.slice(0, 3);
    return (
        <section className='py-[4rem]'>
            <h1 className='w-fit m-auto font-bold text-[14px] text-blue-700 tracking-wider'>PRODUCTS</h1>
            <h1 className=' m-auto font-bold text-[2rem] mt-[1rem] text-center mx-6 leading-tight'>Check What We Have</h1>
            <div className="w-fit flex flex-wrap justify-center m-auto mt-6">
                {
                    threeProducts.map((item) => (
                        <Link key={item.id} href={`/AllProducts/${item.id}`}>
                            <HomeProductList name={item.name} image={item.image} price={item.price}/>
                        </Link>
                    ))
                }

            </div>
        </section>
    )
}
