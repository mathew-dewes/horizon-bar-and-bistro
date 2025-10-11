"use server";

import prisma from "../db/prisma";



export async function getProductList(){
    const products = await prisma.product.findMany({
        select: {
            id: true, name: true, description: true, category: true, imageUrl: true, price: true
        }
    });
    return products;
}