import { getProductList } from "@/server/queries/products"
import Image from "next/image";
import AddProductButton from "./AddProductButton";
import RemoveProductButton from "./RemoveProductButton";

import ClearItemsButton from "./ClearItemsButton";
import { getCartItems } from "@/server/queries/cart";
import { Category } from "@prisma/client";
import ErrorMessage from "@/components/ErrorMessage";

export default async function MenuList({ category }:
    { category?: string }
) {

    const [productList, cartItems] = await Promise.all([getProductList(category as Category), getCartItems()]);
    
   
    


    return (

        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10 animate-fadeIn">
            {productList.map((product) => {
                const cart = cartItems?.get(product.id)
                const quantityInCart = cart?.quantity || 0;
                const productInCart = quantityInCart > 0
                const productCartQty = cartItems?.get(product.id)?.quantity;
                const outOfStock = product.inventoryAmount === 0
                const lowStock = product.inventoryAmount > 0 && product.inventoryAmount < 5
                const inventoryExceeded = productCartQty! >= product.inventoryAmount

                return (
                    <div className="md:flex gap-5 max-w-150 mx-auto  bg-gray-800 rounded-xl p-5" key={product.id}>
                        <Image className="rounded-xl mt-5 md:mt-0  mx-auto object-cover" width={200}
                            height={100} alt="product image" src={product.imageUrl!} />
                        <div className="mt-5 text-center md:text-left">
                            <h3 className="font-bold text-xl">{product.name}</h3>
                            <p className="mt-2 font-light">{product.description}</p>
                            <p className="mt-3">Price: ${product.price}.00</p>
                            <p className="mt-3">Price: ${product.inventoryAmount}.00</p>


                            <div className="mt-3 flex gap-3 justify-center md:justify-start">
                                <RemoveProductButton disable={!productInCart} productId={product.id} />

                                <AddProductButton disable={outOfStock || inventoryExceeded} productId={product.id} />


                            </div>
                            {outOfStock && <ErrorMessage message="This product is out of stock"/>}
                            { inventoryExceeded && <ErrorMessage message="Out of stock - You have ordered the last remaining items for this product"/>}
                            {lowStock && !inventoryExceeded && <ErrorMessage color="orange" message={`Stock level low`}/>}
                    
          
                            {quantityInCart > 0 &&
                                <div>
                                    <div className="mt-5 flex gap-2 justify-center md:justify-start">
                                        <p>QTY added:</p>
                                        {quantityInCart > 0 && (
                                            <span>{quantityInCart}</span>
                                        )}

                                    </div>
                                    <div className="mt-3">
                                        <ClearItemsButton productId={product.id} />
                                    </div>


                                </div>
                            }





                        </div>





                    </div>
                )
            })}

        </div>


    )
}