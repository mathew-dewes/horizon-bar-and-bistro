"use client";

import {removeFromCart } from "@/server/mutations/Cart";
import { useTransition } from "react";

const danger = true;
const text = "Remove";

export default function RemoveFromCartButton({productId}:{productId: string}){
      const [isPending, startTransition] = useTransition();

      function onSubmit(){
        startTransition(async()=>{
            await removeFromCart(productId)
        })
      }
    return (
         <button disabled={isPending} onClick={onSubmit} className={`px-2 py-2 rounded font-semibold cursor-pointer ${danger ? "bg-red-400 hover:bg-red-600" : "bg-sky-400 hover:bg-sky-600"}`}>{text}</button>

    )
}