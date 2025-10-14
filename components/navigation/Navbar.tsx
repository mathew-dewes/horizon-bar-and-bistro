
import Link from "next/link"
import LogoutButton from "../LogoutButton";

import { getSession } from "@/server/auth/session";
import CheckoutLink from "./CheckoutLink";


export default async function Navbar() {

    const session = await getSession();

    return (
        <nav className="flex justify-between mx-5 sm:mx-20 items-center h-30">
            {session ? <Link href={'/'}><h1 className="font-bold">Horizon Bar and Bistro</h1></Link> : <h1 className="font-bold">Horizon Bar and Bistro</h1>}


            {session && <ul className="flex gap-10">

                <Link href={'/'}>Menu</Link>

                <div>

                    <CheckoutLink />
                </div>

                <LogoutButton />
            </ul>}

        </nav>
    )
}