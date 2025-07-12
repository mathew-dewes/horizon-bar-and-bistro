"use client"



export default function AddToCartButton({price, addToCart, product_id}:
    {price: number, product_id: string, addToCart:(user_id: string, product_id: string) => void}){
    return <button onClick={()=>{addToCart("fc2647e1-fc44-45bb-bbd0-5d6fa61dcb38", product_id )
}} className="bg-green-700 w-full rounded text-left p-3 flex justify-between hover:bg-green-900 cursor-pointer">
    <p>Add</p>
    <p>${price}.00</p>
</button>
}