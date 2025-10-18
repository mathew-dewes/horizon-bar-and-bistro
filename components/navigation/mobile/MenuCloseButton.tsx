"use client"

import Image from "next/image"


export default function MenuCloseButton({onClick}:
    {onClick: React.MouseEventHandler<HTMLButtonElement>}
){
    return (
        <button onClick={onClick} className="cursor-pointer sm:block">
            <Image className="invert brightness-0" width={30} height={20} alt="Menu close" src={'/close.png'}/>
        </button>
    )
}