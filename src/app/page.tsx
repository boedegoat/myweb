import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import projects from "@/data/projects";
import { getPosts } from "@/lib/blog-utils";

export default async function Home() {
	const posts = await getPosts();

	return (
		<div className="wrapper my-10">
			<section id="intro" className="section text-center">
				<h1 className="text-4xl font-bold text-white">Bhremada Fevreano</h1>
				<p className="mt-4 font-medium text-lg">Never Ending Learner</p>

				<div box-="square" shear-="top" className="mt-6 mx-auto max-w-max">
					<div className="header">
						<span is-="badge" variant-="background0">
							<h2 className="text-[var(--text)]/80 font-medium">🔥 my interests</h2>
						</span>
					</div>
					<div className="flex flex-wrap gap-3 p-2 justify-center">
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

			<section id="projects" className="section">
				<h2 is-="badge" variant-="mauve" className="section-title">
					My projects
				</h2>
				<div className="grid mt-6 gap-x-3 gap-y-8 justify-items-center grid-cols-1 lg:grid-cols-3">
					{projects.map((project) => (
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
				<h2 is-="badge" variant-="red" className="section-title">
					My posts/writeups
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
