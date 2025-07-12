

// Db querie to get single order by id is needed here.

export default async function UserOrderPage({params}:
    {params: Promise<{orderId: string }>}
){

    const {orderId} = await params;
    return (
        <div>
            <h1>User single order goes here</h1>
            <p>URL params is: {orderId}</p>
        </div>
    )
}