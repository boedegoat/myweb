import { Callout, Code, Details, Pre, Summary, Table, withGitHubAlert, withIcons } from "nextra/components";
import { useMDXComponents as getNextraMDXComponents } from "nextra/mdx-components";
// @ts-expect-error -- fix me
import { MDXComponents, UseMDXComponents } from "nextra/mdx-components";
import type { ComponentProps, FC } from "react";
import { Meta } from "@/components/meta";
import type { BlogMetadata } from "@/types/blog";
import { isValidDate } from "./utils";
import Article from "@/components/article";
import { GoBack } from "@/components/go-back";

const createHeading = (Tag: `h${2 | 3 | 4 | 5 | 6}`): FC<ComponentProps<typeof Tag>> =>
	function HeadingLink({ children, id, className, ...props }) {
		return (
			<Tag
				id={id}
				// can be added by footnotes
				className={className === "sr-only" ? "x:sr-only" : ""}
				{...props}
			>
				{children}
				{id && (
					<a
						href={`#${id}`}
						className="not-prose subheading-anchor"
						aria-label="Permalink for this section"
					/>
				)}
			</Tag>
		);
	};
const CALLOUT_TYPE = Object.freeze({
	caution: "error",
	important: "important",
	note: "info",
	tip: "default",
	warning: "warning",
});

// @ts-expect-error -- fix me
const Blockquote = withGitHubAlert(({ type, ...props }) => <Callout type={CALLOUT_TYPE[type]} {...props} />);

type BlogMDXComponents = MDXComponents & {
	DateFormatter?: FC<{ date: Date }>;
};

const DEFAULT_COMPONENTS = getNextraMDXComponents({
	blockquote: Blockquote,
	code: Code,
	details: Details,
	h2: createHeading("h2"),
	h3: createHeading("h3"),
	h4: createHeading("h4"),
	h5: createHeading("h5"),
	h6: createHeading("h6"),
	pre: withIcons(Pre),
	summary: Summary,
	table: Table,
	td: Table.Td,
	th: Table.Th,
	tr: Table.Tr,
});

export const getBlogMDXComponents: typeof UseMDXComponents<typeof DEFAULT_COMPONENTS> = <T extends BlogMDXComponents>(
	comp?: T
) => {
	const { DateFormatter, ...components } = comp ?? {};
	return {
		...DEFAULT_COMPONENTS,
		// @ts-expect-error -- fixme
		wrapper({ children, metadata }) {
			const date = metadata.date as string;
			if (date && !isValidDate(date)) {
				throw new Error(
					`Invalid date "${date}". Provide date in "YYYY/M/D", "YYYY/M/D H:m", "YYYY-MM-DD", "[YYYY-MM-DD]T[HH:mm]" or "[YYYY-MM-DD]T[HH:mm:ss.SSS]Z" format.`
				);
			}
			const dateObj = date && new Date(date);
			return (
				<>
					{metadata.bannerImg && (
						<div className="relative aspect-video w-full max-h-[350px]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={metadata.bannerImg}
								alt={metadata.title}
								className="absolute top-0 left-0 w-full h-full object-cover"
							/>
						</div>
					)}
					<Article>
						<GoBack />
						<h1>{metadata.title}</h1>
						<p>{metadata.description}</p>
						<Meta {...(metadata as BlogMetadata)}>
							{dateObj && (
								<time dateTime={dateObj.toISOString()}>
									{DateFormatter ? <DateFormatter date={dateObj} /> : dateObj.toLocaleDateString()}
								</time>
							)}
						</Meta>
						{children}
					</Article>
				</>
			);
		},
		...components,
	};
};
