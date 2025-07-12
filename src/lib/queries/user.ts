"use server";

import { createClientForServer } from "@/lib/supabase/server";


export async function getUserFromSession(){
    const supabase = await createClientForServer();
    const user = await supabase.auth.getUser();
    return user;
}