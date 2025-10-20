
import { getOrderDetails } from "@/server/queries/order";
import SideBar from "../../_components/Sidebar";
import SingleOrderItemsTable from "./_components/SingleOrderTable";



export default async function ordersPage({ params }:
    { params: Promise<{ id: string }> }) {



    const { id } = await params;

    console.log(id);

    const orderDetails = await getOrderDetails(id);

    console.log(orderDetails);

    const d = new Date(orderDetails!.createdAt);
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    let style;

    switch(orderDetails?.status){
        case "INPROGRESS":
            style = "orange"
            break;
        case "READY":
            style = "blue"
            break;
        default:
            style = "green"
    }

    return (
        <div className="min-h-screen">
            <SideBar currentPath={"/dashboard/orders"}  />
            <main className="lg:ml-64 px-8 mt-10">

                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold">Orders</h1>
                            <p className="text-sm">Manage your products and track inventory levels.</p>
                            {/* Add order info here */}
                            <div className="mt-5 flex flex-col gap-1">
                                <p>Order: {orderDetails?.orderNumber}</p>
                                <div className="flex items-center gap-2 my-2">
                                <p>Status:</p>
                                <div style={{backgroundColor: style}} className={`w-fit p-2 rounded-xl text-black font-semibold`}>{orderDetails?.status}</div>
                                </div>
                           
                                <p>Date: {orderDetails?.createdAt.toLocaleDateString()} - {hours + ":" + minutes}</p>

                                <p>Customer: {orderDetails?.user.name}</p>
                                <p>Table: {orderDetails?.tableNumber}</p>
                                <p>Sub total: ${orderDetails?.cost}</p>
                            </div>




                        </div>
                    </div>
                </div>

                <div className="space-y-6">

                    <div className="bg-white w-3/4 rounded-lg border border-gray-200 overflow-hidden">


                        <SingleOrderItemsTable orderId={id} />

                    </div>


                </div>
            </main>
        </div>
    )
}