"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({href, text}:
    {href: string, text:string, key?: number}
){

    const pathName = usePathname();
    
function isActive(link: string) {
  if (link === "/") {
    return pathName === "/"; 
  }
  return pathName.startsWith(link);
}

    return <Link className={`hover:text-accent-500
        ${isActive(href) ? "text-accent-500" : ""}
        `} href={href}>{text}</Link>
}