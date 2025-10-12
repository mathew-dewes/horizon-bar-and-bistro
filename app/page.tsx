import { authProtection } from "@/server/auth/session";
import MenuList from "./(menu)/_components/MenuList";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import CategoryDisplay from "./(menu)/_components/CategoryDisplay";

export default async function page({ searchParams }:
  { searchParams: Promise<{ category: string }> }
) {
  await authProtection();
  const params = await searchParams;

  const category = (params.category ?? "all") as 'beer' | 'spirits' | 'cocktails' | 'food' | 'dessert';



  return (
    <div>
      <Suspense fallback={<LoadingSpinner text="Loading products" />}>
        <CategoryDisplay category={category} />
        <MenuList key={category} category={category}/>
      </Suspense>

    </div>
  )
}