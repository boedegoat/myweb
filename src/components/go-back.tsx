import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const GoBack = () => {
	return (
		<Link href="/" is-="button" className="x:print:hidden x:underline x:p-0" variant-="background0">
			<ChevronLeft /> Back
		</Link>
	);
};
