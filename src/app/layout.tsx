import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Bhremada Fevreano",
	description: "Never Ending Learner",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-webtui-theme="catppuccin-mocha">
			<body>{children}</body>
		</html>
	);
}
