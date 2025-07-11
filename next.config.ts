import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
	output: "standalone",
};

const withNextra = nextra({
	contentDirBasePath: "/posts",
});

export default withNextra(nextConfig);
