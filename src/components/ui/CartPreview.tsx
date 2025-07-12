import { UserCart } from "@/types/cart"


export default function CartPreview({ userCart }:
    { userCart: UserCart[] }
) {
    if (userCart.length === 0){
        return null;
    }
    
    return (
        <div>
            <h1>CART:</h1>
            {userCart.map((cart)=>{
                return(
                    <div className="w-100" key={cart.id}>
                        {cart.cart_items.map((item)=>{
                            return(
                                <div className="flex justify-between p-5" key={item.id}>
                                    <h1 className="font-bold">{item.products.name}</h1>
                                    <p>x {item.quantity}</p>
                                </div>
                            )
                        })}
                    
                    </div>
                )
            })}
        </div>
    )
}