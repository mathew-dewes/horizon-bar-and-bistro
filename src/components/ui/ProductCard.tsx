
import Image from "next/image"
import AddToCartButton from "./AddToCartButton"

type ProductCardProps = {
    name: string, 
    description: string, 
    image_url: string | null, 
    price: number, id:string, 
    quantity: number,
    addToCart: (user_id: string, product_id: string)=> void
}



export default async function ProductCard({ name, description, image_url, price, quantity, addToCart, id}:ProductCardProps
) {

 
    
    return (
        <div className="w-60">
            <Image priority className="w-60 h-80 rounded-t-3xl" alt="product-image" src={image_url ?? 'https://placehold.co/300'} width={300} height={300}></Image>
            <hr className="mt-3" />
            <h1 className="font-bold mt-2 mb-1">{name}</h1>
            <p>{description}</p>
            <div className="mt-3">
                <p>Total QTY: {quantity}</p>
<div className="flex gap-3 mt-5">
                
<AddToCartButton product_id={id} addToCart={addToCart} price={price} />

            </div>
            </div>
            
            <hr className="mt-3" />
        </div>
    )
}