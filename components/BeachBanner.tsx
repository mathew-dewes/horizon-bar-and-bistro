"use client";

import { usePathname } from "next/navigation";

export default function BeachBanner({text}:{text?: string}){

    const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");


  if (isDashboard) return
    return (
           <div className="bg-[url('/beach.jpg')] h-50 bg-cover bg-center p-8 mb-10">
         <h1 className="text-xl lg:text-2xl font-medium">{text}</h1>
      </div>
    )
}

