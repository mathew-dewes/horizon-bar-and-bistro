import prisma from "@/server/db/prisma";
import Link from "next/link"

export default async function Navbar() {

    const navLinks = [
        { href: "/", label: "Menu" },
        { href: "/auth/login", label: "Auth" },



    ];

const cart = await prisma.cart.findUnique({
  where: { userId: "123" },
  include: { cartItems: true },
});

const totalQuantity = cart?.cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);

    
    return (
        <nav className="flex justify-between mx-5 sm:mx-20 items-center h-30">
            <Link href={'/'}><h1 className="font-bold">Horizon Bar and Bistro</h1></Link>

            <ul className="flex gap-10">
                {navLinks.map((link, key) => {
                    return <Link href={link.href} key={key}>{link.label}</Link>
                })}
                <div>
             
        <Link className="relative" href="/checkout">Checkout <span 
        className={`absolute -top-2 -right-3 text-sm text-green-500 ${totalQuantity === 0 ? "hidden" : ""}`}>{totalQuantity}</span></Link>
                </div>
    
            <Link href="">Logout</Link>
            </ul>
     
        </nav>
    )
}