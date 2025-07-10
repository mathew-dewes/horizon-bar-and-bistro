import BeachBanner from "./components/layout/BeachBanner";
import Button from "./components/ui/Button";
import SignInButton from "./components/ui/GoogleButton";

export default function Page(){
  return (
    <div>
      <BeachBanner text="Welcome to Horizon Bar and Bistro!"/>
      <p className="text-lg">Hey Matt!</p>
      <p>Welcome to our new online ordering system.</p>
      <div className="flex justify-center gap-20 mt-30">
      <Button text="Place order"/>
      <Button text="View orders"/>
      <SignInButton/>
      </div>
      <div className="mt-30">
            <h1 className=" text-2xl font-medium sm:text-center mb-5">Features</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3  justify-center gap-10 mt-10">
                <div className="p-5">
                    <h2 className="font-bold mb-1">Online Ordering:</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, magni?</p>
                </div>
                <div className="p-5">
                    <h2 className="font-bold mb-1">Order tracking:</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, magni?</p>
                </div>
                <div className="p-5">
                    <h2 className="font-bold mb-1">Inventory Management:</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, magni?</p>
                </div>
            </div>

        </div>

    </div>
  )
}