
import GoogleSignin from "./GoogleSignin";
import SpotifyLogin from "./SpotifyLogin";



export default function SocialProviders(){
    return (
        <div className="flex gap-4 justify-center mt-5">
            <GoogleSignin/>
            <SpotifyLogin/>
        </div>
    )
}