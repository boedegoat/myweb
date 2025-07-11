import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getPosts() {
	const { directories } = normalizePages({
		list: await getPageMap("/posts"),
		route: "/posts",
	});
	return directories
		.filter((post) => post.name !== "index")
		.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
}

export async function getTags() {
	const posts = await getPosts();

	const allTags = posts
		.flatMap((post) => {
			const tags = post.frontMatter?.tags;

			if (Array.isArray(tags)) {
				return tags;
			}
			if (typeof tags === "string" && tags.length > 0) {
				return [tags];
			}
			return [];
		})
		.reduce((acc, tag) => {
			acc[tag] = (acc[tag] ?? 0) + 1;
			return acc;
		}, {} as Record<string, number>);

	return allTags;
}
