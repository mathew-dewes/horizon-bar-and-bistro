import { getOrder } from "@/server/queries/order";
import SideBar from "../../_components/Sidebar";
import OrderItems from "./_components/OrderItems";


export default async function page({params}:{
    params: Promise<{id: string}>
}) {

    const {id} = await params;

    const order = await getOrder(id);



    
    return (
        <div className="min-h-screen">
            <SideBar currentPath="/dashboard/orders" />
            <main className="lg:ml-64 px-8 mt-10">
        

                <div className="space-y-6">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden p-6">
                        <h1 className="text-lg font-bold uppercase text-gray-900">Order: {order?.orderNumber}</h1>
                        <div className="flex flex-col gap-1 my-5">
                  <p className="uppercase text-gray-900">Date: {order?.createdAt.toLocaleDateString()}</p>
                        <p className="uppercase text-gray-900">Table: {order?.tableNumber}</p>
                        <p className="uppercase text-gray-900">Total items: {order?.totalItems}</p>
                        <p className="uppercase text-gray-900">Total cost: ${order?.cost}</p>
                        <p className=" text-gray-900">Customer: {order?.user.name}</p>
                        </div>
      
             
               


                    </div>
                    <div>
                       
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden w-1/2">
                       <h1 className="text-lg font-bold uppercase p-6 text-black">order items</h1>
                                        <OrderItems orderId={id}/>
                    </div>
            


           

                </div>
            </main>
        </div>
    )
}