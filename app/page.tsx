import { authProtection } from "@/server/auth/session";
import MenuList from "./(menu)/_components/MenuList";

export default async function page(){
  await authProtection();

  return (
    <div>
          <MenuList/>
    </div>
  )
}