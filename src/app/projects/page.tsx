import { GoBack } from "@/components/go-back";
import ProjectCard from "@/components/project-card";
import projects from "@/data/projects";

export default function ProjectsPage() {
	return (
		<div className="wrapper py-10">
			<GoBack />
			<h1 className="font-bold text-4xl text-white">My Works</h1>

			<section id="projects" className="section">
				<div className="grid mt-6 gap-x-3 gap-y-8 justify-items-center grid-cols-1 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
			</section>
		</div>
	);
}
