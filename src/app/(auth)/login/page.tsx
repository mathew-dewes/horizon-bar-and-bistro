import Features from "@/components/layout/Features";
import Button from "@/components/ui/Button";
import GithubButton from "@/components/ui/GithubButton";
import GoogleButton from "@/components/ui/GoogleButton";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mt-10">
      <p>Welcome to HB Bristo!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, fugit iusto ipsa hic enim quasi impedit odit quae praesentium.</p>
      <div className="sm:w-120 mt-20 mx-auto">
        <h1 className="text-center text-2xl font-black">Sign in:</h1>
        <div className="mt-8 text-center sm:flex sm:justify-between sm:justify-items-center">
          <div className="my-5 sm:my-0">
            <GoogleButton />
          </div>
          <div>
            <GithubButton />
          </div>


        </div>
        <form action="">

          <div className="flex flex-col gap-1 items-center mt-5">
            <label className="font-semibold text-lg sm:text-xl" htmlFor="">Email:</label>
            <input className="bg-light-500 rounded text-black font-semibold h-10 indent-1.5 sm:w-80" type="text" placeholder="Enter email" />

          </div>
          <div className="flex flex-col gap-1 items-center mt-5">
            <label className="font-semibold text-lg sm:text-xl" htmlFor="">Password:</label>
            <input className="bg-light-500 rounded text-black font-semibold h-10 indent-1.5 sm:w-80" type="text" placeholder="Enter password" />

          </div>
          <p className="mx-auto mt-5 sm: text-sm sm:text-lg">Dont have an account? Click on Register to set up an account.</p>
          <div className="flex justify-center gap-10 mt-5">

            <Button text="Sign in" />
            <Link href={'/register'}><Button text="Register" /></Link>
          </div>





        </form>
      </div>
      <Features />

    </div>
  )
}