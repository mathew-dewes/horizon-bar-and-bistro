"use server";

import { Category } from "@prisma/client";
import prisma from "../db/prisma";



export async function getProductList(category: Category){
 
    const products = await prisma.product.findMany({
        select: {
            id: true, name: true, description: true, category: true, imageUrl: true, price: true
        },
        where:{
            category: category
        }
    });
    return products;
}


export async function getStock(){
    return await prisma.product.findMany({
        select:{
            name: true, inventoryAmount: true
        }
    });
}


export async function getEffciencyStats(){
          const products = await getStock();
  
      const totalProducts = products.length;
  
      const inStockCount = products.filter((p) => Number(p.inventoryAmount) > 5).length;
    const lowStockCount = products.filter(
      (p) => Number(p.inventoryAmount) <= 5 && Number(p.inventoryAmount) >= 1
    ).length;
  
      const outOfStockCount = products.filter(
      (p) => Number(p.inventoryAmount) === 0
    ).length;
  
      const inStockPercentage =
      totalProducts > 0 ? Math.round((inStockCount / totalProducts) * 100) : 0;
    const lowStockPercentage =
      totalProducts > 0 ? Math.round((lowStockCount / totalProducts) * 100) : 0;
    const outOfStockPercentage =
      totalProducts > 0 ? Math.round((outOfStockCount / totalProducts) * 100) : 0;

      return {inStockPercentage, lowStockPercentage, outOfStockPercentage}
}