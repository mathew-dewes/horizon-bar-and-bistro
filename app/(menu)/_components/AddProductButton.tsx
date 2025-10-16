"use client";

import { addToCart } from "@/server/mutations/Cart";
import { useTransition } from "react";

export default function AddProductButton({productId, disable}:{productId: string, disable: boolean}){
      const [isPending, startTransition] = useTransition();

      function onSubmit(){
        startTransition(async()=>{
            await addToCart(productId)
        })
      }
    return (
         <button disabled={isPending || disable} onClick={onSubmit} className={`px-2 text-sm py-2 rounded font-semibold  ${disable ? "bg-red-400" : "bg-sky-400 cursor-pointer hover:bg-sky-600"}`}>Add +</button>

    )
}