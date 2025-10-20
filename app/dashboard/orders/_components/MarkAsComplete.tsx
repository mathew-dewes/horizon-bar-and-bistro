"use client";

import { toggleCompleted, toggleOrderItemReady } from "@/server/mutations/order";
import { OrderStatus } from "@prisma/client";
import { useState } from "react";
// import { toggleReadyStatus } from "@/server/queries/order";

export default function MarkAsCompleted({orderId, isComplete}:
  {orderId: string, isComplete: boolean}
) {


  
    const [complete, setComplete] = useState(isComplete);



  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let status: OrderStatus;
    if (e.target.checked){
      status = "COMPLETE"
    } else{
      status = "READY"
    }
    
    setComplete(e.target.checked);
    await toggleCompleted(orderId, status)

  

  };
    return (
 
          <div className="flex items-center justify-center gap-2">
      <input
        id="complete-order"
        type="checkbox"
        checked={isComplete}
        onChange={handleChange}
        className="w-4 h-4 accent-sky-300 border-gray-300 rounded-sm focus:ring-sky-300"
      />
      <p>MARK COMPLETE</p>
    </div>



        
    )
}