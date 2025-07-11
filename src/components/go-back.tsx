"use client";

import { ChevronLeft } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import type { FC } from "react";

export const GoBack: FC = () => {
	const router = useTransitionRouter();
	const segments = usePathname().split("/");

	const isNestedPage = segments.length > 2;
	if (!isNestedPage) return null;
	return (
		<button onClick={router.back} className="x:print:hidden x:underline x:p-0" variant-="background0">
			<ChevronLeft /> Back
		</button>
	);
};
