import type { Metadata } from "next";
import "./globals.css";
import EmojiFavicon from "@/components/emoji-favicon";
import { Layout } from "@/components/layouts/layout";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

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
	description:
		"Security-minded full-stack dev. I compete in CTFs and hackathons, love web exploitation and blockchain challenges, and study smart-contract audits. I still take classic full-stack freelance, shipping fast and modern web apps that solve real problems while applying the same discipline to securing the web. I’m naturally a curious person and love learning something new",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-webtui-theme="catppuccin">
			<head>
				<EmojiFavicon>🧑‍💻</EmojiFavicon>
			</head>
			<body className={cn(jetBrainsMono.variable, "font-mono antialiased")}>
				{/* <div className="fixed inset-0">
					<Image
						src="/images/webbanner.png"
						fill
						alt="background image"
						className="object-cover opacity-10"
					/>
				</div> */}
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
