export default function Navbar(){

    const navLinks = [
    { href: "/", label: "Menu" },
    { href: "/order", label: "Checkout" },
    { href: "/user/orders", label: "Logout" },


  ]
    return (
        <nav className="flex justify-between mx-5 sm:mx-20 items-center h-30">
            <h1 className="font-bold">Horizon Bar and Bistro</h1>
            <ul className="flex gap-10">
                {navLinks.map((link, key)=>{
                    return <li key={key}>{link.label}</li>
                })}
            </ul>
        </nav>
    )
}