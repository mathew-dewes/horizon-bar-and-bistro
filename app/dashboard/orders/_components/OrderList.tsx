
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
        }
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
           


                )
            })}




        </tbody>
    )
}