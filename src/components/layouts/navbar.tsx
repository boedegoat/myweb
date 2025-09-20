import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
	return (
		<nav className="mt-5">
			<div box-="square" className="mx-auto wrapper">
				<div className="flex justify-between items-center p-2 -mb-1">
					<Link href="/" className="flex items-center gap-2">
						<Image src={logo} alt="logo" width={35} height={35} className="-rotate-12" />
						<h1 className="font-bold text-white">Bhremada Fevreano</h1>
					</Link>
					<div className="flex gap-4 text-sm">
						<a href="https://poc.bhremada.com" target="_blank" className="hover:underline">
							PoC
						</a>
						<a href="#works" className="hover:underline">
							Works
						</a>
						<a href="#posts" className="hover:underline">
							Posts
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
