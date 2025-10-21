import { getOrderItems } from "@/server/queries/order";
import React from "react"
import Link from "next/link";


export default async function OrderItems({orderId}:
    {orderId: string}
){

       const orders = await getOrderItems(orderId);

       console.log(orders);
       

   
    return (

                 <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
              
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>

    
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">QTY</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">COST</th>
   
                                </tr>
                            </thead>


    
                 
                    <tbody className="bg-white divide-y divide-gray-200">
                               {orders?.map((order, key) => {
                    
                   
                   
                   
                                   return (
                                       <React.Fragment key={key}>
                                           <tr className="hover:bg-gray-50">
                   
                   
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.product.name}</td>
                    
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.quantity}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">${order.product.price}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500 font-semibold">${order.quantity * order.product.price}</td>
                            
                   
                   
                   
                   
                   
                                           </tr>
                    
                         
                   
                                       </React.Fragment>
                   
                   
                                   )
                               })}
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}