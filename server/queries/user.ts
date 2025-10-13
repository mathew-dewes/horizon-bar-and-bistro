"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/prisma";


export async function getUserInfo(){
        const userId = await getUserId();
        if (!userId) return

        const user = await prisma.user.findUnique({
            where:{
                id: userId
            }
        });

        return user;
}