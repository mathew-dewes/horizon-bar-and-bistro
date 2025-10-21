


import SideBar from "../../_components/Sidebar";
import OrderTable from "../_components/OrderTable";


export default  function ordersPage() {

    return (
        <div className="min-h-screen">
            <SideBar currentPath="/dashboard/orders/kitchen" />
            <main className="lg:ml-64 px-8 mt-10">
        

                <div className="space-y-6">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <h1 className="text-lg font-bold uppercase text-gray-900 p-6">Orders</h1>
               
        <OrderTable/>

                    </div>

    
                </div>
            </main>
        </div>
    )
}