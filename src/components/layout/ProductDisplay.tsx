import ProductCard from "../ui/ProductCard";



type Product = {
    id: string
    image_url: string
    name: string
    description: string
    price: number
    
}


export default async function ProductDisplay({products}:{products:Product[]}) {


    return (
        <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-20 gap-y-50 sm:gap-y-40 gap-x-40 transition-opacity duration-300`}>
            {products.map((product: Product) => {
                return (
                    <ProductCard 
                    quantity={0} 
                    id={product.id} 
                    image_url={product.image_url} 
                    key={product.id} 
                    name={product.name} 
                    description={product.description} 
                    price={product.price} />

                )
            })}
        </div>
    )





}