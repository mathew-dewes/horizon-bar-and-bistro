"use client"

import { signOut } from "@/lib/actions/authAction";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className=" h-20 px-20  flex justify-between items-center">
            <Link className="cursor-pointer" href={'/'}><h1 className="text-3xl font-bold">Horizon Bar and Bistro</h1></Link>
       
            <ul className="flex gap-10">
                <p className="text-lg">Order</p>
                <p className="text-lg">Hello</p>
                <form action={signOut}>
  <button className="cursor-pointer"><p className="text-lg">Logout</p></button>
                </form>
              
                
            </ul>
        </nav>
    )
}