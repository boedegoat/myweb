import type { FC, ReactNode } from "react";
import type { BlogMetadata } from "@/types/blog";

export const Meta: FC<BlogMetadata & { children: ReactNode }> = ({ author, tags, date, readingTime, children }) => {
	const tagsEl = tags?.map((t) => (
		<span key={t} className="nextra-tag">
			{t}
		</span>
	));

	const readingTimeText = readingTime?.text;

	return (
		<div className={"x:mb-8 x:flex x:gap-3 " + (readingTimeText ? "x:items-start" : "x:items-center")}>
			<div className="x:grow x:dark:text-gray-400 x:text-gray-600">
				<div className="x:flex x:flex-wrap x:items-center x:gap-1">
					{author}
					{author && date && ","}

					{children}

					{(author || date) && (readingTime || tags?.length) && <span className="x:px-1">•</span>}
					{tagsEl}
				</div>
				{readingTime && <div className="x:mt-1 x:flex x:flex-wrap x:items-center x:gap-1">{tagsEl}</div>}
			</div>
		</div>
	);
};
