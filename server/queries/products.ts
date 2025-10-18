"use server";

import { Category } from "@prisma/client";
import prisma from "../db/prisma";



export async function getProductList(category: Category){
 
    const products = await prisma.product.findMany({
        select: {
            id: true, name: true, description: true, category: true, imageUrl: true, price: true, inventoryAmount: true
        },
        where:{
            category: category
        }
    });
    return products;
}

export async function getProductDetails(page: number){
  return await prisma.product.findMany({
    select:{
      id: true,
      name:true,
      price: true,
      inventoryAmount: true,
      category: true
    },
    take: 5,
    skip: (page - 1) * 5,
    orderBy:{
      inventoryAmount: "asc"
    }
  })
}

  //  where,
    //         orderBy: { createdAt: "desc" },
    //         skip: (page - 1) * pageSize,
    //         take: pageSize,

export async function getStock(){
    return await prisma.product.findMany({
        select:{
            name: true, inventoryAmount: true
        },
        orderBy:{
          inventoryAmount:"asc"
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


export async function getCategories(){
      return await prisma.product.findMany({
    select:{
      category: true,
    },

  });
}

export async function getSalesByCategory(){

}

export async function getTopSellingProducts(){
  const products = await prisma.orderItems.findMany({
    select:{
      quantity: true,
      product:{
        select:{
          name: true
        }
      }
    },
    orderBy:{
      quantity: "desc"
    },

  });

  return products
}


type ProductItem = {
  quantity: number;
  product: {
    name: string;
  };
};

type ProductSummary = {
  name: string;
  quantity: number;
  value: number;
  color: string
};

export async function getTopProductsWithOther(items: ProductItem[], topCount = 5): Promise<ProductSummary[]> {


  
      const colors = [
  "#FBBF24", // amber / beer
  "#EF4444", // red / spirits
  "#A855F7", // purple / dessert
  "#10B981", // green / food
  "#3B82F6", // blue / cocktails
  "#9CA3AF", // gray / other
];
  // 1️⃣ Aggregate quantities by product name
  const totalsMap: Record<string, number> = {};
  for (const item of items) {
    const name = item.product.name;
    totalsMap[name] = (totalsMap[name] || 0) + item.quantity;
  }

  // 2️⃣ Convert to array and sort descending by quantity
  const sorted = Object.entries(totalsMap)
    .map(([name, quantity]) => ({ name, quantity }))
    .sort((a, b) => b.quantity - a.quantity);

  // 3️⃣ Compute total quantity
  const totalQuantity = sorted.reduce((sum, item) => sum + item.quantity, 0);

  // 4️⃣ Separate top products and "Other"
  const topProducts = sorted.slice(0, topCount);
  const otherProducts = sorted.slice(topCount);

  const result: ProductSummary[] = topProducts.map((item, index) => ({
    ...item,
    value: Number(((item.quantity / totalQuantity) * 100).toFixed(1)),
    color: colors[index % colors.length], 
  }));


  if (otherProducts.length > 0) {
    const otherQuantity = otherProducts.reduce((sum, item) => sum + item.quantity, 0);
    result.push({
      name: "Other",
      quantity: otherQuantity,
      value: Number(((otherQuantity / totalQuantity) * 100).toFixed(1)),
      color: colors[colors.length - 1], 
    });
  }

  return result;
}


