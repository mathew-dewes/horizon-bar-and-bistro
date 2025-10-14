import StockDonut from "./EfficencyDonut"
import { PieKeys } from "./PieKeys"



export default function SalesByCategory(){
    return (
         <div className="w-fit mt-10">
               <h2 className="font-semibold text-sm uppercase text-gray-900 text-center">
                 Sales by Category
               </h2>
                 <div className="relative w-fit">
            <StockDonut
                     inStock={12}
                     lowStock={12}
                     outOfStock={12} />
                      <div className="absolute inset-0 flex items-center justify-center">
                           <div className="text-center">
                             <div className="text-2xl  font-bold text-gray-900">
                               1%
                             </div>
                             <div className="text-sm text-gray-600">In Stock</div>
                           </div>
                         </div>
                   </div>
                   <PieKeys/>
                   </div>
    )
}