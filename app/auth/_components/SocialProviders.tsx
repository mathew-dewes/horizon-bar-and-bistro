
import GoogleSignin from "./GoogleSignin";
// import SpotifyLogin from "./SpotifyLogin";

// To do, Add spotify Logic after deployment



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