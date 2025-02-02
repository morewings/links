/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'export',
    cleanDistDir: true,
    images: {unoptimized: true},
    // Required to compile vCard
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config;
    },
};
