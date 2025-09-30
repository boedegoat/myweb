import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-[70vh] grid place-items-center">
			<div className="text-center">
				<h2 className="font-bold text-6xl text-white">Not Found</h2>
				<p className="mt-1">Could not find requested resource</p>
				<div className="mt-6">
					<Link href="/" is-="button">
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}
