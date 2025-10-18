"use client"

import Image from "next/image"

type ButtonProps = {
    mobileMenu?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function HamburgerButton({
    mobileMenu, onClick}:ButtonProps){
    return(
        <button className="cursor-pointer lg:hidden sm:block" onClick={onClick} aria-labelledby='nav-label' aria-expanded={mobileMenu}> 
            <Image className="invert brightness-0" src={'/hamburger.png'} width={42} height={24} alt="Hamburger icon"/>
        </button>
    )
}