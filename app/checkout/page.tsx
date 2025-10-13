import Button from "@/components/Button";
import CartTable from "./_components/CartTable";
import Link from "next/link";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import CancelButton from "./_components/CancelButton";


export default function page(){
    return (
        <div>
            <h1 className="text-xl font-semibold">Cart:</h1>
            <p>Please confirm you cart below:</p>
            <Suspense fallback={<LoadingSpinner text="Loading cart..."/>}>
            <CartTable/>
            </Suspense>

            <div className="mt-5 flex gap-2">
                <Link href={'/confirmation'}><Button text="Confirm"/></Link>
                <CancelButton />
 

            </div>
     
        </div>
    )
}