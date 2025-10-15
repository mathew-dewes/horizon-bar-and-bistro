

import { getCartList } from "@/server/queries/cart";
import { redirect } from "next/navigation";

export default async function CartList(){

    
         const cartItems = await getCartList();
         const totalItems = cartItems.reduce((sum, item)=> sum + item.quantity, 0);

         if (totalItems == 0) redirect('/');
         
         
 const totalCost = cartItems.reduce((total, item) => {
  return total + item.quantity * item.product.price;
}, 0);
        
    return (
        <div>
  <table className="w-full lg:w-1/2 border mt-5">
                            <thead className="bg-sky-300">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">product</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Unit Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">QTY</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">COST</th>
                            
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                  {cartItems.map((item, key)=>{
                                                return (
                                                      <tr key={key}>
                                          
                                            <td className="px-6 py-4 text-sm">
                                        
                                                    <p className="font-semibold">{item.product.name}</p>
                                           
                                            </td>
                                            <td className="px-6 py-4 text-sm">${item.product.price}.00</td>
                                            <td className="px-6 py-4 text-sm">{item.quantity}</td>
                                            <td className="px-6 py-4 text-sm">${item.quantity * item.product.price}.00</td>
                        
                                  
                                        </tr>
                                                )
                                            })}
                       
                                      
                           

                            </tbody>
                        </table>
                        <div className="mt-10 flex gap-10">
                            <p><b>Total items:</b> {totalItems}</p>
                            <p><b>Subtotal:</b> ${totalCost}.00</p>
                     
                        </div>
        </div>
                 
    )
}