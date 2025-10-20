"use server";

import { redirect } from "next/navigation";
import { getUserId } from "../auth/session";
import prisma from "../db/prisma";
import { getCartItems } from "../queries/cart";
import { getTableNumber } from "../queries/table";
import { LogoutUser } from "./user";
import { revalidatePath } from "next/cache";
import { OrderStatus } from "@prisma/client";



export async function PlaceOrder() {
    const userId = await getUserId();
    if (!userId) return

    const [cartItems, orderNumber, tableNumber] = await Promise.all([getCartItems(),generateOrderNumber(), getTableNumber()])

    if (!tableNumber || !cartItems) return


  const orderItems = Array.from(cartItems.entries()).map(([productId, { quantity }]) => ({
    quantity,
    productId,
  }));

    const totalCost = Array.from(cartItems.values()).reduce(
    (sum, { quantity, price }) => sum + quantity * price,
    0
  );

  const totalItems = Array.from(cartItems.values()).reduce(
  (sum, { quantity }) => sum + quantity,
  0
);
    await prisma.order.create({
        data: {
            userId,

            orderItems: {
                create: orderItems

            },
            orderNumber,
            tableNumber,
            cost: totalCost,
            totalItems: totalItems

        }
    });


 orderItems.forEach(async order => {
      await updateDateInventory(order.productId, order.quantity)
    });
    

   

    

    

    await LogoutUser();
    redirect('/success?order=' + orderNumber)



}

export async function checkOrder(id: string){
  const isReady = await prisma.orderItems.findFirst({
    where:{
      orderId: id,
      ready: false
    }
  });

    console.log(!isReady);

    if (!isReady){
      await prisma.order.update({
        data:{
          status: "READY"
        },
        where:{
          id
        }
      })
    } else {
         await prisma.order.update({
        data:{
          status: "INPROGRESS"
        },
        where:{
          id
        }
      })
    }
    



}


async function updateDateInventory(productId: string, value: number){
  await prisma.product.update({
    where:{
      id: productId
    },
    data:{
      inventoryAmount: {
        decrement: value
      }
    },
    
    
  })
}


export async function generateOrderNumber() {

    return Math.floor(1000 + Math.random() * 9000);


}


export async function toggleOrderItemReady(id: string, ready:boolean){
  console.log(ready);
  
  const order = await prisma.orderItems.update({
    data:{
      ready
    },
    where:{id},
    select:{
      order:{
        select:{
          id: true
        }
      }
    }
  });

  await checkOrder(order.order.id);
  revalidatePath('/dashboard/orders')
}


export async function toggleCompleted(id: string, status:OrderStatus){
 await prisma.order.update({
    data:{
     status
    },
    where:{id},

  });
    revalidatePath('/dashboard/orders')
}