import Button from "@/components/Button";
import { getOrder } from "@/server/queries/order";
import Link from "next/link";

export default async function page({ searchParams }:
  { searchParams: Promise<{ order: string, }> }
){

const params = await searchParams;
  const orderNumber = params.order;

  
    const order = await getOrder(Number(orderNumber));

    
    
    return (
        <div>
            <h1 className="text-xl font-semibold">Success! Your order was placed</h1>
            <p className="mt-2">A waiter will be with your shortly with your order</p>
            <div className="mt-10 flex gap-5">
                <Link href={`/auth/login?table=${order?.tableNumber}`}><Button text="Return to Login"/></Link>
           
                <Button text="View Dashboard"/>

            </div>
        </div>
    )
}