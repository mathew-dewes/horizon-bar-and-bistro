import { getOrdersItems } from "@/server/queries/order";
import React from "react"
import CompleteCheckBox from "./CompleteCheckBox";

export default async function OrderItemsTable(){

       const orders = await getOrdersItems();

    
    return (

                 <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">QTY</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">READY</th>
                    
                                </tr>
                            </thead>


    
                 
                    <tbody className="bg-white divide-y divide-gray-200">
                               {orders.map((order) => {
                                   const d = new Date(order.createdAt);
                                   const day = String(d.getDate()).padStart(2, "0");
                                   const month = String(d.getMonth() + 1).padStart(2, "0");
                                   const hours = String(d.getHours()).padStart(2, "0");
                                   const minutes = String(d.getMinutes()).padStart(2, "0");
                                   const date = day + "/" + month + " - " + hours + ":" + minutes;
                   
                   
                   
                                   return (
                                       <React.Fragment key={order.id}>
                                           <tr className="hover:bg-gray-50">
                   
                   
                                               <td className="px-6 py-4 text-sm text-black">{date}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.order.orderNumber}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.product.name}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.quantity}</td>
                
                                               <td className="px-6 py-4 text-sm text-gray-500">
                                               <CompleteCheckBox key={order.id}  orderId={order.id} isChecked={order.ready} />
                                           </td>
                   
                   
                   
                   
                   
                                           </tr>
                    
                         
                   
                                       </React.Fragment>
                   
                   
                                   )
                               })}
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}