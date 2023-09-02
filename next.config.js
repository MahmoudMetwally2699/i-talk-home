/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'encrypted-tbn0.gstatic.com',
      'repository-images.githubusercontent.com',
      'camo.githubusercontent.com',
      's3.amazonaws.com',
      'github-production-user-asset-6210df.s3.amazonaws.com',
    ],
  },
  experimental: {
    appDir: false,
  },
};
