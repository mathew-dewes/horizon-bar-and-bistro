import { getSingleOrderItems } from "@/server/queries/order";
import React from "react"

export default async function SingleOrderItemsTable({orderId}:
    {orderId: string}
){

       const orders = await getSingleOrderItems(orderId);
       

       if (orders.length === 0){
        return (
            <div className="p-10 text-2xl font-semibold text-black">
                <h1>There are no orders</h1>
            </div>
        )
       }
       

    
    return (

                 <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">QTY</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">COST</th>
                         
                                
                    
                                </tr>
                            </thead>


    
                 
                    <tbody className="bg-white divide-y divide-gray-200">
                               {orders.map((order) => {
                 
                   

                   
                                   return (
                                       <React.Fragment key={order.id}>
                                           <tr className="hover:bg-gray-50">
                   
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.product.name}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.quantity}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">${order.quantity * order.product.price}</td>
                              
                                               
                
                                   
                   
                   
                   
                   
                   
                                           </tr>
                    
                         
                   
                                       </React.Fragment>
                   
                   
                                   )
                               })}
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}