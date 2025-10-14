import { TrendingUp } from "lucide-react";
import SalesByCategory from "./SalesByCatergory";
import TopSellingProducts from "./TopSellingProduct";
import { getOrders } from "@/server/queries/order";

export default async function KeyMetrics() {

  const orders = await getOrders();

  console.log(new Date());
  

const today = new Date();
today.setHours(0, 0, 0, 0); // start of today (midnight)

const dailyOrders = orders.reduce((total, order) => {
  // if order.createdAt is today, increment total
  return order.createdAt >= today ? total + 1 : total;
}, 0);


  


  

  const totalRevenue = orders.reduce((total, currentValue) =>{
    return total + currentValue.cost
  }, 0);

  const averageOrderValue = totalRevenue / orders.length || 0;
  


  
  

  // To do -> Get product data to populate sales by category
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-bold uppercase text-gray-900 mb-6">
        Key Metrics
      </h2>
      <div>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              ${totalRevenue}.00
            </div>
            <div className="text-sm text-gray-600">Total Revenue</div>
            <div className="flex items-center justify-center mt-1">
              <span className="text-sm text-green-600">
                + 1
              </span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              ${averageOrderValue}.00
            </div>
            <div className="text-sm text-gray-600">Average order value</div>
            <div className="flex items-center justify-center mt-1">
              <span className="text-sm text-green-600">
                +$1
              </span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {dailyOrders}
            </div>
            <div className="text-sm text-gray-600">Orders Served Today</div>
            <div className="flex items-center justify-center mt-1">
              <span className="text-sm text-green-600">+1</span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
            </div>
          </div>
        </div>
        {/* Donut graphs */}
        <div className="mt-10 flex justify-evenly">
   
          <SalesByCategory/>
          <TopSellingProducts/>
 
  
       
        </div>
         

      </div>

    </div>
  )
}