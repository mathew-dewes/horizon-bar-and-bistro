import type { Metadata } from "next";
import { Poppins, Montserrat} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import BeachBanner from "@/components/BeachBanner";
import { getSession } from "@/server/auth/session";


const poppins = Poppins({
 subsets:["latin"],
 variable:'--font-poppins', weight: ['300', '400', '500', '600'],
 display: 'swap'
})
const montserrat = Montserrat({
 subsets:["latin"],

 display: 'swap'
})

export const metadata: Metadata = {
  title: "Horizon Bar & Bistro",
  description: "Come enjoy a cold one at HB Bristo!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

      const session = await getSession();
  return (
    <html lang="en">
      <body
        className={`antialiased  ${poppins.className} 
        ${montserrat.className}
        
        `}
      >
        
<Navbar session={session}/>
 <BeachBanner/>



        <main className="mx-5 sm:mx-20">
    
        {children}
        </main>
       <footer className="h-30">

       </footer>


         
  
      </body>
    </html>
  );
}
