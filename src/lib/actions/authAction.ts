"use server"

import { redirect } from "next/navigation";
import { createClientForServer } from "../supabase/server"


type OAuthProvider = 'google' | 'github' | 'facebook';

const signInWith = (provider: OAuthProvider) => async()=>{
const supabase = await createClientForServer();

const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;

const {data, error} = await supabase.auth.signInWithOAuth({
    provider,
    options:{
        redirectTo: auth_callback_url,
    }
    
})


if (error){
    console.error(error)
}
redirect(data.url!)

}




const siginInWithGoogle = signInWith('google');

const signOut = async() =>{
    const supabase = await createClientForServer();
    await supabase.auth.signOut();
    redirect('/login')
}

export {siginInWithGoogle, signOut }