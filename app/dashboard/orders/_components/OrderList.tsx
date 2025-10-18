
"use client"

import React from "react";
import CompleteCheckBox from "./CompleteCheckBox";
import { OrderStatus } from "@prisma/client";



export default function OrderList({ orders }: {
    orders: {
        createdAt: Date,
        orderNumber: number,
        tableNumber: string,
        status: OrderStatus,
        orderItems: {
            quantity: number,
            ready: boolean,
            product: { name: string }
        }[],
        user: {
            name: string,
        }
    }[]
}) {



    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, key) => {

                console.log(order);
                

const d = new Date(order.createdAt);
const day = String(d.getDate()).padStart(2, "0");
const month = String(d.getMonth() + 1).padStart(2, "0");
const hours = String(d.getHours()).padStart(2, "0");
const minutes = String(d.getMinutes()).padStart(2, "0");
const date = day + "/" + month + " - " +  hours + ":" +  minutes;

                return (
                    <React.Fragment key={key} >
                        {/* Order goes here */}
                        <tr className="hover:bg-gray-50">

                            <td className="px-6 py-4 text-sm text-black">{date}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.orderNumber}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.user.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.tableNumber}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.orderItems[0].quantity}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 font-semibold">PENDING</td>
                            {/* <td className="px-6 py-4 text-sm text-gray-500"> */}
                            {/* <CompleteCheckBox orderId={order.order.id} /> */}
                            {/* </td> */}



                        </tr>

                        <tr className="bg-gray-50">
                            {/* Order Items goes here with mark complete checkbox */}
                            <td className="px-6 py-4 text-sm text-gray-500">-</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Cheese cake</td>
                            <td className="px-6 py-4 text-sm text-gray-500">QTY: 3</td>
                            <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-3">Mark Complete<CompleteCheckBox orderId={"cmgwuoeiy0003uhdciaon96oa"} /></td>
                            <td className="px-6 py-4 text-sm text-gray-500"></td>
                        </tr>
                    </React.Fragment>
                )
            })}




        </tbody>
    )
}