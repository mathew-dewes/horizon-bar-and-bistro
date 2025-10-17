
import ProductsChart from "./ProductsChart";
import { getOrdersOverTime } from "@/server/queries/order";
import { SalesInterval } from "@/server/queries/types";
import SalesFilters from "./SalesFilters";


export default async function SalesData({tableNumber, filter}:{
  tableNumber: string, filter: SalesInterval, 
}){


  const orders = await getOrdersOverTime(filter);

const peak = orders.reduce((max, curr) =>
  curr.orders > max.orders ? curr : max
);

const avg =
  orders.reduce((sum, h) => sum + h.orders, 0) / orders.length;


 const totalOrders = orders.reduce((sum, item) => sum + item.orders, 0);
  


  function generateLabel(){
    let label;
    switch(filter){
      case "hour":
        label = "24 Hrs"
        break;
      case "day":
        label = "7 days"
        break;
      case "month":
        label = "28 days"
        break;
        default:
        label = "12 months"
    }
    return label;
  }

const filterHref = tableNumber ? `/dashboard?table=${tableNumber}&` : 
  `/dashboard&`
    return (
         <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center text-black justify-between mb-3">
                      <div>
      <h2 className="text-lg font-bold uppercase text-gray-900">{filter !=="day" ? filter + "ly" : "daily"} sales</h2>
      <p><span className="font-semibold">Period:</span> {generateLabel()}</p>
                      </div>
                
                    </div>
                    <div className="text-black">
                      <p className="mb-2"><b>Total orders:</b> {totalOrders}</p>
                      <p><b>Peak time:</b> {peak.value}</p>
                      <p><b>Average: </b>{avg.toFixed(2)}</p>
                    </div>
                    <div className="h-48 mt-5">
                      <ProductsChart orders={orders}/>
                    </div>
                    <div className="mt-5">
          <h1 className="text-black font-semibold uppercase">Filter orders by:</h1>
     <SalesFilters filterHref={filterHref} filter={filter} />
                    </div>
          
                  </div>
    )
}