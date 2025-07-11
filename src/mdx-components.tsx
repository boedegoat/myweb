import { MDXComponents } from "nextra/mdx-components";
import { getBlogMDXComponents } from "@/lib/nextra";

const blogComponents = getBlogMDXComponents({});

export function useMDXComponents(components?: MDXComponents) {
	return {
		...blogComponents,
		...components,
	};
}
