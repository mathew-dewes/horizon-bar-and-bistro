import Features from "@/components/layout/Features";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage(){
  return (
    <div className="mt-10">
                                <div className="w-120 mt-20 mx-auto">
                                  <h1 className="text-center text-2xl font-black">Sign up:</h1>
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
                            <Button text="Sign Up"/>
                            <Link href={'/login'}><Button text="Go back to Login"/></Link>
                       
                          </div>
                            </div>
                            
                    
                           
                          </form>
                                </div>
                     <Features/>
                          </div>
  )
}