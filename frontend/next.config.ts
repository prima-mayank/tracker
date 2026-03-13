import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'm.media-amazon.com' },
      { hostname: 'rukminim2.flixcart.com' },
      { hostname: 'images.meesho.com' },
      { hostname: 'assets.myntassets.com' },
      { hostname: 'images.ajio.com' },
    ],
  },
};

export default nextConfig;
