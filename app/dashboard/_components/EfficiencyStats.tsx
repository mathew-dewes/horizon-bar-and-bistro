import EfficiencyGraph from "./graphs/EfficiencyGraph";
import prisma from "@/server/db/prisma";



export default async function EfficiencyStats() {



  const stock = await prisma.product.findMany({
    select: {
      inventoryAmount: true
    }
  });

  const stockCounts = { inStock: 0, lowStock: 0, noStock: 0 }

  for (const product of stock) {
    if (product.inventoryAmount > 5) {
      stockCounts.inStock += 1
    } else if (product.inventoryAmount > 0 && product.inventoryAmount <= 5) {
      stockCounts.lowStock += 1
    } else if (product.inventoryAmount === 0) {
      stockCounts.noStock += 1
    }
  }

  const totalProducts = stock.length
  const stockPercentages = [
    { name: "inStock", value: (stockCounts.inStock / totalProducts) * 100, color: '#10B981' },
    { name: "lowStock", value: (stockCounts.lowStock / totalProducts) * 100, color: '#FBBF24' },
    { name: "noStock", value: (stockCounts.noStock / totalProducts) * 100, color: '#EF4444' },
  ]
  return (
    <div className="bg-white rounded-lg p-6 flex gap-10">



      <div className="w-fit">
        <h2 className="text-lg text-center font-bold uppercase text-gray-900">
         INVENTORY levels
        </h2>
        <div className="relative">
          <EfficiencyGraph values={stockPercentages} />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {stockPercentages[0].value.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">In Stock</div>
            </div>
          </div>
        </div>
      </div>



      <div className="space-y-2">
        <h2 className="font-semibold mt-15 text-black uppercase">key</h2>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
            <span>In Stock {stockCounts.inStock}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FBBF24]" />
            <span>Low Stock {stockCounts.lowStock}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span>Out of Stock {stockCounts.noStock}</span>
          </div>
        </div>
      </div>
    </div>
  )
}