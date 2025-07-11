import type { Metadata } from "next";
import "./globals.css";
import EmojiFavicon from "@/components/EmojiFavicon";
import { Layout } from "@/components/layout";

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
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
