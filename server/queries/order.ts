"use server";

import prisma from "../db/prisma";


export async function getOrder(orderNumber: number){

    const order = await prisma.order.findFirst({
        where:{orderNumber},
        include:{
            orderItems: true
        }
    });
    return order
};


export async function getOrders(){
    return await prisma.order.findMany()
}



