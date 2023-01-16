import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h2>Kelvin</h2>
            </div>
            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="/About"><li>About</li></Link>
                <Link href="/subpages"><li>Listing</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;