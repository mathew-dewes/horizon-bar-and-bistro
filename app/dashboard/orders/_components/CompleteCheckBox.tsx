"use client";

import { toggleOrderItemReady } from "@/server/mutations/order";
import { useState } from "react";
// import { toggleReadyStatus } from "@/server/queries/order";

export default function CompleteCheckBox({orderId, isChecked}:
  {orderId: string, isChecked: boolean}
) {


  
    const [checked, setChecked] = useState(isChecked);



  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);



   

await toggleOrderItemReady(orderId, !checked)

  
   
 
  };
    return (
 
          <div className="flex items-center justify-center gap-2">
      <input
        id="complete-order"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-4 h-4 accent-sky-300 border-gray-300 rounded-sm focus:ring-sky-300"
      />
      <p>Mark as ready</p>
    </div>



        
    )
}