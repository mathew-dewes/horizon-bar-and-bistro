import { getSession } from "@/server/auth/session";
import { BarChart3, Package, Plus } from "lucide-react";
import Link from "next/link";

export default async function SideBar({ currentPath = '/dashboard', tableNumber }:
    { currentPath: string, tableNumber?: string }
) {

    const session = await getSession();

    function isLoggedIn() {
        if (session) {
            return "Logout"
        } else {
            return "Go back to Login"
        }
    }

    const navigation = [
        { name: "Metrics", href: "/dashboard", icon: BarChart3 },
        { name: "Inventory", href: "/dashboard/products", icon: Plus },


    ];


    return <div className="absolute let-0 top-55 bg-gray-600 rounded-2xl text-white w-64 min-h-screen p-6 z-10 mt-35 hidden lg:block">

        <nav className="space-y-1">
            <div className="text-sm font-semibold text-gray-400 uppercase mb-2">Insights</div>
            {navigation.map((item, key) => {

                const IconComponent = item.icon;
                const isActive = currentPath === item.href;

                return <Link
                    className={`flex items-center space-x-3 py-2 px-3 rounded-lg 
                        ${isActive ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}
                    key={key}
                    href={item.href}>
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm">{item.name}</span>
                </Link>
            })}
            <div className="text-sm font-semibold text-gray-400 uppercase mb-2 mt-5">Orders</div>
    
            <Link
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg 
                        ${currentPath === "/dashboard/orders/waiter" ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}

                href={"/dashboard/orders/waiter"}>
                <Package />
                <span className="text-sm">Waiter</span>
            </Link>
            <Link
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg 
                        ${currentPath === "/dashboard/orders/kitchen" ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}

                href={"/dashboard/orders/kitchen"}>
                <Package />
                <span className="text-sm">Kitchen</span>
            </Link>
            <Link
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg 
                        ${currentPath === "/dashboard/orders/bar" ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}

                href={"/dashboard/orders/bar/"}>
                <Package />
                <span className="text-sm">Bar</span>
            </Link>
                    <Link
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg 
                        ${currentPath === "/dashboard/orders" ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}

                href={"/dashboard/orders/"}>
                <Package />
                <span className="text-sm">All</span>
            </Link>

            <Link
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg mt-10 
                        ${currentPath === "dashboard/orders" ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}

                href={`/auth/login?table=${tableNumber}`}>
                <Package />
                <span className="text-sm">{isLoggedIn()}</span>
            </Link>
            


        </nav>


    </div>
}