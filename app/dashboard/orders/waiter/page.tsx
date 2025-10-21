
import { getOrderDetails } from "@/server/queries/order";
import SideBar from "../../_components/Sidebar";
import OrderDisplay from "../_components/OrderDisplay";
import WaitersOrderTable from "./_components/WaitersOrderTable";

export default async function ordersPage({searchParams}:
    {searchParams: Promise<{order: string}>}
) {

    const order = (await searchParams).order;

    const orderDetails = await getOrderDetails(order);

    

    
    return (
        <div className="min-h-screen">
            <SideBar currentPath="/dashboard/orders/waiter" />
            <main className="lg:ml-64 px-8 mt-10">
        

                <div className="space-y-6">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <h1 className="text-lg font-bold uppercase text-gray-900 p-6">Orders - Waiter</h1>
               
        <WaitersOrderTable orderId={order}/>

                    </div>
                    {order &&  
                    <div className="bg-white rounded-lg border w-3/4 border-gray-200 overflow-hidden">
                        <div className="p-6">
                                    <h1 className="text-lg font-bold uppercase text-gray-900">Order: {orderDetails?.orderNumber}</h1>
                            <div className="grid grid-cols-3 mt-2 gap-3">
        <p className="text-md text-gray-900 font-semibold">Status: {orderDetails?.status}</p>
        <p className="text-md text-gray-900 font-semibold">Table: {orderDetails?.tableNumber}</p>
        <p className="text-md text-gray-900 font-semibold">Total items: x {orderDetails?.totalItems}</p>
        <p className="text-md text-gray-900 font-semibold">Customer: {orderDetails?.user.name}</p>
                            </div>


        
                        </div>
            
   
               
        <OrderDisplay orderId={order}/>

                    </div>}
                   

           

                </div>
            </main>
        </div>
    )
}