'use client';
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/Store/Store';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCartTotal } from '../Store/Slice/cartSlice';
import { Button } from '../Components/Button/Button';
import { ProductTypes } from '../Components/ProductsSection/ProductTypes';
import { removeFromCart } from '../Store/Slice/cartSlice';
import { Increment } from '../Store/Slice/cartSlice';
import { Decrement } from '../Store/Slice/cartSlice';

const CartPage = () => {
  const { items, totalPrice, totalQuantity } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items])




  return (
    <div>

      {
        items.length > 0?
        <section className='w-full justify-between px-6 py-6'>
          <h1 className='text-[1.5rem] w-[75rem] max-[1255px]:w-full   font-bold m-auto mb-8 max-[558px]:w-fit'>Shopping Cart</h1>
          <main className='flex w-[75rem] max-[1255px]:w-full m-auto max-[920px]:flex-col justify-between'>
            <div className='w-full flex-col mr-[4rem] max-[920px]:mr-0 '>
              {
                items.map((item) => (
                  <section key={item.id} className='w-full  flex max-[558px]:flex-col mb-8 items-center justify-center'>
                    <div className='flex max-[558px]:flex-col w-full max-[558px]:min-w-full items-center max-[558px]:items-start '>
                      <Image className='w-[15rem] h-[15rem] max-[558px]:w-[15rem] max-[558px]:h-auto rounded-2xl' alt='/' src={item.image} />
                      <div className='flex flex-col h-fit w-full my-4 max-[558px]:mt-2 gap-4 max-[920px]:gap-2 max-[558px]:gap-0 justify-between ml-[1.5rem] max-[558px]:ml-0'>
                        <div className='flex w-full max-[558px]:min-w-full items-center justify-between'>
                          <h1 className='text-[1.5rem] max-[634px]:text-[1.3rem] leading-snug'>{item.name}</h1>
                          <Trash2 onClick={() => dispatch(removeFromCart(item.id))} className='cursor-pointer max-[558px]:order-last w-fit ml-[1rem]' />
                        </div>
                        <h2 className='font-semibold text-[rgb(150,150,150)] max-[634px]:text-[14px]'>Dress</h2>
                        <h2 className='text-[18px] font-semibold max-[634px]:text-[16px]'>Delivery Estimation</h2>
                        <h2 className='font-semibold text-[1.1rem] tracking-wider text-[rgb(255,199,0)] max-[634px]:text-[1rem]'>5 Working Days</h2>
                        <div className='flex w-full max-[558px]:min-w-full items-center justify-between'>
                          <h2 className='text-[1.2rem] font-bold'>${(item.price).toFixed(2)}</h2>
                          <div className="flex gap-4 justify-between items-center ">
                            <h1 onClick={() => dispatch(Decrement(item.id))} className="text-[2rem] h-fit cursor-pointer drop-shadow-md shadow-black">-</h1>
                            <h1 className="text-[18px] h-fit text-[rgb(117,117,117)] ">{item.quantity}</h1>
                            <h1 onClick={() => dispatch(Increment(item.id))} className="text-[1.55rem] h-fit rounded-full px-[0.6rem] border border-black cursor-pointer ">+</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ))
              }

            </div>
            <section className=' w-[30rem] flex flex-col gap-6 max-[558px]:gap-4 p-6 shadow-lg shadow-black/70 rounded-[1.5rem] h-fit mt-4 max-[920px]:m-auto max-[920px]:w-[46rem] max-[788px]:w-full max-[558px]:max-w-full'>
              <h1 className='w-fit font-bold text-[1.3rem]'>Order Summary</h1>
              <div className='flex w-full justify-between'>
                <h2 className='text-[1.1rem]'>Quantity:</h2>
                <h2 className='text-[1.1rem]'>{totalQuantity} Product</h2>
              </div>
              <div className='flex w-full justify-between'>
                <h2 className='text-[1.1rem]'>SubTotal:</h2>
                <h2 className='text-[1.1rem]'>${totalPrice.toFixed(2)}</h2>
              </div>
              <div className='cursor-pointer'>
                <Button name='Proceed To Check Out' />
              </div>
            </section>
          </main>
        </section >
        : <section className='w-full height grid place-items-center px-6'>
          <h2 className='w-fit text-[2rem] font-bold text-center'>Shopping Cart is empty</h2>
        </section>
      }
    </div>
  )
}
export default CartPage;
{/* onClick={() => setNum(num === 1 ? 1 : num - 1)} */ }
{/* onClick={() => setNum(num + 1)} */ }