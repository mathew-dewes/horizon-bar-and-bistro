"use server";

import { redirect } from "next/navigation";
import { auth } from "./auth";

export async function signInSocial(provider: "spotify" | "google"){
                const {url} = await auth.api.signInSocial({
        body: {
            provider, callbackURL: "/"
        }

        
    });

    if (url){
        redirect(url)
    }

   

}