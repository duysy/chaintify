/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['picsum.photos', 'localhost'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig