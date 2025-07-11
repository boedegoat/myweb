import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
	/* config options here */
};

const withNextra = nextra({
	contentDirBasePath: "/posts",
});

export default withNextra(nextConfig);
