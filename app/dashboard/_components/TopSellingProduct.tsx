import SalesByCategoryDonut from "./SalesByCategoryDonut"
import { PieKeys } from "./PieKeys"
import { getOrdersByCategory } from "@/server/queries/order";
import { Category } from "@prisma/client";





export default async function TopSellingProducts(){

  const orders = await getOrdersByCategory();
  
  const totals: Record<Category, number> = {
    Spirits: 0,
    Cocktails: 0,
    Beer: 0,
    Dessert: 0,
    Food: 0,
  };

  for (const order of orders) {
    const category = order.product.category;
    totals[category] = (totals[category] || 0) + order.quantity;
  }

const totalQuantity = Object.values(totals).reduce((sum, qty) => sum + qty, 0);


  const percentages: Record<Category, number> = {} as Record<Category, number>;
  (Object.keys(totals) as Category[]).forEach((category) => {
    percentages[category] = Number(((totals[category] / totalQuantity) * 100).toFixed(1));
  });

const topCategory = Object.entries(percentages).reduce(
  (max, [category, value]) => (value > max.value ? { category, value } : max),
  { category: "", value: -Infinity }
);
  

  
  

    return (

      <div className="flex items-center gap-20">
<div className="w-fit mt-10">
               <h2 className="font-semibold text-sm uppercase text-gray-900 text-center">
                 Top Selling Product
               </h2>
                 <div className="relative w-fit">
            <SalesByCategoryDonut
                     spirits={percentages.Spirits}
                     cocktails={percentages.Cocktails}
                     beer={percentages.Beer}
                     dessert={percentages.Dessert}
                     food={percentages.Food}/>
                      <div className="absolute inset-0 flex items-center justify-center">
                           <div className="text-center">
                             <div className="text-2xl  font-bold text-gray-900">
                               {topCategory.value}%
                             </div>
                             <div className="text-sm text-gray-600">{topCategory.category}</div>
                             <p className="text-black text-xs">Most popular</p>
                           </div>
                         </div>
                   </div>
                 
                   </div>
                   <div className="mt-10">
               <PieKeys/>
                   </div>
      
      </div>
         
    )
}