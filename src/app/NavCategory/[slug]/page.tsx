
import { ProductList } from "@/app/Components/ProductsSection/ProductList"
import MainProduct from "@/app/AllProducts/MainProduct"

export default function Page({ params }: { params: { slug: string } }) {
    const genderSpecificProducts = ProductList.filter((product) => {
        return product.gender === params.slug
    })

    return (
        <div>

            {
                (genderSpecificProducts.length > 0) ?
                    <div className="w-[80rem] max-[1304px]:w-fit flex flex-wrap justify-center gap-y-[1rem] max-[959px]:gap-y-0 m-auto mt-6 ">
                        {
                            genderSpecificProducts.map((item) => (
                                <MainProduct key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} image={item.image} />
                            ))
                        }
                    </div>
                    : <main className="w-full  grid place-items-center px-6">
                        <p className="m-auto text-[2rem] w-[30rem] text-center mt-[8rem] max-[530px]:w-full max-[530px]:text-[1.6rem] max-[386px]:text-[1.4rem]">Sorry Sir! No more products are left in this category</p>
                    </main>
            }

        </div>
    )
}