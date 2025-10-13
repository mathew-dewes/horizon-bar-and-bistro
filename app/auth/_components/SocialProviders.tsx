
import GoogleSignin from "./GoogleSignin";
import SpotifyLogin from "./SpotifyLogin";



export default function SocialProviders({tableNumber}:
    {tableNumber: string}
){
    return (
        <div className="flex gap-4 justify-center mt-5">
            <GoogleSignin tableNumber={tableNumber}/>
            {/* <SpotifyLogin/> */}
        </div>
    )
}