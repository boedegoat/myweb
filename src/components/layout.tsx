import { ThemeProvider } from "next-themes";
import type { FC, ReactNode } from "react";
import Footer from "./Footer";

export const Layout: FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<ThemeProvider attribute="class">
			<main className="relative" dir="ltr" data-pagefind-body>
				{children}
			</main>
			<Footer />
		</ThemeProvider>
	);
};
