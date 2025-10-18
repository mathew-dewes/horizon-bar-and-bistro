"use client"


// import { Logout } from "@/server/mutations/auth";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { dashboardRoutes, pageRoutes } from "../Navbar";
import LogoutButton from "@/components/LogoutButton";



type ButtonProps = {
     isMenuOpen: boolean;
     onClose: () => void;

     
};
export default function MobileMenuLinks({ isMenuOpen, onClose }: ButtonProps) {

     const pathName = usePathname();

     let routes;

     if (pathName.startsWith('/dashboard')){
          routes = dashboardRoutes;
     } else{
          routes = pageRoutes;
     }



     


 

     return (
          <div className={`p-5 absolute mt-10 xl:hidden top-20 left-0 w-full bg-sky-500 flex flex-col item-center h-fit gap-6 font-semibold text-lg shadow-lg
                transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
               style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
       
               
                    {routes.map((route, key)=>{
                         return    <Link key={key} onClick={onClose} 
              className={`list-none font-light w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer ${pathName == route.href ? "underline underline-offset-5 font-semibold" : ""}`} href={route.href}>{route.text}</Link>
                    })}
<LogoutButton/>
       

      
       

 




          </div>
     )
}