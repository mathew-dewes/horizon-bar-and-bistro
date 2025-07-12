"use server"

import { createClientForServer } from "@/lib/supabase/server"

export async function getProducts(){
    const supabase = await createClientForServer();
    const {data, error} = await supabase.from("products").select("id, image_url, name, description, price");
    return{
        error: error?.message,
        products: data ?? [], 
    }
}
