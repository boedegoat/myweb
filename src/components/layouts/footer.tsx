import { Github, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer className="mt-10">
			<div box-="square" shear-="top">
				<div className="header flex wrapper px-0!">
					<span is-="badge" variant-="background0" className="mx-auto">
						<h2 className="text-[var(--text)] font-medium">made with ❤️ by boedegoat</h2>
					</span>
				</div>
				<div className="wrapper flex flex-col sm:flex-row justify-between items-center p-[1.5ch] gap-y-5 py-[4ch] sm:py-0">
					<div>
						<p className="text-gray-300 text-sm">
							Contact me at <a href="mailto:work@bhremada.com">work@bhremada.com</a>
						</p>
					</div>
					<div className="flex sm:-ml-[200px]">
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
