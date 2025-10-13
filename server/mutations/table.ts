"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/prisma";



export async function checkTable(tableNumber: string){
const table = await prisma.table.findUnique({
    where: {
        tableNumber
    }
});

 if (!table) return null;

 if (table.active && table.timeOut && new Date() > table.timeOut){

     await clearTable(tableNumber);
    return { ...table, active: false, user: null, timeOut: null };
 }
   return table;

};


export async function clearTable(tableNumber: string){
          await prisma.table.update({
            where:{tableNumber},
            data:{
                active: false, timeOut: null,
            }
        })
};





export async function assignTable(tableNumber: string){
    const userId = await getUserId();
    if (!userId) return;

      const now = new Date();
    await prisma.user.update({
        data:{
           table:{
            connect:{
                tableNumber
            },
            update:{
                active: true,
                timeOut: new Date(now.getTime() + 60 * 60 * 1000
            )
            }
           }
        },
        where:{
            id:userId
        }
    })
}


export async function cancelTable(){
        const userId = await getUserId();
    if (!userId) return;

    await prisma.table.update({
        data:{active:false, userId:null, timeOut: null},
        where: {userId}
    })
}


