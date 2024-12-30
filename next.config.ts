import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    env: {
        NEXT_PUBLIC_BASE_PATH: '/nag-ryo.github.io',
    },
    images: { unoptimized: true },
};

export default nextConfig;
