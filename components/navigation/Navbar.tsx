
import Link from "next/link"
import LogoutButton from "../LogoutButton";

import CartCouter from "./CartCounter";
import { getSession } from "@/server/auth/session";

export default async function Navbar() {

    const session = await getSession();


    return (
        <nav className="flex justify-between mx-5 sm:mx-20 items-center h-30">
            <Link href={'/'}><h1 className="font-bold">Horizon Bar and Bistro</h1></Link>

            {session && <ul className="flex gap-10">
         
                 <Link href={'/'}>Menu</Link>
          
                <div>

                    <Link className="relative" href="/checkout">Checkout
                 <CartCouter/></Link>
                </div>

                <LogoutButton />
            </ul>}

        </nav>
    )
}