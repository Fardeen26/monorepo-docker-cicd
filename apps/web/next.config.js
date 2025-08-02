/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@repo/db', '@repo/ui'],
    experimental: {
        esmExternals: 'loose'
    },
    webpack: (config, { isServer }) => {
        // Handle .js extensions for ESM modules
        config.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx']
        }

        return config
    }
};

export default nextConfig;
