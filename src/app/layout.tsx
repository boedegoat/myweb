import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import EmojiFavicon from "@/components/EmojiFavicon";

export const metadata: Metadata = {
	title: {
		template: "%s | Bhremada Fevreano",
		default: "Bhremada Fevreano",
	},
	description: "Never Ending Learner",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-webtui-theme="catppuccin-mocha">
			<head>
				<EmojiFavicon>🧑‍💻</EmojiFavicon>
			</head>
			<body>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
