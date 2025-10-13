"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/prisma";

export async function getTableNumber(){
    const userId = await getUserId();
    if (!userId) return

    const table =  await prisma.user.findUnique({
        where: {
            id: userId
        },
        select:{
            tableId: true
        }
    });

    return table?.tableId
}