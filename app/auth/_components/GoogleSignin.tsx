import { signInSocial } from "@/server/auth/login";
import GoogleIcon from "./GoogleIcon";



export default function GoogleSignin({tableNumber}:
    {tableNumber: string}
){
    return (
        <button type="button" 
        onClick={()=> signInSocial("google", tableNumber)}
        className="bg-gray-700 font-medium cursor-pointer p-3 w-full text-sm rounded-xl  flex justify-center items-center">
            <GoogleIcon/>
            Sign in with Google
         </button>
    )
}