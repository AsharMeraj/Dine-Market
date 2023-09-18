import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/Store/Store'
import { StaticImageData } from 'next/image'
interface CartItems {
    id: number;
    name: string;
    price: number;
    category: string,
    gender: string,
    image: StaticImageData
    quantity: number
}

interface CartState {
    items: CartItems[];
    totalQuantity: number
    totalPrice: number
    singleAmount: number
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    singleAmount: 0
};



export const counterSlice = createSlice({
    name: 'Cart',
    initialState,

    reducers: {
        // addToCart: (state, actions: PayloadAction<{ cart: CartItems }>) => {
        //     let find = state.items.findIndex((item) => item.id === actions.payload.cart.id)

        //     if (find > 0) {
        //         state.items[find].quantity  += 1;
        //     }
        //     else {
        //         state.items.push(actions.payload.cart)
        //     }
        // },
        
        // slugAdd: (state, action: PayloadAction<{ num: number, cart: CartItems }>) => {
        //     const { num, cart } = action.payload;
            
        //     // Find the index of the item with the matching id
        //     const itemIndex = state.items.findIndex((item) => item.id === cart.id);
            
        //     if (itemIndex !== -1) {
        //         const updatedCartItem = {
        //             ...cart,
        //             quantity: cart.quantity + num,
        //         };
        //         state.items[itemIndex] = updatedCartItem;
        //         state.totalQuantity += num;
        //         // console.log(state.totalQuantity)
        //         console.log(itemIndex)
        //     }
        // },
        addToCart: (state, action: PayloadAction<{ num: number, cart: CartItems }>) => {
            const { num, cart } = action.payload;
          
            // Find the index of the item with the matching id
            const itemIndex = state.items.findIndex((item) => item.id === cart.id);
          
            if (itemIndex !== -1) {
              // If the item exists, update its quantity
              state.items[itemIndex].quantity += num;
            } else {
              // If the item doesn't exist, add it to the cart
              state.items.push({ ...cart, quantity: num });
            }
          
            // Update the totalQuantity based on the quantity change
            state.totalQuantity += num;
          },
        
        getCartTotal: (state) => {
            const { totalQuantity, totalPrice } = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal: number = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                { totalQuantity: 0, totalPrice: 0 }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity;
        },




        removeFromCart: (state, actions: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== actions.payload);

        },

        
        
        Increment: (state, actions: PayloadAction<number>) => {
            state.items = state.items.map((item) => {
                if (item.id === actions.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
        },
        Decrement: (state, actions: PayloadAction<number>) => {
            state.items = state.items.map((item) => {
                if (item.id === actions.payload && item.quantity != 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
        },

        clearCart: (state) => {
            state.items = [];

        }
    }
})

export const { addToCart, removeFromCart, clearCart, getCartTotal, Increment, Decrement } = counterSlice.actions


export default counterSlice.reducer