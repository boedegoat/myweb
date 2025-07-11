import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import type { ComponentProps, FC, ReactNode } from "react";
import Footer from "./Footer";

export const Layout: FC<{
	children: ReactNode;
	nextThemes?: Omit<ComponentProps<typeof ThemeProvider>, "children">;
	banner?: ReactNode;
}> = ({ children, nextThemes, banner }) => {
	return (
		<ThemeProvider attribute="class" {...nextThemes}>
			{banner}
			<main className="" dir="ltr" data-pagefind-body>
				<ViewTransitions>{children}</ViewTransitions>
			</main>
			<Footer />
		</ThemeProvider>
	);
};
