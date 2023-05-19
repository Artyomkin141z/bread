/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/uploads/**',
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
