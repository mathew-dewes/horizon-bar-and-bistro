import prisma from "@/server/db/prisma";
import Link from "next/link"

export default async function Navbar() {

    const navLinks = [
        { href: "/", label: "Menu" },
        { href: "/auth/login", label: "Auth" },
        { href: "/auth/login", label: "Auth" },
        { href: "/user/orders", label: "Logout" },


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
                <p>Cart: {totalQuantity}</p>
                {navLinks.map((link, key) => {
                    return <Link href={link.href} key={key}>{link.label}</Link>
                })}
            </ul>
        </nav>
    )
}