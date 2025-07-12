export default async function SuccessPage({params}:
    {params: Promise<{tableId: string}>}
){

    const {tableId} = await params;
    return (
        <div>
            <h1>Welcome to the success page table {tableId}!</h1>
        </div>
    )
}



