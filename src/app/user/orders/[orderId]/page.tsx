export default async function UserOrderPage({params}:
    {params: Promise<{orderId: string }>}
){

    const {orderId} = await params;
    return (
        <div>
            <h1>User order goes here</h1>
            <p>URL params is: {orderId}</p>
        </div>
    )
}