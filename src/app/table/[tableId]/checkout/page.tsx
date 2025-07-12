import Button from "@/components/ui/Button";
import Link from "next/link";

export default async function CheckoutPage({params}:
    {params: Promise<{tableId: string}>}
){

    const {tableId} = await params;
    return (
        <div>
            <h1>Welcome to the checkout page! Your table number is {tableId}</h1>
            <div>
                <Link href={`/table/${tableId}/success`}><Button text="Place Order"/></Link>
            
            </div>
        </div>
    )
}

