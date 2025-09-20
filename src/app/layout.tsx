import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/layouts/layout";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { aboutMe } from "@/data/texts";

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Bhremada Fevreano",
		default: "Bhremada Fevreano",
	},
	description: aboutMe,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-webtui-theme="catppuccin">
			<body className={cn(jetBrainsMono.variable, "font-mono antialiased")}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
