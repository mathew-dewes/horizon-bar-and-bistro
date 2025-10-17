import { getStock } from "@/server/queries/products"
import EfficiencyStats from "./EfficiencyStats";

export default async function StockLevels(){

  const products = await getStock();
  
  
    return (
        <div className="bg-white rounded-lg p-6 flex flex-wrap gap-10">
          <EfficiencyStats/>
            <div className="space-y-3 mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 w-fit">
              {products.map((product, key) => {
                const stockLevel =
                  product.inventoryAmount === 0
                    ? 0
                    : product.inventoryAmount <= 5
                    ? 1
                    : 2;

                const bgColors = [
                  "bg-red-600",
                  "bg-yellow-600",
                  "bg-green-600",
                ];
                const textColors = [
                  "text-red-600",
                  "text-yellow-600",
                  "text-green-600",
                ];
                return (
                  <div
                    key={key}
                    className="flex  flex-col p-5 rounded-lg bg-gray-50"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${bgColors[stockLevel]}`}
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {product.name}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium ${textColors[stockLevel]}`}
                    >
                      {product.inventoryAmount} units
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    )
}