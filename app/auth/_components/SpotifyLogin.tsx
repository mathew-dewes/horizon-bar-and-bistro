
// import { signInSocial } from "@/server/auth/login";
import SpotifyLogo from "./SpotifyLogo";

// Note, enable sign in with Spotify after deploying app
// Once domain is established, go to the spotify website and add it into the redirect

export default function SpotifyLogin(){
     return <button type="button"
    //   onClick={()=> signInSocial("spotify")} 
     className="
     bg-[#1ED760] w-full p-3 text-sm rounded-xl 
     font-medium flex justify-center items-center">
                    <SpotifyLogo/>
                Sign in with Spotify
             </button>
}