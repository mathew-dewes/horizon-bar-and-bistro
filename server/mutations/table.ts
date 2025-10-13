"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/prisma";



export async function assignTable(tableNumber: string){
    const userId = await getUserId();
    if (!userId) return;
  await prisma.table.update({
    where: { tableNumber },
    data: {
      users: {
        connect: { id: userId },
      },

    },
  });
};

export async function unAssignTable(){
 const userId = await getUserId();
  if (!userId) return;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { table: true },
  });

  

  if (!user?.table.length) return;

  await prisma.user.update({
    where: { id: userId },
    data: {
      table: {
        set: [],
      },
    },
  });

  return user.tableId;
}




