"use client";

import { clearItemFromCart } from "@/server/mutations/Cart";
import { useTransition } from "react";



export default function ClearItemsButton({productId}:{productId: string}){
      const [isPending, startTransition] = useTransition();

      function onSubmit(){
        startTransition(async()=>{
            await clearItemFromCart(productId)
        })
      }
    return (
       <button onClick={onSubmit}  className={`px-2 py-2 text-sm rounded font-semibold cursor-pointer bg-sky-400 hover:bg-sky-600"}`}>{isPending ? "Clearing items" : "Clear items"}</button>

    )
}