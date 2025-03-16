import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    env: {
        NEXT_PUBLIC_BASE_PATH: '/nag-ryo.github.io',
        MICRO_CMS_API_KEY: process.env.MICRO_CMS_API_KEY,
        MICRO_CMS_SERVICE_DOMAIN: process.env.MICRO_CMS_SERVICE_DOMAIN,
        MICRO_CMS_ENDPOINT_BLOG: process.env.MICRO_CMS_ENDPOINT_BLOG,
        PREVIEW_SECRET: process.env.PREVIEW_SECRET,
    },
    images: { unoptimized: true },
};

export default nextConfig;
