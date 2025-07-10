import Button from "@/app/components/ui/Button";
import GithubButton from "@/app/components/ui/GithubButton";
import GoogleButton from "@/app/components/ui/GoogleButton";
import Link from "next/link";

export default function LoginPage(){
  return (
    <div className="mt-10">
                                <div className="w-120 mt-20 mx-auto">
                                  <h1 className="text-center text-2xl font-black">Sign in:</h1>
                                  <div className="mt-8 flex justify-between justify-items-center">
                    <GoogleButton/>
                    <GithubButton/>
                          </div>
                          <form action="">
                            <div>
<div className="flex flex-col gap-1 items-center mt-5">
                          <label className="font-semibold" htmlFor="">Email:</label>
                            <input className="bg-light-500 rounded text-black font-semibold h-10 indent-1.5 w-80" type="text" placeholder="Enter email" />
                        
                            </div>
                            <div className="flex flex-col gap-1 items-center mt-5">
                          <label className="font-semibold" htmlFor="">Password:</label>
                            <input className="bg-light-500 rounded text-black font-semibold h-10 indent-1.5 w-80" type="text" placeholder="Enter password" />
                        
                            </div>
                          <p className="mx-auto mt-5 w-80">Dont have an account? Click on Register to set up an account.</p>
                          <div className="flex justify-center gap-10 mt-5">
                
                            <Button text="Sign in"/>
                            <Link href={'/register'}><Button text="Register"/></Link>
                          </div>
                            </div>
                            
                    
                           
                          </form>
                                </div>
                     
                          </div>
  )
}