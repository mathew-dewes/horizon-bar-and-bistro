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