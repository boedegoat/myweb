import Image, { StaticImageData } from "next/image";
import "@webtui/css/components/dialog.css";

import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
	project: {
		name: string;
		thumbnail: StaticImageData;
		previewLink?: string;
		githubLink?: string;
		tag: string;
		description?: string;
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
					<div className="relative group">
						<button popoverTarget={`${project.name} dialog`} className="bg-none h-auto px-0">
							<Image src={project.thumbnail} alt={project.name} className="h-[150px] object-contain" />
						</button>
						<dialog
							id={`${project.name} dialog`}
							size-="full"
							popover=""
							className="border w-full max-w-[500px] p-6"
						>
							<div className="text-center">
								<Image src={project.thumbnail} alt={project.name} />
								<h3 className="font-bold text-3xl mt-10">{project.name}</h3>
								<p className="mt-4 max-w-prose mx-auto">{project.description}</p>
								<div className="flex items-stretch justify-center mt-8">
									{project.previewLink && (
										<div is-="tooltip">
											<div is-="tooltip-trigger">
												<a is-="button" href={project.previewLink} target="_blank">
													<ArrowUpRight />
												</a>
											</div>
											<div
												is-="tooltip-content"
												className="whitespace-nowrap bg-black left-1/2 -translate-x-1/2"
											>
												<p>Open in new tab</p>
											</div>
										</div>
									)}
									{project.githubLink && (
										<a is-="button" href={project.githubLink} target="_blank" box-="round">
											<span className="p-1">
												<Github />
											</span>
										</a>
									)}
								</div>
							</div>
						</dialog>
					</div>
				</div>
				<div className="flex">
					<span is-="badge" variant-="background1" cap-="round" className="mx-auto">
						{project.tag}
					</span>
				</div>
			</div>
		</div>
	);
}
