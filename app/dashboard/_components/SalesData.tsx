import Button from "@/components/Button";
import ProductsChart from "./ProductsChart";
import Link from "next/link";
import { getOrdersOverTime } from "@/server/queries/order";
import { SalesInterval } from "@/server/queries/types";

export default async function SalesData({tableNumber, filter}:{
  tableNumber: string, filter: SalesInterval, 
}){


  const orders = await getOrdersOverTime(filter);

  
  
  
  const filterHref = tableNumber ? `/dashboard?table=${tableNumber}&` : 
  `/dashboard&`
    return (
         <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center text-black justify-between mb-6">
                      <h2 className="text-lg font-bold uppercase text-gray-900">{filter || "hour"}ly sales</h2>
                    </div>
                    <div className="h-48">
                      <ProductsChart orders={orders}/>
                    </div>
                    <div className="mt-5">
          <h1 className="text-black font-semibold uppercase">Filter orders by:</h1>
          <div className="flex gap-5 mt-2">

       <Link href={filterHref + "filter=hour"}><Button text="Hour"/></Link>
       <Link href={filterHref + "filter=day"}><Button text="Day"/></Link>
       <Link href={filterHref + "filter=month"}><Button text="Month"/></Link>
       <Link href={filterHref + "filter=year"}><Button text="Year"/></Link>

        
    
          </div>
                    </div>
          
                  </div>
    )
}