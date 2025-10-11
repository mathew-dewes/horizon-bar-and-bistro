"use client";

import { addToCart } from "@/server/mutations/Cart";
import { useTransition } from "react";

const danger = false;
const text = "Add +";

export default function AddProductButton({productId}:{productId: string}){
      const [isPending, startTransition] = useTransition();

      function onSubmit(){
        startTransition(async()=>{
            await addToCart(productId)
        })
      }
    return (
         <button disabled={isPending} onClick={onSubmit} className={`px-2 text-sm py-2 rounded font-semibold cursor-pointer ${danger ? "bg-red-400 hover:bg-red-600" : "bg-sky-400 hover:bg-sky-600"}`}>{text}</button>

    )
}