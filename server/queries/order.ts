"use server";

import { Category } from "@prisma/client";
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


export async function getCategoryStats(){
    const ordersItems = await prisma.orderItems.findMany({
        select:{
            quantity: true,
            product:{
                select:{
                    category: true
                }
            }
        }
    });

      const totals: Record<Category, number> = {
        Spirits: 0,
        Cocktails: 0,
        Beer: 0,
        Dessert: 0,
        Food: 0,
      };
    
      for (const order of ordersItems) {
        const category = order.product.category;
        totals[category] = (totals[category] || 0) + order.quantity;
      }
    
    const totalQuantity = Object.values(totals).reduce((sum, qty) => sum + qty, 0);
    
    
      const percentages: Record<Category, number> = {} as Record<Category, number>;
      (Object.keys(totals) as Category[]).forEach((category) => {
        percentages[category] = Number(((totals[category] / totalQuantity) * 100).toFixed(1));
      });
    
    const topCategory = Object.entries(percentages).reduce(
      (max, [category, value]) => (value > max.value ? { category, value } : max),
      { category: "", value: -Infinity }
    );

    return {totalQuantity, percentages, topCategory}
}



