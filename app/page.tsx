import { authProtection } from "@/server/auth/session";
import MenuList from "./(menu)/_components/MenuList";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function page(){
  await authProtection();

  

  return (
    <div>
      <Suspense fallback={<LoadingSpinner text="Loading products"/>}>
          <MenuList/>
      </Suspense>

    </div>
  )
}