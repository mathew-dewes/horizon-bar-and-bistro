

import { OrderStatus } from "@prisma/client";
import SideBar from "../../_components/Sidebar";
import OrderItemsTable from "../_components/OrderItemsTable";

import Filters from "./_components/Filters";



export default async function ordersPage({ searchParams }:
    { searchParams: Promise<{ page?: string, status?: OrderStatus }> }) {
    const params = await searchParams;
    const status = params.status;


    console.log(status?.toUpperCase());
    


    


    return (
        <div className="min-h-screen">
            <SideBar currentPath="/dashboard/orders/items" />
            <main className="lg:ml-64 px-8 mt-10">
        
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold">Order Items</h1>
                            <p className="text-sm">Manage your products and track inventory levels.</p>
                            <div className="mt-5">
                                <h2 className="font-semibold">Filter by:</h2>
                          <div className="mt-5 flex gap-3">
 <Filters filter={status ?? "Pending"}/>
                            </div>
                            </div>
  
                  
                        </div>
                    </div>
                </div>

                <div className="space-y-6">

                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
               

        <OrderItemsTable status={"COMPLETE"}/>

                    </div>
                    {/* {totalPages > 1 && <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            baseUrl="/dashboard/orders"
                            searchParams={{
                                q, pageSize: String(pageSize)
                            }}
                        />
                    </div>} */}

                </div>
            </main>
        </div>
    )
}