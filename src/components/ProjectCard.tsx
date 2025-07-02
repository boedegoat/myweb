import Image, { StaticImageData } from "next/image";

import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
	project: {
		name: string;
		thumbnail: StaticImageData;
		previewLink: string;
		githubLink?: string;
		tagName: string;
		tagVariant?: string;
	};
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="max-w-md">
			<div box-="square" shear-="both" className="-ml-1">
				<div>
					<span is-="badge" variant-="background0">
						<h3 className="text-[var(--text)] font-semibold">{project.name}</h3>
					</span>
				</div>
				<div className="p-2">
					<div className="relative group rounded-xl overflow-hidden">
						<Image src={project.thumbnail} alt={project.name} />
						<div className="absolute opacity-0 group-hover:opacity-100 transition-opacity inset-0 bg-black/40 flex items-center justify-center">
							<div is-="tooltip">
								<div is-="tooltip-trigger">
									<a is-="button" href={project.previewLink} target="_blank">
										<ArrowUpRight />
									</a>
								</div>
								<div is-="tooltip-content" className="whitespace-nowrap -left-1/2">
									<p>Open in new tab</p>
								</div>
							</div>

							{project.githubLink && (
								<div is-="tooltip">
									<div is-="tooltip-trigger">
										<a is-="button" href={project.githubLink} target="_blank" box-="round">
											<span className="p-1">
												<Github />
											</span>
										</a>
									</div>
									<div is-="tooltip-content" className="whitespace-nowrap -left-1/2">
										<p>Open GitHub</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="flex">
					<span is-="badge" variant-={project.tagVariant || "background1"} cap-="round" className="mx-auto">
						{project.tagName}
					</span>
				</div>
			</div>
		</div>
	);
}
