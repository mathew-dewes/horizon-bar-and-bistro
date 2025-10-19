
"use client"

import React from "react";
// import CompleteCheckBox from "./CompleteCheckBox";
import { OrderStatus } from "@prisma/client";



export default function OrderList({ orders }: {
    orders: {
        createdAt: Date,
        orderNumber: number,
        tableNumber: string,
        status: OrderStatus,
        totalItems: number,
        user: {
            name: string,
        },
        orderItems: {
            quantity: number,
            ready: boolean,
            product: {
                name: string
            }
        }[]
    }[]
}) {





    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, key) => {
                const d = new Date(order.createdAt);
                const day = String(d.getDate()).padStart(2, "0");
                const month = String(d.getMonth() + 1).padStart(2, "0");
                const hours = String(d.getHours()).padStart(2, "0");
                const minutes = String(d.getMinutes()).padStart(2, "0");
                const date = day + "/" + month + " - " + hours + ":" + minutes;



                return (
                    <React.Fragment key={key}>
                        <tr className="hover:bg-gray-50">


                            <td className="px-6 py-4 text-sm text-black">{date}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.orderNumber}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.user.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.tableNumber}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.totalItems}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 font-semibold">{order.status}</td>
                            {/* <td className="px-6 py-4 text-sm text-gray-500"> */}
                            {/* <CompleteCheckBox orderId={order.order.id} /> */}
                            {/* </td> */}





                        </tr>
                        <tr className="bg-gray-100">
                            <td className="px-6 py-4  text-xs font-semibold text-gray-600">
                                Product
                            </td>
                            <td className="px-6 py-4  text-xs font-semibold text-gray-600">
                                Quantity
                            </td>
                            <td className="px-6 py-4  text-xs font-semibold text-gray-600">
                                Location
                            </td>
                            <td className="px-6 py-4  text-xs font-semibold text-gray-600">
                                Status
                            </td>
                            {/* Empty filler cells to match column count */}
                            <td className="px-6 py-2"></td>
                            <td className="px-6 py-2"></td>

                        </tr>
                        {order.orderItems.map((item, key) => {
                            return (
                                <tr key={key} className="bg-gray-50">

                                    <td className="px-6 py-4 text-sm text-gray-500">{item.product.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">X {item.quantity}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Kitchen</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.ready ? "Ready" : "Preparing"}</td>

                                    <td className="px-6 py-4 text-sm text-gray-500"></td>
                                    <td className="px-6 py-4 text-sm text-gray-500"></td>


                                </tr>
                            )
                        })}

                    </React.Fragment>


                )
            })}




        </tbody>
    )
}