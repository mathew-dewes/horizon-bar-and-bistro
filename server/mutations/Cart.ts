"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db/prisma";




export async function addToCart(productId: string){
let cart;
cart = await activeCart();

if (!cart){
 cart = await createCart(productId);
} else{


const product = await checkProduct(productId, cart.id);

if (product){
    await prisma.cartItems.update({
    data:{quantity: {increment: 1}}, where:{
        cartId_productId:{cartId: cart.id, productId}
    }
});

    
} else {
await prisma.cartItems.create({
data:{
    cartId: cart.id, productId, quantity: 1
}
    
});
}


}

revalidatePath('/')



}




export async function removeFromCart(productId: string){

const cart = await activeCart();

if (!cart) return;


const product = await checkProduct(productId, cart.id);

if (!product) return;

if (product?.quantity != 1){
        await prisma.cartItems.update({
    data:{quantity: {decrement: 1}}, where:{
        cartId_productId:{cartId: cart.id, productId}
    }
});
    
} else{
    console.log("Product qty at 1. Deletion needed");
    await prisma.cartItems.delete({
        where:{cartId_productId: {cartId: cart.id, productId}}
    })
    
}

revalidatePath('/')



    
}






export async function checkProduct(productId: string, cartId: string){
    return await prisma.cartItems.findUnique(
        {where: {cartId_productId:{cartId, productId}}}
    )
}

export async function activeCart(){
    return await prisma.cart.findUnique(
        {where: {userId: "123" }}
    );

    
}

export async function createCart(productId: string){
    await prisma.cart.create({
        data: {user:{connect:{id: "123"}}, cartItems:{
            create:{
                product:{
                    connect: {id: productId},
                },
                quantity: 1
            }
        }}
    });
    console.log("A new cart was created");
    
}