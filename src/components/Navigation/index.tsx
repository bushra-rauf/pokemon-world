'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationType {
    name: string,
    url: string
}
const navLinks:NavigationType[] = [
    {name: 'home', url: '/'},
    {name: 'pokemon', url: '/pokemon'},
    {name: 'types', url: '/types'},
    {name: 'about', url: '/about'}
]

const Navigation = () => {
    const path = usePathname();
    return(
        <nav className='menu'>
            {/* {path} */}
            {navLinks.map((item:NavigationType, index: number) => <Link className={`menu__item--${item.name} ${path === item.url ? "active" : ""}`} key={index} href={item.url}>{item.name}</Link>)}
        </nav>
    )
}
export default Navigation