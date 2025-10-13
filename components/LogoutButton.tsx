"use client"

import { LogoutUser } from "@/server/mutations/user";
import { useRouter } from "next/navigation";

export default function LogoutButton(){
    const router = useRouter();

    async function handleSignOut(){
        // await clearCart();
        await LogoutUser();
        router.push("/auth/login")
    }
    return <button className="cursor-pointer hidden lg:block" onClick={handleSignOut}>Logout</button>
}