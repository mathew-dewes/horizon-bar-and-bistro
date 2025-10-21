import { getOrders } from "@/server/queries/order";
import React from "react"
import Link from "next/link";


export default async function WaitersOrderTable({orderId}:{
    orderId: string
}){

       const orders = await getOrders();
    


   
    return (

                 <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Table</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
                                </tr>
                            </thead>


    
                 
                    <tbody className="bg-white divide-y divide-gray-200">
                               {orders.map((order, key) => {

                                const highlight = orderId == order.id;
                                   const d = new Date(order.createdAt);
                                   const day = String(d.getDate()).padStart(2, "0");
                                   const month = String(d.getMonth() + 1).padStart(2, "0");
                                   const hours = String(d.getHours()).padStart(2, "0");
                                   const minutes = String(d.getMinutes()).padStart(2, "0");
                                   const date = day + "/" + month + " - " + hours + ":" + minutes;
                   
                   
                   
                                   return (
                                       <React.Fragment key={key}>
                                           <tr className={`${highlight ? "bg-sky-200" : "hover:bg-gray-50"}`}>
                   
                   
                                               <td className="px-6 py-4 text-sm text-black">{date}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.orderNumber}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.user.name}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.tableNumber}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">{order.totalItems}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500">${order.cost}</td>
                                               <td className="px-6 py-4 text-sm text-gray-500 font-semibold">{order.status}</td>
                               
                                                        <td className="px-6 py-4 text-sm text-gray-500 font-semibold cursor-pointer">
                                                            <Link href={'/dashboard/orders/waiter?order=' + order.id}>View</Link>
                                                        </td>
                   
                   
                   
                   
                   
                                           </tr>
                    
                         
                   
                                       </React.Fragment>
                   
                   
                                   )
                               })}
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}