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
    const orders =  await prisma.order.findMany();

    const today = new Date();
today.setHours(0, 0, 0, 0);

const dailyOrders = orders.reduce((total, order) => {
  return order.createdAt >= today ? total + 1 : total;
}, 0);


const totalRevenue = orders.reduce((total, currentValue) =>{
    return total + currentValue.cost
  }, 0);

  const averageOrderValue = totalRevenue / orders.length || 0;

  return { dailyOrders, totalRevenue, averageOrderValue}
}


export async function getOrdersByCategory(){
    return await prisma.orderItems.findMany({
        select:{
            quantity: true,
            product:{
                select:{
                    category: true
                }
            }
        }
    })
}



