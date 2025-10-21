import SideBar from "../_components/Sidebar";
import Pagination from "./_components/Pagination";
import ProductList from "../products/_components/ProductList";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { getProductDetails } from "@/server/queries/products";


export default async function productsPage({ searchParams }:
    { searchParams: Promise<{ q?: string, page?: string }> }) {
    const params = await searchParams;
    const q = (params.q ?? "").trim();

    const pageSize = 5;
    const page = Math.max(1, Number(params.page ?? 1));
    const totalPages = Math.max(1, Math.ceil(15 / pageSize));

    const products = await getProductDetails(page);


    return (
        <div className="min-h-screen">
            <SideBar currentPath="/dashboard/products" />
            <main className="ml-64 px-8 mt-10">


                <div className="space-y-6">
                    

                    {/* Products table */}
                    <Suspense fallback={<LoadingSpinner text="Loading products..."/>}>
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <h1 className="text-lg font-bold uppercase text-gray-900 p-6">Inventory</h1>
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">New QTY</th>
                                </tr>
                            </thead>
            
            <ProductList products={products}/>
                     

               
                        </table>

                    </div>
                    </Suspense>
                  
                    {totalPages > 1 && <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            baseUrl="/dashboard/products"
                            searchParams={{
                                q, pageSize: String(pageSize)
                            }}
                        />
                    </div>}

                </div>
            </main>
        </div>
    )
}