"use server";

import z from "zod";
import { loginUserSchema, registerUserSchema } from "../validation/schema";
import { auth } from "../auth/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function RegisterUser(values: z.infer<typeof registerUserSchema>){
        const validate = registerUserSchema.safeParse(values);
    
        if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

        const { name, email, password } = values;

        console.log(name, email, password);

        try {
        await auth.api.signUpEmail({
        body: {
            email, password, name, callbackURL: "/",
        }
    });

    revalidatePath('/')

    return {status: "success", message: "User created successfully"}
        } catch (error) {
              if (error instanceof APIError) {
        console.log(error.message, error.status)
            return {
        status: "error", message: error.message
    }

    } else {
        console.log(error);
        
        return {
        status: "error", message: "There was an error"
    }
    }
            
        }
        
        
}



export async function LoginUser(values: z.infer<typeof loginUserSchema>) {


    const validate = loginUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const { email, password } = values;

    try {
         await auth.api.signInEmail({
        body: {
            email, password
        }

        
    });
   
    
   revalidatePath('/')
        return {
        status: "success", message: "User created successfully"
    }
    } catch (error) {
          if (error instanceof APIError) {
        console.log(error.message, error.status)
            return {
        status: "error", message: error.message
    }

    } else {
        console.log(error);
        
        return {
        status: "error", message: "There was an error"
    }
    }
           
        
        
    }






}

export async function LogoutUser(){
        const result = await auth.api.signOut({
        headers: await headers()
    });

    return result;
}