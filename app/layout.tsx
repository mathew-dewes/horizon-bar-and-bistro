import type { Metadata } from "next";
import { Poppins, Montserrat} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navigation/Navbar";




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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased  ${poppins.className} 
        ${montserrat.className}
        
        `}
      >
        
 <Navbar />


   

        <main className="mx-5 sm:mx-20">
    
        {children}
        </main>
        {/* <Footer/> */}


         
  
      </body>
    </html>
  );
}
