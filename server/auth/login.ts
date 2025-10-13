"use server";

import { redirect } from "next/navigation";
import { auth } from "./auth";


export async function signInSocial(provider: "spotify" | "google", tableNumber: string){
                const {url} = await auth.api.signInSocial({
        body: {
            provider, callbackURL: `/?category=Beer&table=${tableNumber}&assign=true`
        }

        
    });


    if (url){
        redirect(url)
    }

   

}