import { getTopProductsWithOther, getTopSellingProducts } from "@/server/queries/products"
import TopSellingProductGraph from "./graphs/TopSellingProductGraph";
import { PieKeys } from "./PieKeys";



export default async function TopSellingProducts(){



  const products = await getTopSellingProducts();

  const values = await getTopProductsWithOther(products);

  const topProduct = values[0];

  

    return (

      <div className="flex items-center gap-20">
<div className="w-fit mt-10">
               <h2 className="font-semibold text-sm uppercase text-gray-900 text-center">
                 Top Selling Product
               </h2>
                 <div className="relative w-fit">
    <TopSellingProductGraph values={values}/>
     <div className="absolute inset-0 flex items-center justify-center">
                           <div className="text-center">
                             <div className="text-2xl  font-bold text-gray-900">
                               {topProduct.value}%
                             </div>
                             <div className="text-sm font-bold text-gray-600">{topProduct.name}</div>
                             <p className="text-black text-xs">Most sold</p>
                           </div>
                         </div>
                   </div>
                 
                   </div>
                   <div className="mt-10">
               <PieKeys label="Productss" values={values}/>
                   </div>
      
      </div>
         
    )
}