import { StaticImageData } from "next/image"

export type ProductTypes = {
    id: number,
    name: string,
    price: number,
    category: string,
    gender: string,
    image: StaticImageData
    quantity: number
};