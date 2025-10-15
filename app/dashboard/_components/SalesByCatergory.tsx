import SalesByCategoryDonut from "./graphs/SalesByCategoryDonut"
import { PieKeys } from "./PieKeys"
import { getCategoryStats } from "@/server/queries/order";



export default async function SalesByCategory(){

    const { percentages, topCategory} = await getCategoryStats();
    

      const categories = [
    { name: "Spirits", color: "#EF4444", value: percentages.Spirits },
    { name: "Cocktails", color: "#3B82F6", value: percentages.Cocktails }, 
    { name: "Beer", color:"#FBBF24", value: percentages.Beer }, 
    { name: "Dessert", color: "#A855F7", value: percentages.Dessert },
    { name: "Food", color: "#10B981", value: percentages.Food},
  ].sort((a, b) => b.value - a.value);




    return (

      <div className="flex items-center flex-wrap md:gap-20">
<div className="w-fit mt-10">
               <h2 className="font-semibold text-sm uppercase text-gray-900 text-center">
                 Sales by Category
               </h2>
                 <div className="relative w-fit">
            <SalesByCategoryDonut
                  values={categories}/>
                      <div className="absolute inset-0 flex items-center justify-center">
                           <div className="text-center">
                             <div className="text-2xl  font-bold text-gray-900">
                               {topCategory.value}%
                             </div>
                             <div className="text-sm font-bold text-gray-600">{topCategory.category}</div>
                             <p className="text-black text-xs">Most popular</p>
                           </div>
                         </div>
                   </div>
                 
                   </div>
                   <div className="mt-10">
               <PieKeys label="Categories" values={categories}/>
                   </div>
      
      </div>
         
    )
}