import ProductsChart from "./ProductsChart";

export default function WeeklySales(){
    return (
         <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center text-black justify-between mb-6">
                      <h2 className="text-lg font-bold uppercase text-gray-900">Total weekly sales</h2>
                    </div>
                    <div className="h-48">
                      <ProductsChart/>
                    </div>
                  </div>
    )
}