import { authProtection } from "@/server/auth/session";
import MenuList from "./(menu)/_components/MenuList";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import CategoryDisplay from "./(menu)/_components/CategoryDisplay";
import { redirect } from "next/navigation";
import { assignTable } from "@/server/mutations/table";


export default async function page({ searchParams }:
  { searchParams: Promise<{ category: string, table: string, assign: true }> }
) {
  await authProtection();
  const params = await searchParams;
  const table = params.table;
  const assign = params.assign;
  const category = (params.category ?? "all") as 'beer' | 'spirits' | 'cocktails' | 'food' | 'dessert';


  

  if (assign){
    await assignTable(table);
  }

  

    if (!params.category){
    redirect(`/?category=Beer`)
  };

  return (
    <div>
     <h2 className="text-center mb-10">Welcome to our new ordering system. Browse our fine selection of products below and click the add button to add the product to your cart</h2>
              <CategoryDisplay category={category} />
      <Suspense fallback={<LoadingSpinner text="Loading products" />}>

        <MenuList key={category} category={category}/>
      </Suspense>

    </div>
  )
}