
import { SalesInterval } from "@/server/queries/types";
import Link from "next/link";

export default async function SalesFilters({filterHref, filter}:{
    filterHref: string, filter: SalesInterval
}){
    

    return (
          <div className="flex gap-5 mt-5 flex-wrap">

       <Link className={`${filter === "hour" ? "pointer-events-none" : ""}`} href={filterHref + "filter=hour"}>
       <button className={`py-2 w-25 text-sm rounded font-semibold cursor-pointer 
        ${filter === "hour" ? "bg-sky-400 scale-110": "bg-gray-400 opacity-55 hover:opacity-100  hover:bg-sky-600"}`}>Hour</button></Link>
       <Link className={`${filter === "day" ? "pointer-events-none" : ""}`} href={filterHref + "filter=day"}>
       <button className={`w-25 py-2 text-sm rounded font-semibold cursor-pointer 
        ${filter === "day" ? "bg-sky-400 scale-110 ": "bg-gray-400 opacity-55 hover:opacity-100 hover:bg-sky-600"}`}>Day</button></Link>
       <Link className={`${filter === "month" ? "pointer-events-none" : ""}`} href={filterHref + "filter=month"}>
       <button className={`w-25 py-2 text-sm rounded font-semibold cursor-pointer 
        ${filter === "month" ? "bg-sky-400 scale-110 ": "bg-gray-400 opacity-55 hover:opacity-100 hover:bg-sky-600"}`}>Month</button></Link>
       <Link className={`${filter === "year" ? "pointer-events-none" : ""}`} href={filterHref + "filter=year"}>
       <button className={`w-25 py-2 text-sm rounded font-semibold cursor-pointer 
        ${filter === "year" ? "bg-sky-400 scale-110 ": "bg-gray-400 opacity-55 hover:opacity-100 hover:bg-sky-600"}`}>Year</button></Link>


     


        
    
          </div>
    )
}