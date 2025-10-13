"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/prisma";



export async function checkTable(tableNumber: string){
const table = await prisma.table.findFirst({
    where: {
        tableNumber
    }
});

return table

}


export async function assignTable(tableNumber: string){
    const userId = await getUserId();
    if (!userId) return;
    await prisma.user.update({
        data:{
           table:{
            connect:{
                tableNumber
            },
            update:{
                active: true
            }
           }
        },
        where:{
            id:userId
        }
    })
}