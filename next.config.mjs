/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'amber-managing-angelfish-602.mypinata.cloud',
            port: '',
            pathname: '/ipfs/**',
          },
        ],
      },
};

export default nextConfig;

