"use client"

import { cancelOrder } from "@/server/mutations/Cart";
import { useTransition } from "react";



export default function CancelButton(){
      const [isPending, startTransition] = useTransition();

      function onSubmit(){
        startTransition(async()=>{
        await cancelOrder();
        
        })
      }
    return (
       <button disabled={isPending} onClick={onSubmit}  className={`px-2 py-2 text-sm rounded font-semibold cursor-pointer bg-sky-400 hover:bg-sky-600 ${isPending ? "bg-sky-600" : ""}`}>Cancel order</button>

    )
}