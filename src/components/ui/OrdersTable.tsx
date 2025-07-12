import React from "react";
import Button from "./Button";
import Link from "next/link";

type OrderItem = {
  id: string;
  productName: string;
  quantity: number;
  price: number;
};

type Order = {
  id: string;
  tableNumber?: string;
  customerName?: string;
  status: string;
  createdAt: string;
  items: OrderItem[];
};

export default function OrdersTable() {
  const exampleOrders: Order[] = [
    {
      id: "order1",
      tableNumber: "7",
      status: "pending",
      createdAt: "2025-07-10T08:30:00Z",
      items: [
        { id: "item1", productName: "Heineken", quantity: 2, price: 11 },
        { id: "item2", productName: "Fries", quantity: 1, price: 6.5 },
      ],
    },
    {
      id: "order2",
      tableNumber: "12",
      status: "ready",
      createdAt: "2025-07-10T09:00:00Z",
      items: [{ id: "item3", productName: "Margarita", quantity: 1, price: 15 }],
    },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2 text-left">Order No</th>
          <th className="border border-gray-300 p-2 text-left">Table</th>
          <th className="border border-gray-300 p-2 text-left">Status</th>
          <th className="border border-gray-300 p-2 text-left">Created At</th>
          <th className="border border-gray-300 p-2 text-left">Items</th>
          <th className="border border-gray-300 p-2 text-right">Total</th>
          <th className="border border-gray-300 p-2 text-right"></th>
        </tr>
      </thead>
      <tbody>
        {exampleOrders.map((order) => {
          const total = order.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          return (
            <tr key={order.id}>
              <td className="border border-gray-300 p-2">{order.id.slice(0, 6)}</td>
              <td className="border border-gray-300 p-2">{order.tableNumber ?? "N/A"}</td>
              <td className="border border-gray-300 p-2 capitalize">{order.status}</td>
              <td className="border border-gray-300 p-2">{new Date(order.createdAt).toLocaleString()}</td>
              <td className="border border-gray-300 p-2 max-w-xs">
                <ul className="list-disc pl-5">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.productName} x{item.quantity} (${(item.price * item.quantity).toFixed(2)})
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 p-2 text-right font-semibold">${total.toFixed(2)}</td>
              <td className="border border-gray-300 p-2 text-center font-semibold">
                <Link href={`/user/orders/${order.id}`}><Button text="View order"/></Link>
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
