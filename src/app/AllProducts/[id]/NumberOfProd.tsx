'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/Store/Slice/cartSlice';
import { ProductTypes } from '@/app/Components/ProductsSection/ProductTypes';
import toast from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';

type propType = {
    item: ProductTypes;
};

export const NumberOfProd = (props: propType) => {
    const [ num, setNum ] = useState(1);
    const realTimePrice = (props.item.price * props.item.quantity).toFixed(2);
    const dispatch = useDispatch();

    const handleAddToCart = (item: ProductTypes) => {
        dispatch(addToCart({ num, cart: item }));
        toast.success('Product Added Successfully');
    };

    return (
        <div>
            <div className="flex gap-6 w-fit items-center">
                <h1 className="h-fit font-bold">Quantity:</h1>
                <div className="flex gap-4 justify-between items-center">
                    <h1 onClick={() => setNum(num === 1 ? 1 : num - 1)} className="text-[2rem] h-fit cursor-pointer drop-shadow-md shadow-black">
                        -
                    </h1>
                    <h1 className="text-[18px] h-fit text-[rgb(117,117,117)] ">{num}</h1>
                    <h1 onClick={() => setNum(num + 1)} className="text-[1.55rem] h-fit rounded-full px-[0.6rem] border border-black cursor-pointer ">
                        +
                    </h1>
                </div>
            </div>
            <div className="w-fit mt-8 max-[723px]:mt-4 flex max-[363px]:flex-col items-center max-[363px]:items-start gap-4 max-[363px]:gap-2">
                <h1 className="text-[1.8rem] font-bold order-last max-[363px]:order-first ">${realTimePrice}</h1>
                <div className="relative right-1">
                    <button onClick={() => handleAddToCart(props.item)} className='rounded-full px-8 py-3 bg-black w-fit flex gap-2 items-center'>
                        <ShoppingCart size={19} color="#ffffff" />
                        <h1 className='text-white font-bold'>Add to cart</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};
