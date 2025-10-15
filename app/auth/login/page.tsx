

import { redirect } from "next/navigation";
import LoginForm from "../_components/LoginForm";
import { SessionCheck } from "@/server/auth/session";


export default async function page({ searchParams }:
    { searchParams: Promise<{ table: string }> }
) {
    const params = await searchParams;
    const tableNumber = params.table;

    await SessionCheck();
    
    if (!tableNumber || tableNumber == "undefined"){
        redirect('/auth/login?table=1')
    }

 




    return (
        <div>
            <div className="text-center">
                <h1 className="font-semibold text-2xl">Welcome to Horizon Bar & Bistro!</h1>
                <p className="max-w-150 mx-auto mt-5">To order from our tables you must login or register to place orders.
                    If you dont wish to create an account with us, you are more the welcome to sign in with your google or instagram account.
                </p>
                <p className="mt-5">Selected Table: {tableNumber}</p>
            </div>




            <LoginForm tableNumber={tableNumber} />

            <div>

            </div>

        </div>
    )
}