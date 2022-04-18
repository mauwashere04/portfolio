import Link from "next/link";
import Image  from "next/dist/client/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/Antonio_Alforque-removebg-preview.png" width={128} height={77}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/portfolio"><a>Projects</a></Link>
        </nav>
     );
}
 
export default Navbar;