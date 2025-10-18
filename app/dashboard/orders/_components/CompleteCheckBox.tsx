"use client";

import { useState } from "react";
import { toggleReadyStatus } from "@/server/queries/order";

export default function CompleteCheckBox({orderId}:
  {orderId: string}
) {

  console.log(orderId);
  
    const [checked, setChecked] = useState(false);



  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);

    if (isChecked) {

      setTimeout(async () => {

        await toggleReadyStatus("cmgwuoeiy0005uhdch300v4bz", true)
  
   
      }, 600); 
    }
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
    </div>



        
    )
}