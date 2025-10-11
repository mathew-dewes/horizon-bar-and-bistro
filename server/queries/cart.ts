"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/prisma";


export async function getCartItems(){

    const userId = await getUserId();

    return await prisma.cartItems.findMany({
            where: {
                cart: { userId }
            },
            select: {
                quantity: true,
                productId: true,
                product:{
                    select:{
                        name: true,
                        price: true,
                        imageUrl: true
                    }
                }
            }
        });

        
}