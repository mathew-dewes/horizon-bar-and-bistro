import ProductDisplay from "@/components/layout/ProductDisplay";
import CartPreview from "@/components/ui/CartPreview";
import { getUserCart } from "@/lib/queries/cart";


import { getProducts } from "@/lib/queries/products";
import { createClientForServer } from "@/lib/supabase/server";


export default async function OrderPage({params}:
    {params: Promise<{tableId: string}>}
){

    const {tableId} = await params;
    const supabase = await createClientForServer();
    const session = await supabase.auth.getUser();
    const user_id = session.data.user?.id;
    const userCart = await getUserCart(user_id!);
          const { products, error } = await getProducts();
 
      

      if (error){
        console.error("Failed to load products:", error);
        return <p>Failed to load menu.</p>
      }


     
    return (
        <div>
            <h1>Hello Matt. You are sitting at table {tableId}!</h1>
            <div className="mt-10">
              <CartPreview userCart={userCart}/>
            </div>
            
            <h1 className="text-center text-3xl font-bold">Our Selection:</h1>
            <ProductDisplay products={products}/>
            
        </div>
    )
}