import SideBar from "./_components/Sidebar";
import KeyMetrics from "./_components/KeyMetrics";
import StockLevels from "./_components/StockLevels";
import SalesData from "./_components/SalesData";
import { SalesInterval } from "@/server/queries/types";


export default async function page({ searchParams }:
  { searchParams: Promise<{ table: string, filter: SalesInterval }> }
) {
  const params = await searchParams;
  const tableNumber = params.table;
  const filter = params.filter;
  
  return (
    <div className="min-h-screen">
      <SideBar currentPath="/dashboard" tableNumber={tableNumber} />
      <main className="lg:ml-64 px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <KeyMetrics />
          <SalesData filter={filter || "hour"} tableNumber={tableNumber}/>
        </div>

        <div className="mb-8">
          <StockLevels />
 
        </div>
      </main>
    </div>)
}