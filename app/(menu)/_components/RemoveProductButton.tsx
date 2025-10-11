"use client";

import {removeFromCart } from "@/server/mutations/Cart";
import { useTransition } from "react";

const text = "Remove";

export default function RemoveFromCartButton({productId, disable = false}:{productId: string, disable: boolean}){
      const [isPending, startTransition] = useTransition();

      function onSubmit(){
        startTransition(async()=>{
            await removeFromCart(productId)
        })
      }
    return (
         <button disabled={isPending || disable} onClick={onSubmit} 
         className={`px-2 py-2 rounded font-semibold text-sm 
          ${disable ? "bg-gray-400" : "hover:bg-red-600 bg-red-600 cursor-pointer"}`}>{text}</button>

    )
}