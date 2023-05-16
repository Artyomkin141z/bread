/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/panelapi/**',
            },
        ],
    },
    compiler: {
        styledComponents: true
    },
    experimental: {
        // serverActions: true,
        styledComponents: true,
    },
    experiments: {
        // topLevelAwait: true
    }
}

module.exports = nextConfig
