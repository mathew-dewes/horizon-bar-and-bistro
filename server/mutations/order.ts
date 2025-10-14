"use server";

import { redirect } from "next/navigation";
import { getUserId } from "../auth/session";
import prisma from "../db/prisma";
import { getCartItems } from "../queries/cart";
import { getTableNumber } from "../queries/table";
import { LogoutUser } from "./user";

interface OrderItem {
    productId: string;
    quantity: number;
}


export async function PlaceOrder() {
    const userId = await getUserId();
    if (!userId) return

    const [cartItems, orderNumber, tableNumber] = await Promise.all([getCartItems(),generateOrderNumber(), getTableNumber()])

    if (!tableNumber || !cartItems) return

    const orderItems: OrderItem[] = [];

    cartItems.forEach((quantity, productId) => {
        orderItems.push({ quantity, productId })

    });

    await prisma.order.create({
        data: {
            userId,
            orderItems: {
                create: orderItems

            },
            orderNumber,
            tableNumber

        }
    });

    await LogoutUser();
    redirect('/success?order=' + orderNumber)



}


export async function generateOrderNumber() {

    return Math.floor(1000 + Math.random() * 9000);


}