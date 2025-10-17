"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";

export async function updateInventory(productId: string, newQuantity: number){

try {
    await prisma.product.update({
    where:{
        id: productId
    },
    data:{
        inventoryAmount: newQuantity
    }
});

revalidatePath('/')
       return {
        status: "success", message: "User created successfully"
    }
} catch (error) {
    console.log(error);
    
               return {
          status: "error", message: "Server error found. Please try again later"
    }
}





}