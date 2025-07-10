import Link from "next/link";
import BeachBanner from "../components/layout/BeachBanner";
import Features from "../components/layout/Features";
import Button from "../components/ui/Button";


export default function Page(){
  return (
    <div>
      <BeachBanner text="Welcome to Horizon Bar and Bistro!"/>
      <p className="text-lg">Hey Matt!</p>
      <p>Welcome to our new online ordering system.</p>
      <div className="flex justify-center gap-20 mt-30">
      <Button text="Place order"/>
      <Link href={'/user/orders'}><Button text="View orders"/></Link>

      </div>
      <Features/>

    </div>
  )
}