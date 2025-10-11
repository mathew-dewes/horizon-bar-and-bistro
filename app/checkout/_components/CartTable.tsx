
import ClearItemsButton from "@/app/(menu)/_components/ClearItemsButton";
import RemoveProductButton from "@/app/(menu)/_components/RemoveProductButton";
import { getCartItems } from "@/server/queries/cart";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function CartTable(){

    
         const cartItems = await getCartItems();
         const totalItems = cartItems.reduce((sum, item)=> sum + item.quantity, 0);

         if (totalItems == 0) redirect('/');
         
         const totalCost = cartItems.reduce((sum, item)=> sum + item.product.price, 0);
        
    return (
        <div>
  <table className="w-full lg:w-3/4 border mt-5">
                            <thead className="bg-sky-300">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">product</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Unit Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">QTY</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">COST</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                  {cartItems.map((item, key)=>{
                                                return (
                                                      <tr key={key}>
                                          
                                            <td className="px-6 py-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Image src={item.product.imageUrl!} alt="Hello" height={50} width={50}/>
                                                    <p className="font-semibold">{item.product.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">${item.product.price}.00</td>
                                            <td className="px-6 py-4 text-sm">{item.quantity}</td>
                                            <td className="px-6 py-4 text-sm">${item.quantity * item.product.price}.00</td>
                        
                                            <td className="px-6 py-4 text-sm relative">
                                                <div className="flex gap-2">
            <RemoveProductButton disable={false} productId={item.productId} />
             <ClearItemsButton productId={item.productId} />
           
                                                </div>
                           
                                            </td>
                                        </tr>
                                                )
                                            })}
                       
                                      
                           

                            </tbody>
                        </table>
                        <div className="mt-10">
                            <p><b>Total items:</b> {totalItems}</p>
                            <p><b>Subtotal:</b> ${totalCost}.00</p>
                     
                        </div>
        </div>
                 
    )
}