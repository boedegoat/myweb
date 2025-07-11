import { Github, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer>
			<div box-="square" shear-="top">
				<div className="header flex wrapper px-0!">
					<span is-="badge" variant-="background0" className="mx-auto">
						<h2 className="text-[var(--text)] font-medium">thank you for visiting 🫰</h2>
					</span>
				</div>
				<div className="wrapper flex flex-col sm:flex-row justify-between items-center p-[1.5ch] gap-y-5 py-[4ch] sm:py-0">
					<p>Made with ❤️ + ☕ by boedegoat</p>
					<div className="flex sm:-ml-[220px]">
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
					<p>© {new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
}
