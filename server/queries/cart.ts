"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/prisma";


export async function getCartList(){

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


export async function getCartItems(){
        const userId = await getUserId();
        if (!userId) return;
        const cartItems = await prisma.cartItems.findMany({
        where: {
            cart: { userId }
        },
        select: {
            quantity: true,
            productId: true
        }
    });

    return new Map(cartItems.map(item => [item.productId, item.quantity]));
}



export async function cartEmpty(){
        const userId = await getUserId();
        const cart =  await prisma.cart.findUnique({
            where:{
                userId
            },
            select:{
                cartItems:true,
                
            }
        });


        if (cart?.cartItems.length === 0){
            return true
        } else {
            return false
        }


 
}