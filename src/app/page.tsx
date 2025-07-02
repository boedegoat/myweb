import ProjectCard from "@/components/ProjectCard";
import NcwPreview from "@/assets/images/ncw.png";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
	return (
		<main>
			<div className="wrapper my-10">
				<section id="intro" className="text-center">
					<h1 className="text-4xl font-bold text-white">🧑‍💻 Bhremada Fevreano</h1>
					<p className="mt-4 font-medium text-lg">Never Ending Learner</p>

					<div box-="square" shear-="top" className="mt-6 mx-auto max-w-max">
						<div className="header">
							<span is-="badge" variant-="background0">
								<h2 className="text-[var(--text)]/80 font-medium">❤️ things I love</h2>
							</span>
						</div>
						<div className="flex flex-wrap gap-3 p-2">
							<span is-="badge" variant-="teal">
								Web
							</span>
							<span is-="badge" variant-="sky">
								Cyber Security
							</span>
							<span is-="badge" variant-="peach">
								Blockchain
							</span>
							<span is-="badge" variant-="flamingo">
								AI
							</span>
						</div>
					</div>
				</section>

				<section id="projects">
					<h2 is-="badge" variant-="mauve" className="mt-10 text-[var(--background0)] font-semibold text-xl">
						My projects
					</h2>
					<div className="grid mt-6 gap-x-3 gap-y-8 grid-cols-3">
						<ProjectCard
							project={{
								name: "National Cyber Week",
								thumbnail: NcwPreview,
								previewLink: "https://ncw.cscbinus.com",
								tagName: "Event Registration",
							}}
						/>
						<ProjectCard
							project={{
								name: "National Cyber Week",
								thumbnail: NcwPreview,
								previewLink: "https://ncw.cscbinus.com",
								tagName: "Event Registration",
							}}
						/>
						<ProjectCard
							project={{
								name: "National Cyber Week",
								thumbnail: NcwPreview,
								previewLink: "https://ncw.cscbinus.com",
								tagName: "Event Registration",
							}}
						/>
					</div>
					<div className="flex justify-center mt-8">
						<Link href="/projects" is-="button" box-="round">
							<span className="px-6">See More</span>
						</Link>
					</div>
				</section>

				<section id="posts">
					<h2 is-="badge" variant-="red" className="mt-10 text-[var(--background0)] font-semibold text-xl">
						My posts/writeups
					</h2>
					<div className="mt-6 space-y-5">
						<PostCard
							post={{
								title: "Example Title",
								publishedOn: new Date(),
								excerpt: "Explains a lot about blockchain exploitation",
								tags: ["Blockchain", "Solidity"],
							}}
						/>
						<PostCard
							post={{
								title: "Example Title",
								publishedOn: new Date(),
								excerpt: "Explains a lot about blockchain exploitation",
								tags: ["Blockchain", "Solidity"],
							}}
						/>
					</div>
					<div className="flex justify-center mt-8">
						<Link href="/projects" is-="button" box-="round">
							<span className="px-6">See More</span>
						</Link>
					</div>
				</section>
			</div>

			<footer>
				<div box-="square" shear-="top" className="">
					<div className="header">
						<span is-="badge" variant-="background0">
							<h2 className="text-[var(--text)] font-medium">thank you for visiting</h2>
						</span>
					</div>
					<div className="flex justify-between items-center px-[1.5ch]">
						<p>Made with ❤️ + ☕</p>
						<div className="flex">
							<a href="#" target="_blank" is-="button" box-="round">
								<span className="p-2">
									<Linkedin />
								</span>
							</a>
							<a href="#" target="_blank" is-="button" box-="round">
								<span className="p-2">
									<Github />
								</span>
							</a>
						</div>
						<p>© 2025 - {new Date().getFullYear()}</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
