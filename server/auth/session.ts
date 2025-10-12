"use server"

import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export async function authProtection(){
    const session = await auth.api.getSession({headers: await headers()});
    
    if (!session){
        redirect('/auth/login')
    }
};


export async function SessionCheck(){
        const session = await auth.api.getSession({headers: await headers()});
    if (session) redirect('/');
};

export async function getSession(){
        return await auth.api.getSession({headers: await headers()});
}

export async function getUserId(){
        const user = await auth.api.getSession({headers: await headers()});
    return user?.user.id
}