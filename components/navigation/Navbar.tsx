"use client"

import { useState } from "react";

import MobileMenuLinks from "./mobile/MobileMenuLinks";
import { HamburgerButton } from "./mobile/HamburgerButton";

import MenuCloseButton from "./mobile/MenuCloseButton";

import Link from "next/link";
import Navlink from "./NavLink";
import { auth } from "@/server/auth/auth";
import LogoutButton from "../LogoutButton";
import { usePathname } from "next/navigation";

type Session = typeof auth.$Infer.Session

export const pageRoutes = [
    {href: "/", text:"Menu"},
        {href: "/checkout", text:"Checkout"},

]

export const dashboardRoutes = [
        {href: "/dashboard", text:"Dashboard"},
        {href: "/dashboard/orders", text:"Orders"},
        {href: "/dashboard/products", text: "Products"},
        {href: "/auth/login", text: "Back to Login"}
]

export default function Navbar({ session }:
    { session: Session | null }
) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

      const pathName = usePathname();

      console.log(pathName);
      
    return (
        <nav className="flex justify-between items-center h-30 bg-black text-white shadow-xl px-5 sm:px-20">
            <Link href={'/'}><h1 className="text-accent-500 font-bold text-2xl">HB & Bistro</h1></Link>
    
    <ul className="lg:flex gap-10 xl:gap-20 hidden">

                {session && pageRoutes.map((route, key) => {
                    return <Navlink href={route.href} text={route.text} key={key} />
                })}

                {session && <LogoutButton/>}

            </ul>
            {session && <div className="lg:hidden block">
                {isMenuOpen ? <MenuCloseButton onClick={closeMenu} /> : <HamburgerButton onClick={() => setIsMenuOpen(prev => !prev)} />}
                <MobileMenuLinks isMenuOpen={isMenuOpen} onClose={closeMenu} />
            </div>}
            {pathName.startsWith("/dashboard") && <div className="lg:hidden block">
                {isMenuOpen ? <MenuCloseButton onClick={closeMenu} /> : <HamburgerButton onClick={() => setIsMenuOpen(prev => !prev)} />}
                <MobileMenuLinks isMenuOpen={isMenuOpen} onClose={closeMenu} />
            </div>}
          




        </nav>
    )
}

