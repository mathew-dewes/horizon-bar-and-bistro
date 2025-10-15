
import SalesByCategory from "./SalesByCatergory";
import TopSellingProducts from "./TopSellingProduct";
import { getOrders } from "@/server/queries/order";



export default async function KeyMetrics() {
  const { dailyOrders, totalRevenue, averageOrderValue} = await getOrders();




  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-bold uppercase text-gray-900 mb-6">
        Key Metrics
      </h2>
      <div>
        <div className="flex justify-center gap-20 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              ${totalRevenue.toFixed()}.00
            </div>
            <div className="text-sm text-gray-600">Total Revenue</div>

          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              ${averageOrderValue.toFixed()}.00
            </div>
            <div className="text-sm text-gray-600">Average order value</div>
   
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {dailyOrders}
            </div>
            <div className="text-sm text-gray-600">Orders Served Today</div>
    
          </div>
        </div>
        {/* Donut graphs */}
        <div className="mt-10 justify-evenly">
   
          <SalesByCategory/>
          <TopSellingProducts/>
 
  
       
        </div>
         

      </div>

    </div>
  )
}