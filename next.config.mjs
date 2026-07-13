/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medias.utsavfashion.com",
      },
    ],
  },
};

export default nextConfig;
