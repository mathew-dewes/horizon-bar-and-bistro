import OrdersTable from "@/components/ui/OrdersTable";

export default function userOrdersPage(){

    // Display all logged in users orders
    return(
        <div>
            <h1>User orders go here</h1>
            <div className="mt-10">
                <OrdersTable/>
            </div>
        </div>
    )
}