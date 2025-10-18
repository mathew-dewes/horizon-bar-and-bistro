
"use client"

import CompleteCheckBox from "./CompleteCheckBox";

export default function OrderList({ orders }:
    { 
        orders: {createdAt: Date, quantity: number,  
            product:{name: string}, 
            order:{orderNumber: number, tableNumber: string, id: string,
                user:{name: string}
            },
       
    }[] }
) {

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, key) => {

                const d = new Date(order.createdAt);
                const day = String(d.getDate()).padStart(2, "0");
const month = String(d.getMonth() + 1).padStart(2, "0");
const hours = String(d.getHours()).padStart(2, "0");
const minutes = String(d.getMinutes()).padStart(2, "0");

const formatted = `${day}/${month} - ${hours}:${minutes}`;

                return (

                    <tr key={key} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-black">{formatted}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{order.order.orderNumber}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{order.order.user.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{order.order.tableNumber}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{order.product.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{order.quantity}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 font-semibold">PENDING</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            <CompleteCheckBox orderId={order.order.id}/>
                        </td>

                       
                    </tr>
                )
            })}




        </tbody>
    )
}