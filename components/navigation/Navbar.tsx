import Link from "next/link"

export default function Navbar() {

    const navLinks = [
        { href: "/", label: "Menu" },
        { href: "/auth/login", label: "Auth" },

        { href: "/user/orders", label: "Logout" },


    ]
    return (
        <nav className="flex justify-between mx-5 sm:mx-20 items-center h-30">
            <Link href={'/'}><h1 className="font-bold">Horizon Bar and Bistro</h1></Link>

            <ul className="flex gap-10">
                {navLinks.map((link, key) => {
                    return <Link href={link.href} key={key}>{link.label}</Link>
                })}
            </ul>
        </nav>
    )
}