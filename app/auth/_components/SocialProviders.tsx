import GoogleSignin from "./GoogleSignin";
import IGsignin from "./InstagramSignin";



export default function SocialProviders(){
    return (
        <div className="flex gap-2 justify-center mt-5">
            <GoogleSignin/>
            <IGsignin/>
        </div>
    )
}