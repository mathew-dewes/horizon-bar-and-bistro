
import { getUserInfo } from "@/server/queries/user";
import CartList from "./_components/CartList";
import OrderForm from "./_components/OrderForm";

export default async function page(){

    const user  = await getUserInfo();

    
    

    
    return(
        <div>
            <h1>Confirmation page</h1>
            <p>Please confirm you items below and hit place order</p>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Table number: {user?.tableId}</p>
            <CartList/>
            <OrderForm/>
        </div>
    )
}