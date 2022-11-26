/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['picsum.photos']
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig