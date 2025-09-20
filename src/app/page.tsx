import ProjectCard from "@/components/project-card";
import Link from "next/link";
import PostCard from "@/components/posts/post-card";
import projects from "@/data/projects";
import { getPosts } from "@/lib/blog-utils";

export default async function Home() {
	const posts = await getPosts();

	return (
		<div className="wrapper">
			<section id="intro" className="section text-center py-10">
				<h2 className="text-5xl font-black text-white leading-tight tracking-tight">
					love to{" "}
					<span is-="badge" variant-="teal">
						build
					</span>
					, love to{" "}
					<span is-="badge" variant-="red">
						hack
					</span>
				</h2>
			</section>

			<section id="about" className="section">
				<h2 is-="badge" variant-="foreground1" className="section-title">
					About me
				</h2>
				<p className="font-medium mt-5 mx-auto text-center text-base">
					Security-minded full-stack dev. I compete in CTFs and hackathons, love blockchain challenges, and study smart-contract audits. I
					still take classic full-stack freelance, shipping fast and modern web apps that solve real problems while applying the same
					discipline to securing the web. I’m naturally a curious person and love learning something new
				</p>
				<div className="flex flex-wrap p-2 justify-center mt-8">
					<span is-="badge" variant-="maroon">
						I ❤️
					</span>
					<span is-="badge" variant-="green">
						cybersecurity
					</span>
					<span is-="badge" variant-="teal">
						web
					</span>
					<span is-="badge" variant-="sky">
						blockchain
					</span>
					<span is-="badge" variant-="sapphire">
						ai
					</span>
				</div>
			</section>

			<section id="works" className="section">
				<h2 is-="badge" variant-="foreground1" className="section-title">
					My works
				</h2>
				<div className="grid mt-6 gap-x-3 gap-y-8 justify-items-center grid-cols-1 lg:grid-cols-3">
					{projects.slice(0, 3).map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
				<div className="flex justify-center mt-8">
					<Link href="/projects" is-="button" box-="round">
						<span className="px-6">See More</span>
					</Link>
				</div>
			</section>

			<section id="posts" className="section">
				<h2 is-="badge" variant-="foreground1" className="section-title">
					My posts & writeups
				</h2>
				<div className="mt-6 space-y-5">
					{posts.map((post) => (
						<PostCard
							key={post.title}
							post={{
								title: post.title,
								url: post.route,
								publishedOn: post.frontMatter.date,
								excerpt: post.frontMatter.description,
								tags: post.frontMatter.tags,
							}}
						/>
					))}
				</div>
				{posts.length > 5 && (
					<div className="flex justify-center mt-8">
						<Link href="/projects" is-="button" box-="round">
							<span className="px-6">See More</span>
						</Link>
					</div>
				)}
			</section>
		</div>
	);
}
