
import SideBar from "../_components/Sidebar";
import Pagination from "./_components/Pagination";
import { getOrderItemsCount, getOrderList } from "@/server/queries/order";
import OrderList from "./_components/OrderList";



export default async function ordersPage({ searchParams }:
    { searchParams: Promise<{ q?: string, page?: string }> }) {
    const params = await searchParams;
    const q = (params.q ?? "").trim();
    const orderCount = await getOrderItemsCount()
    const pageSize = 5;
    const page = Math.max(1, Number(params.page ?? 1));

    const orders = await getOrderList(page, pageSize);

    console.log(orders[0]);
    
    



    const totalPages = Math.max(1, Math.ceil(orderCount / pageSize));





    return (
        <div className="min-h-screen">
            <SideBar currentPath="/dashboard/orders" />
            <main className="ml-64 px-8 mt-10">
        
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold">Orders</h1>
                            <p className="text-sm">Manage your products and track inventory levels.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">

                    {/* Products table */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Table</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">QTY</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">STATUS</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Mark complete</th>
                                </tr>
                            </thead>
  
            <OrderList orders={orders}/>
               
                        </table>

                    </div>
                    {totalPages > 1 && <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            baseUrl="/dashboard/orders"
                            searchParams={{
                                q, pageSize: String(pageSize)
                            }}
                        />
                    </div>}

                </div>
            </main>
        </div>
    )
}