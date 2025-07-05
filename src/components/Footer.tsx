import { Github, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer>
			<div box-="square" shear-="top" className="">
				<div className="header flex">
					<span is-="badge" variant-="background0" className="mx-auto sm:mx-0">
						<h2 className="text-[var(--text)] font-medium">thank you for visiting 🫰</h2>
					</span>
				</div>
				<div className="flex flex-col sm:flex-row justify-between items-center p-[1.5ch] gap-y-5 py-[4ch] sm:py-0">
					<p>Made with ❤️ + ☕</p>
					<div className="flex">
						<a href="https://linkedin.com/in/bhremada-fevreano" target="_blank" is-="button" box-="round">
							<span className="p-2">
								<Linkedin />
							</span>
						</a>
						<a href="https://github.com/boedegoat" target="_blank" is-="button" box-="round">
							<span className="p-2">
								<Github />
							</span>
						</a>
					</div>
					<p>© 2025 - {new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
}
