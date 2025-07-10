export default function Navbar(){
    return (
        <nav className=" h-20 px-20  flex justify-between items-center">
            <h1 className="text-3xl font-bold">Horizon Bar and Bistro</h1>
            <ul className="flex gap-10">
                <p className="text-lg">Order</p>
                <p className="text-lg">Hello</p>
                <p className="text-lg">Dashboard</p>
            </ul>
        </nav>
    )
}