
import { getCartItems } from "@/server/queries/cart";
import Image from "next/image";

export default async function CartTable(){

    
         const cartItems = await getCartItems();
        
    return (
                   <table className="w-full lg:w-3/4 border mt-5">
                            <thead className="bg-sky-300">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">product</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">QTY</th>
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
                                                    <p>{item.product.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">${item.product.price}</td>
                                            <td className="px-6 py-4 text-sm">{item.quantity}</td>
                        
                                            <td className="px-6 py-4 text-sm">
                                                   <button className="text-red-600 hover:text-red-900">Remove</button>
                                                {/* <form action={async (formData: FormData) => {
                                                    "use server"
                                                    await deleteProduct(formData);
                                                }}>
                                                    <input type="hidden" name="id" value={product.id} />
                                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                                </form> */}
                                            </td>
                                        </tr>
                                                )
                                            })}
                       
                                      
                           

                            </tbody>
                        </table>
    )
}