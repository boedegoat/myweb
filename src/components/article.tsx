import { cn } from "@/lib/utils";
import React from "react";

type ArticleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Article({ children, ...props }: ArticleProps) {
	return (
		<article
			{...props}
			className={cn("x:prose x:max-xl:prose-sm x:dark:prose-invert px-4 md:px-0", props.className)}
			style={{
				maxWidth: "768px",
			}}
		>
			{children}
		</article>
	);
}
