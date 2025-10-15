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


export async function getOrdersByRange(range: Date){
      return await prisma.order.findMany({
    where:{
      createdAt:{
        gte: range

      }
    }, 
        select: {
      createdAt: true,
    },

    

  });

}





export async function getHourlySales(){
  
   const now = new Date();

  const timeRange = new Date(now.getTime() - 12 * 60 * 60 * 1000);
  const orders = await getOrdersByRange(timeRange)

  const hourlyData = Array.from({ length: 12 }).map((_, i) => {
    const hour = new Date(now.getTime() - (7 - i) * 60 * 60 * 1000).getHours(); // oldest to newest
    return { value: `${hour}:00`, orders: 0 };
  });

  orders.forEach(order => {
    const orderHour = order.createdAt.getHours();
    const hourObj = hourlyData.find(h => Number(h.value.split(':')[0]) === orderHour);
    if (hourObj) hourObj.orders += 1;
  });

  return hourlyData;


}


export async function getWeeklySales(){
  type DailyOrders = {
  value: string;      // e.g., "Mon", "Tue", or "2025-10-16"
  orders: number;
};

  const now = new Date();

  
  const timeRange = new Date(now.getTime() - 24 * 7 * 60 * 60 * 1000);

    const orders = await getOrdersByRange(timeRange);

    const dailyData: DailyOrders[] = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() - (7 - 1 - i));
    const dayLabel = date.toLocaleDateString("en-US", { weekday: "short" }); // Mon, Tue, etc.
    return { value: dayLabel, orders: 0 };
  });

    orders.forEach(order => {
    const orderDate = order.createdAt;
    const dayLabel = orderDate.toLocaleDateString("en-US", { weekday: "short" });
    const dayObj = dailyData.find(d => d.value === dayLabel);
    if (dayObj) dayObj.orders += 1;
  });

  return dailyData;
}
