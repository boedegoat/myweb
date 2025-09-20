import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<nav className="mt-5">
			<div box-="square" className="mx-auto wrapper">
				<div className="flex justify-between items-center p-2 -mb-1">
					<Link href="/">
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
