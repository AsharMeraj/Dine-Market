'use client';
import React from 'react'
import { ProductList } from '../Components/ProductsSection/ProductList'
import MainProduct from './MainProduct';


const page = () => {
  return (
    <div  className="w-[80rem] max-[1304px]:w-fit flex flex-wrap justify-center gap-y-[1rem] max-[959px]:gap-y-0 m-auto mt-6 ">
      {
        ProductList.map((item) => (
          <MainProduct key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} image={item.image}/>
        ))
      }

    </div>
  )
}

export default page
