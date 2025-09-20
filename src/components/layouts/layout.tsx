import { ThemeProvider } from "next-themes";
import type { FC, ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export const Layout: FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<ThemeProvider attribute="class">
			<Navbar />
			<main className="relative" dir="ltr" data-pagefind-body>
				{children}
			</main>
			<Footer />
		</ThemeProvider>
	);
};
