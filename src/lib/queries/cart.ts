"use server";

import { Database } from "@/types/supabase";
import { createClientForServer } from "../supabase/server";
import { UserCart } from "@/types/cart";
type CartItem = Database["public"]["Tables"]["cart_items"]["Row"];


export async function getUserCart(user_id: string)
{
    const supabase = await createClientForServer();
    const {data, error} = await supabase.from("cart").select("id, cart_items(id, quantity, products(id, name, image_url, price))").eq("user_id", user_id).eq("status", "active");
  if (error) {
    console.error("Error fetching cart:", error.message);
    return [];
  }

  return (data ?? []) as UserCart[];
}

export async function addToCart(user_id: string, product_id: string) {
    const supabase = await createClientForServer();


    const activeCart = await getActiveCart(user_id);
    const cart = activeCart ?? await CreateCart(user_id);
    if (!cart) {
        throw new Error("Failed to retrieve or create a cart.");
    }


    const existingItems = await checkExistingItems(product_id, cart.id);
    const existingItem = existingItems?.[0];
    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    const { error } = await supabase.from("cart_items").upsert({ cart_id: cart?.id, product_id, quantity }, { onConflict: "cart_id, product_id" });
    if (error) {
        console.error(error);
    } else {
        console.log("Product was successfully added to cart.");
    }

}











// Helpers


async function getActiveCart(user_id: string) {
    const supabase = await createClientForServer();
    const { data: cart, error } = await supabase.from("cart").select("id, cart_items(quantity)").eq("user_id", user_id).eq("status", "active").maybeSingle();
    if (error) {
        console.error(error)
    }
    return cart;

}




export async function CreateCart(user_id: string) {
    const supabase = await createClientForServer();
    const { data: cart, error } = await supabase.from("cart").insert({ user_id, status: "active" }).select("id, cart_items(quantity)").maybeSingle();
    if (error) {
        console.log("Errror creating cart in database:", error);
    } else {
        return cart;

    }
}



export async function checkExistingItems(product_id: string, cart_id: string): Promise<CartItem[]> {
    const supabase = await createClientForServer();
    const { data: existingProduct, error } = await supabase.from("cart_items").select("*").eq("product_id", product_id).eq("cart_id", cart_id);

    if (error) {
       console.error(error);
       return []
    } else {
        return existingProduct

    }
}
