import { getProductList } from "@/server/queries/products"
import Image from "next/image";
import AddProductButton from "./AddProductButton";
import RemoveProductButton from "./RemoveProductButton";

export default async function MenuList() {

    const cart = true;

    const productList = await getProductList();
    return (
        <div>
            <h1>Menu List</h1>
            <div className="grid grid-cols-2 gap-10 mt-10">
                {productList.map((product) => {
                    return (
                        <div className="flex gap-5 items-center w-150  bg-gray-800 rounded-2xl p-5" key={product.id}>
                            <Image className="rounded-xl w-auto" alt="product image" height={200} width={150} src={product.imageUrl!} />
                            <div>
                                <h3 className="font-bold">{product.name}</h3>
                                <p className="mt-2 font-light">{product.description}</p>
                                <div className="mt-2 flex gap-3">
                                    {cart && <RemoveProductButton productId={product.id}/>}
                          
                                    <AddProductButton productId={product.id}/>
                        
              
                                </div>

                            </div>


                        </div>
                    )
                })}

            </div>
        </div>
    )
}