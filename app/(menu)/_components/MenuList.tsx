import { getProductList } from "@/server/queries/products"
import Image from "next/image";
import AddProductButton from "./AddProductButton";
import RemoveProductButton from "./RemoveProductButton";
import prisma from "@/server/db/prisma";
import { getUserId } from "@/server/auth/session";
import ClearItemsButton from "./ClearItemsButton";

export default async function MenuList() {


    const productList = await getProductList();
    const userId = await getUserId();

    const cartItems = await prisma.cartItems.findMany({
        where: {
            cart: { userId }
        },
        select: {
            quantity: true,
            productId: true
        }
    });

    const cartMap = new Map(cartItems.map(item => [item.productId, item.quantity]));



    return (
        <div>
            <h1>Menu List</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                {productList.map((product) => {
                    const quantityInCart = cartMap.get(product.id) || 0;
                    const productInCart = quantityInCart > 0


                    return (
                        <div className="md:flex gap-5 lg:w-150  bg-gray-800 rounded-xl p-5" key={product.id}>
                            <Image className="rounded-xl w-auto mx-auto h-auto" alt="product image" height={1} width={150} src={product.imageUrl!} />
                            <div className="mt-5 text-center md:text-left">
                                <h3 className="font-bold">{product.name}</h3>
                                <p className="mt-2 font-light">{product.description}</p>
                                <p className="mt-3">Price: ${product.price}.00</p>

                                <div className="mt-3 flex gap-3 justify-center md:justify-start">
                                    <RemoveProductButton disable={!productInCart} productId={product.id} />

                                    <AddProductButton productId={product.id} />


                                </div>
                                {quantityInCart > 0 &&
                                    <div className="md:absolute">
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

        </div>
    )
}