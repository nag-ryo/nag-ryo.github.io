import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    // basePath: '/nag-ryo.github.io',
    // assetPrefix: '/nag-ryo.github.io/',
    images: { unoptimized: true },
};

export default nextConfig;
