/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['classy-api-bucket.s3.amazonaws.com', 's3.amazonaws.com'],
  },
};
