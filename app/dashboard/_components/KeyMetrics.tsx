import { TrendingUp } from "lucide-react";
import SalesByCategory from "./SalesByCatergory";
import TopSellingProducts from "./TopSellingProduct";

export default async function KeyMetrics() {

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
              $212.05
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
              $15
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
              1
            </div>
            <div className="text-sm text-gray-600">Low Stock</div>
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