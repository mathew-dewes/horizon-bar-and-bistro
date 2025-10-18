
"use client"

import { UpdateQuantityForm } from "./UpdateQuantityForm";

export default function ProductList({ products }:
    { products: {id: string, name: string, price: number, inventoryAmount: number, category: string}[] }
) {

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, key) => {
                return (

                    <tr key={key} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-black font-semibold">{product.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">${product.price}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{product.inventoryAmount}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                    <UpdateQuantityForm productId={product.id}/>

                        </td>

                       
                    </tr>
                )
            })}




        </tbody>
    )
}