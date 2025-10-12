import Link from "next/link";
import CartCouter from "./CartCounter";
import { cartEmpty } from "@/server/queries/cart";

export default async function CheckoutLink(){

    const emptyCart = await cartEmpty();

    
    return (
         <Link className={`relative ${emptyCart ? "pointer-events-none opacity-50" : ""}`} href="/checkout">Checkout
                        <CartCouter /></Link>
    )
}