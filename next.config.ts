import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: '',
                pathname: '/u/**',
            },
        ],
    }
};

export default nextConfig;
