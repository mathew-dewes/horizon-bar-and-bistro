
import LoginForm from "../_components/LoginForm";
import { SessionCheck } from "@/server/auth/session";


export default async function page(){

    await SessionCheck();
    return (
        <div>
            <div className="text-center">
                        <h1 className="font-semibold text-2xl">Welcome to Horizon Bar & Bistro!</h1>
                        <p className="max-w-150 mx-auto mt-5">To order from our tables you must login or register to place orders.
                            If you dont wish to create an account with us, you are more the welcome to sign in with your google or instagram account. 
                        </p>
                       <p className="mt-5">Selected Table: 1</p>
            </div>

               
          

        <LoginForm/>
        <div>
      
        </div>

        </div>
    )
}