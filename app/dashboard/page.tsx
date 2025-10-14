import SideBar from "./_components/Sidebar";
import KeyMetrics from "./_components/KeyMetrics";
import EfficiencyStats from "./_components/EfficiencyStats";
import DashboardHeader from "./_components/DashboardHeader";
import WeeklySales from "./_components/WeeklySales";
import StockLevels from "./_components/StockLevels";


export default async function page({ searchParams }:
  { searchParams: Promise<{ table: string }> }
) {
  const params = await searchParams;
  const tableNumber = params.table;
  return (
    <div className="min-h-screen">
      <SideBar currentPath="/dashboard" tableNumber={tableNumber} />
      <main className="ml-64 px-8 mt-10">
        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <KeyMetrics />
          <WeeklySales />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <StockLevels />
          <EfficiencyStats />
        </div>
      </main>
    </div>)
}