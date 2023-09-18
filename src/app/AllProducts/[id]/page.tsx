import { ProductList } from "@/app/Components/ProductsSection/ProductList"
import Image from "next/image"
import { NumberOfProd } from "./NumberOfProd"


export default function Page({ params }: { params: { id: number } }) {

    const productFunction = (id: number) => {
        return ProductList.filter((items) => (
            items.id == id
        ))
    }
    const productDetails = productFunction(params.id)
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL']

    return (
        <div className="py-[4rem] max-[723px]:py-[0rem] max-[723px]:pb-[2rem] w-full grid items-center px-6">
            {
                productDetails.map((item) => (
                    <main key={item.id} className="">
                        <div className="w-[60rem] max-[1010px]:w-fit h-fit m-auto flex max-[871px]:flex-col ">
                            <Image className="w-[35rem]  max-[950px]:w-[30rem] " src={item.image} alt="sdf" />
                            <div className="w-fit flex flex-col  h-fit ml-8 mt-8 max-[871px]:ml-0 max-[723px]:mt-4">
                                <div className="">
                                    <h1 className="w-fit  text-[1.4rem] font-bold ">{item.name}</h1>
                                    <h1 className="w-fit text-[1.4rem] font-semibold text-[rgb(170,170,170)] relative max-[723px]:bottom-1 ">{item.category}</h1>
                                </div>
                                <div className="mt-10 max-[723px]:mt-4 flex flex-col gap-4 max-[723px]:gap-2 justify-between">
                                    <h1 className="w-fit  text-[15px] font-bold ">SELECT SIZE</h1>
                                    <span className="w-fit h-[2.1rem] flex gap-10 justify-between max-[363px]:gap-6 max-[304px]:gap-0 max-[304px]:w-full ">
                                        {
                                            sizes.map((size) => (
                                                <span key={size.length + 1 } className="w-[2rem] h-[2rem] rounded-full shadow grid cursor-pointer place-items-center active:shadow-none active:mt-[3px] select-none duration-200">
                                                    <h1 className="text-[14px] text-[rgb(117,117,117)] mt-[1px] font-bold ">{size}</h1>
                                                </span>
                                            ))
                                        }
                                    </span>
                                </div>
                                <div className="mt-10 max-[723px]:mt-4">
                                    <NumberOfProd item={item} />
                                </div>

                            </div>
                        </div>
                    </main>
                ))
            }
        </div>
    )
}