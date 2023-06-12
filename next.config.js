/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    ssr: false,
    async rewrites() {
        return [
            // Rewrite everything to `pages/index`
            {
                source: "/:any*",
                destination: "/",
            },
        ];
    },
}
