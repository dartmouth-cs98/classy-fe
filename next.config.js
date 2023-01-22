/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['classy-api-bucket.s3.amazonaws.com', 's3.amazonaws.com'],
  },
};

// const imagesConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'classy-api-bucket.s3.amazonaws.com',
//         port: '',
//         pathname: '**',
//       },
//     ],
//   },
// };

module.exports = {
  nextConfig,
  // imagesConfig,
};
