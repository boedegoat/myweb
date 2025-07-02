import Link from "next/link";
import React from "react";

interface PostCardProps {
	post: {
		title: string;
		publishedOn: Date;
		excerpt: string;
		tags: string[];
	};
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<Link href="#" className="group block">
			<div box-="square" shear-="both" className="-ml-1">
				<div className="flex justify-between items-center">
					<span is-="badge" variant-="background0">
						<h3 className="text-[var(--text)] font-semibold group-hover:underline">{post.title}</h3>
					</span>
					<div className="flex gap-2">
						{post.tags.map((tag, idx) => (
							<span
								key={`${tag}-${idx}`}
								is-="badge"
								variant-="background1"
								cap-="round"
								className="text-xs"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div className="p-[1.2ch]">
					<p>{post.excerpt}</p>
				</div>
				<div className="flex">
					<span className="opacity-70 ml-auto text-xs -translate-y-1" is-="badge" variant-="background0">
						{post.publishedOn.toLocaleDateString()}
					</span>
				</div>
			</div>
		</Link>
	);
}
