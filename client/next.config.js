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
        // Enables the styled-components SWC transform
        styledComponents: true
    }
}

module.exports = nextConfig
