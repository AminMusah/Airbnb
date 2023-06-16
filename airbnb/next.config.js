/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/register",
        destination: "http://localhost:3000/api/register",
      },
      {
        source: "/api/login",
        destination: "http://localhost:3000/api/login",
      },
    ];
  },
};

module.exports = nextConfig;
