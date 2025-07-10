import ProductDisplay from "@/components/layout/ProductDisplay";
import { getProducts } from "@/lib/database/queries/products";

export default async function OrderPage({params}:
    {params: Promise<{tableId: string}>}
){

    const {tableId} = await params;
      const { products, error } = await getProducts();

      if (error){
        console.error("Failed to load products:", error);
        return <p>Failed to load menu.</p>
      }

    return (
        <div>
            <h1>Hello Matt. You are sitting at table {tableId}!</h1>
            <h1>Menu</h1>
            <ProductDisplay products={products}/>
            
        </div>
    )
}