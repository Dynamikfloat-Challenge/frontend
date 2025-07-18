import Image from "next/image";
import Link from "next/link";

function Navbar () {
return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 text-gray-800 shadow-md">
        <Image src="/assets/dynamik-logo.png" alt="Dynamik Logo" width={70} height={30} />
        <div>
            <Link href="/" className="px-4 py-2 hover:bg-gray-300 rounded text-gray-800">Home</Link>
            <Link href="/create" className="px-4 py-2 hover:bg-gray-300 rounded text-gray-800">Create</Link>
        </div>
    </nav>
)
}

export default Navbar;