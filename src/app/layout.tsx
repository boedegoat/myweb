import type { Metadata } from "next";
import "./globals.css";
import EmojiFavicon from "@/components/emoji-favicon";
import { Layout } from "@/components/layouts/layout";

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
		<html lang="en" data-webtui-theme="catppuccin">
			<head>
				<EmojiFavicon>🧑‍💻</EmojiFavicon>
			</head>
			<body>
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
