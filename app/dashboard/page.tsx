import SideBar from "./_components/Sidebar";
import ProductsChart from "./_components/ProductsChart";
import KeyMetrics from "./_components/KeyMetrics";
import InventoryStats from "./_components/InventoryStats";
import EfficiencyStats from "./_components/EfficiencyStats";
  

export default function page(){

    return (
       <div className="min-h-screen">
      <SideBar currentPath="/dashboard" />
      <main className="ml-64 px-8 mt-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">
                Dashboard
              </h1>
              <p className="text-sm">
                Welcome back! Here is an overview of your inventory.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
 <KeyMetrics/>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center text-black justify-between mb-6">
              <h2 className="text-lg font-bold uppercase text-gray-900">Total weekly sales</h2>
            </div>
            <div className="h-48">
              <ProductsChart/>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
  <InventoryStats />
  <EfficiencyStats/>
        </div>
      </main>
    </div>)
}