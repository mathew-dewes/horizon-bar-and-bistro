import CartTable from "./_components/CartTable";


export default function page(){
    return (
        <div>
            <h1 className="text-xl font-semibold">Cart:</h1>
            <p>Please confirm you cart below:</p>
            <CartTable/>
            <div className="mt-5">

            </div>
     
        </div>
    )
}